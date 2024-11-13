<script setup>
import { ref, computed, onMounted } from 'vue'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'

const phoneInputRef = ref(null)
const emailInputRef = ref(null)
const fullNameInputRef = ref(null)
const iti = ref(null)


const validateNumber = () => {
  if (!iti.value || !window.intlTelInputUtils) return;

  const number = phoneInputRef.value.value.replace(/\D/g, '');
  const countryData = iti.value.getSelectedCountryData();

  // สำหรับประเทศ US
  if (countryData.iso2 === 'us') {
    // ตรวจสอบเบอร์ US: ต้องมี 10 หลัก
    const usNumberRegex = /^\d{10}$/;

    if (usNumberRegex.test(number)) {
      // Format: (XXX) XXX-XXXX
      const formattedNational = number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
      const formattedInternational = `+1 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
      const e164 = `+1${number}`;

      console.log({
        status: 'valid',
        type: 'us',
        phoneNumber: e164,
        dialCode: '+1',
        country: {
          name: 'United States',
          code: 'US'
        },
        formats: {
          international: formattedInternational,
          national: formattedNational,
          e164: e164
        }
      });
      return;
    }

    console.log({
      status: 'invalid',
      inputValue: number,
      errorMessage: 'Invalid US phone number format',
      country: {
        name: 'United States',
        code: 'US',
        dialCode: '+1'
      }
    });
    return;
  }

  // สำหรับประเทศไทย
  if (countryData.iso2 === 'th') {
    // ตรวจสอบเบอร์มือถือไทย: ขึ้นต้นด้วย 06, 08, 09 และมีความยาว 10 หลัก
    const thaiMobileRegex = /^0[689]\d{8}$/;
    // ตรวจสอบเบอร์บ้านไทย: ขึ้นต้นด้วย 02, 03, 04, 05, 07 และมีความยาว 9 หลัก
    const thaiFixedRegex = /^0[2-57]\d{7}$/;

    if (thaiMobileRegex.test(number)) {
      // จัดรูปแบบเบอร์มือถือ: 08x xxx xxxx
      const formattedNational = number.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
      const formattedInternational = `+66 ${number.slice(1, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
      const e164 = `+66${number.slice(1)}`;

      console.log({
        status: 'valid',
        type: 'mobile',
        phoneNumber: e164,
        dialCode: '+66',
        country: {
          name: 'Thailand',
          code: 'TH'
        },
        formats: {
          international: formattedInternational,
          national: formattedNational,
          e164: e164
        }
      });
      return;
    } else if (thaiFixedRegex.test(number)) {
      // จัดรูปแบบเบอร์บ้าน: 0xx xxx xxxx
      const formattedNational = number.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3');
      const formattedInternational = `+66 ${number.slice(1, 2)} ${number.slice(2, 5)} ${number.slice(5)}`;
      const e164 = `+66${number.slice(1)}`;

      console.log({
        status: 'valid',
        type: 'fixed',
        phoneNumber: e164,
        dialCode: '+66',
        country: {
          name: 'Thailand',
          code: 'TH'
        },
        formats: {
          international: formattedInternational,
          national: formattedNational,
          e164: e164
        }
      });
      return;
    }

    // ถ้าไม่ตรงกับรูปแบบใดๆ
    console.log({
      status: 'invalid',
      inputValue: number,
      errorMessage: 'เบอร์โทรไทยไม่ถูกต้อง กรุณาตรวจสอบรูปแบบเบอร์โทรศัพท์',
      country: {
        name: 'Thailand',
        code: 'TH',
        dialCode: '+66'
      }
    });
    return;
  }

  // สำหรับประเทศอื่นๆ ใช้การตรวจสอบของ intl-tel-input
  if (iti.value.isValidNumber()) {
    console.log({
      status: 'valid',
      phoneNumber: iti.value.getNumber(),
      dialCode: `+${countryData.dialCode}`,
      country: {
        name: countryData.name,
        code: countryData.iso2.toUpperCase()
      },
      formats: {
        international: iti.value.getNumber(intlTelInputUtils.numberFormat.INTERNATIONAL),
        national: iti.value.getNumber(intlTelInputUtils.numberFormat.NATIONAL),
        e164: iti.value.getNumber(intlTelInputUtils.numberFormat.E164)
      }
    });
  } else {
    const errorMessage = getErrorMessage(iti.value.getValidationError());
    console.log({
      status: 'invalid',
      inputValue: phoneInputRef.value.value,
      errorCode: iti.value.getValidationError(),
      errorMessage: errorMessage,
      country: {
        name: countryData.name,
        code: countryData.iso2.toUpperCase(),
        dialCode: `+${countryData.dialCode}`
      }
    });
  }


}

// เพิ่มฟังก์ชันแปลความหมาย error code
const getErrorMessage = (errorCode) => {
  if (!window.intlTelInputUtils) return 'เบอร์โทรไม่ถูกต้อง';

  switch (errorCode) {
    case intlTelInputUtils.validationError.IS_POSSIBLE:
      return "เบอร์โทรไม่ถูกต้องตามรูปแบบ";
    case intlTelInputUtils.validationError.INVALID_COUNTRY_CODE:
      return "รหัสประเทศไม่ถูกต้อง";
    case intlTelInputUtils.validationError.TOO_SHORT:
      return "เบอร์โทรสั้นเกินไป";
    case intlTelInputUtils.validationError.TOO_LONG:
      return "เบอร์โทรยาวเกินไป";
    case intlTelInputUtils.validationError.NOT_A_NUMBER:
      return "กรุณากรอกเฉพาะตัวเลข";
    default:
      return "เบอร์โทรไม่ถูกต้อง";
  }
}

onMounted(() => {
  // สร้าง intl-tel-input ก่อน
  iti.value = intlTelInput(phoneInputRef.value, {
    initialCountry: 'th',
    preferredCountries: ['th'],
    separateDialCode: true,
    formatOnDisplay: true,
    autoFormat: true,
    nationalMode: true,
    utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.15/build/js/utils.js'
  });

  // รอให้ utils script โหลดเสร็จ (ไม่ต้องสร้าง intl-tel-input ใหม่)
  const waitForUtils = () => {
    if (!window.intlTelInputUtils) {
      setTimeout(waitForUtils, 100);
    }
  };

  waitForUtils();
})


const logValues = () => {
  const phone = phoneInputRef.value?.value;
  const email = emailInputRef.value?.value;
  const fullName = fullNameInputRef.value?.value;

  console.log({
    phone,
    email,
    fullName
  });
}

const phone = ref('')
const email = ref('')
const fullName = ref('')

// Computed property for button class
const buttonClass = computed(() => {
  // Check if all fields have a value
  return (phone.value && email.value && fullName.value)
    ? 'bg-[#FF6347]'  // Active color
    : 'bg-[#FFCFC6]'  // Disabled color
})

const isButtonDisabled = computed(() => {
  return !(phone.value && email.value && fullName.value)
})

const goToGoogle = () => {
    window.location.href = 'https://www.google.com' // Redirect to Google

}
</script>

<template>
  <div class="mx-auto  items-center h-screen overflow-y-auto flex flex-col font-prompt">
    <div class="absolute top-[78px] w-[288px] h-[337px] flex flex-col gap-[32px] ">
      <h1
        class="h-[33px] px-[8px] gap-[10px] text-[22px] font-extrabold leading-[33.26px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF6347] to-[#FF826C] text-center">
        การลงทะเบียน
      </h1>

      <div class="w-[288px] h-auto gap-[24px] flex flex-col">

        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px]">
          <input v-model="phone" ref="phoneInputRef" type="tel"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px] "
            @blur="validateNumber(); logValues()" placeholder="เบอร์โทรศัพท์" />

        </div>
        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px] flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z"
              fill="#BABDC1" />
          </svg>
          <input v-model="email" ref="emailInputRef" type="text"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px]"
            @blur="logValues()" placeholder="อีเมล">
        </div>
        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px] flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="4" fill="#BABDC1" />
            <path
              d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
              fill="#BABDC1" />
          </svg>
          <input v-model="fullName" ref="fullNameInputRef" type="text"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px]"
            @blur="logValues()" placeholder="ชื่อเต็ม">
        </div>

        <div class="w-[288px] h-[24px] gap-[12px] flex justify-center">
          <div class="relative w-[24px] h-[24px]">
            <input type="checkbox"
              class="peer appearance-none w-[24px] h-[24px] border border-[#E9EAEB] rounded-[4px] checked:bg-[#FF6347] checked:border-[#FF6347] cursor-pointer">
            <svg
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden peer-checked:block"
              width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
          <div class="w-[139px] h-[24px] font-normal text-[16px] leading-[24.19px]">
            จดจำข้อมูลของฉันไว้
          </div>
        </div>

      </div>
    </div>

    <div class="absolute top-[488px] w-[288px] flex flex-col gap-[32px]  h-[181px] ">
        <button :class="buttonClass" :disabled="isButtonDisabled" @click="goToGoogle"
          class="w-[288px] h-[58px] rounded-[28px] flex items-center justify-center gap-[14px] font-prompt text-white font-semibold text-[18px] leading-[27.22px]">
          ลงทะเบียน
        </button>

      <div class="font-normal h-[24px] text-[16px] leading-[24.19px] text-[#6D6C69] flex items-center justify-between">
        <div class="w-[66.5px] border-[0.5px] border-[#6D6C69]"></div>
        หรือเข้าสู่ระบบด้วย
        <div class="w-[66.5px] border-[0.5px] border-[#6D6C69]"></div>
      </div>

      <div class="w-[288px] h-[40px] gap-[16px] flex justify-center">
        <button class="hover:opacity-80 transition-opacity" @click="goToGoogle">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#D6D6D6" />
            <path
              d="M29.8055 18.0415H29V18H20V22H25.6515C24.827 24.3285 22.6115 26 20 26C16.6865 26 14 23.3135 14 20C14 16.6865 16.6865 14 20 14C21.5295 14 22.921 14.577 23.9805 15.5195L26.809 12.691C25.023 11.0265 22.634 10 20 10C14.4775 10 10 14.4775 10 20C10 25.5225 14.4775 30 20 30C25.5225 30 30 25.5225 30 20C30 19.3295 29.931 18.675 29.8055 18.0415Z"
              fill="#FFC107" />
            <path
              d="M11.1528 15.3455L14.4383 17.755C15.3273 15.554 17.4803 14 19.9998 14C21.5293 14 22.9208 14.577 23.9803 15.5195L26.8088 12.691C25.0228 11.0265 22.6338 10 19.9998 10C16.1588 10 12.8278 12.1685 11.1528 15.3455Z"
              fill="#FF3D00" />
            <path
              d="M20.0002 30C22.5832 30 24.9302 29.0115 26.7047 27.404L23.6097 24.785C22.5719 25.5742 21.3039 26.001 20.0002 26C17.3992 26 15.1907 24.3415 14.3587 22.027L11.0977 24.5395C12.7527 27.778 16.1137 30 20.0002 30Z"
              fill="#4CAF50" />
            <path
              d="M29.8055 18.0415H29V18H20V22H25.6515C25.2571 23.1082 24.5467 24.0766 23.608 24.7855L23.6095 24.7845L26.7045 27.4035C26.4855 27.6025 30 25 30 20C30 19.3295 29.931 18.675 29.8055 18.0415Z"
              fill="#1976D2" />
          </svg>
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="goToGoogle">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#D6D6D6" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10 20.0558C10 25.0275 13.6108 29.1617 18.3333 30V22.7775H15.8333V20H18.3333V17.7775C18.3333 15.2775 19.9442 13.8892 22.2225 13.8892C22.9442 13.8892 23.7225 14 24.4442 14.1108V16.6667H23.1667C21.9442 16.6667 21.6667 17.2775 21.6667 18.0558V20H24.3333L23.8892 22.7775H21.6667V30C26.3892 29.1617 30 25.0283 30 20.0558C30 14.525 25.5 10 20 10C14.5 10 10 14.525 10 20.0558Z"
              fill="#1A78F1" />
          </svg>
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="goToGoogle">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#D6D6D6" />
            <g clip-path="url(#clip0_341_3897)">
              <rect x="8" y="8" width="24" height="24" fill="url(#pattern0_341_3897)" />
            </g>
            <defs>
              <pattern id="pattern0_341_3897" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_341_3897" transform="scale(0.00195312)" />
              </pattern>
              <clipPath id="clip0_341_3897">
                <rect width="24" height="24" fill="white" transform="translate(8 8)" />
              </clipPath>
              <image id="image0_341_3897" width="512" height="512"
                xlink:href="data:image/png;base64,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cTJYALygH040cvrIfTKBxEYggAACCCBQNAHhuTdmpQCwlXxZeO5JPMinaFHG/iCAAAIIZE5APy8/AwXAKqFkR6W78sHMAbFBCCCAAAIIFFFA+M6vm1gArBRKnsctfUWMLPYJAQQQQCDTApaSv0i9APCdVywlz6h2Vj+QaRw2DgEEEEAAgaIKCCV/kGIB8KJQ8tRqZ/W9RfVkvxBAAAEEEMiFgKXkiSkUAI/aSo7l4r5chAQbiQACCCBQBoE2Jb+UUAHwplBymvAduyVoGVEGS/YRAQQQQACB/AgELSOE575ksAhYK5S8RkwY/ef5QWBLEUAAAQQQKKGAfrlOzAJgh1DyXlvJMXy/X8IAYpcRQAABBPIpMKqz+lGh5NIIRcBTtudezGg/n8edrUYAAQQQQKCl/1qAFXWKAD3Sf8RS8nzLc78AGwIIIIAAAggUQMD13P2FkuOFkvMsJZ+wfGemULLH8p2LbCVbrYnWRwqwm+wCAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAiz9uIIAAAA/SURBVAgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAKJC/x/D+b1rZ+awxgAAAAASUVORK5CYII=" />
            </defs>
          </svg>
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="goToGoogle">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#D6D6D6" />
            <path
              d="M27.6641 25.5861C27.3874 26.2653 27.0454 26.913 26.6436 27.5191C26.1068 28.3262 25.666 28.8839 25.3282 29.1943C24.8034 29.7015 24.2396 29.9624 23.6369 29.9772C23.2051 29.9772 22.6833 29.8477 22.0756 29.5847C21.4659 29.3227 20.9061 29.1943 20.3933 29.1943C19.8566 29.1943 19.2808 29.3227 18.6641 29.5847C18.0484 29.8477 17.5506 29.9856 17.1697 29.9982C16.593 30.0245 16.0162 29.7572 15.4415 29.1943C15.0747 28.8576 14.6159 28.2788 14.0651 27.4601C13.4754 26.5878 12.9906 25.5724 12.6107 24.4181C12.2039 23.169 12 21.961 12 20.7909C12 19.4514 12.2749 18.2949 12.8256 17.3269C13.2422 16.5666 13.8377 15.932 14.5549 15.4844C15.262 15.0378 16.0693 14.7974 16.8939 14.7878C17.3537 14.7878 17.9564 14.9372 18.7031 15.2318C19.4497 15.5264 19.9295 15.6759 20.1384 15.6759C20.2964 15.6759 20.8271 15.5001 21.7307 15.1518C22.5834 14.8288 23.3031 14.6952 23.8928 14.7478C25.4921 14.8835 26.6926 15.5464 27.4912 16.7418C26.0618 17.6541 25.3552 18.9305 25.3692 20.5689C25.3811 21.8453 25.822 22.907 26.6856 23.7499C27.0674 24.1345 27.5129 24.4423 28 24.658C27.894 24.981 27.7821 25.2893 27.6641 25.5861ZM23.9987 10.4009C23.9987 11.4005 23.6509 12.3349 22.9602 13.1988C22.1246 14.2259 21.115 14.8204 20.0205 14.7267C20.0062 14.601 19.9992 14.4745 19.9995 14.3479C19.9995 13.3872 20.3953 12.3602 21.102 11.5194C21.4539 11.0943 21.9017 10.7397 22.4444 10.4577C22.9862 10.1799 23.498 10.0263 23.9798 9.99997C23.9928 10.1347 23.9987 10.2683 23.9987 10.4009Z"
              fill="#383A3A" />
          </svg>
        </button>

      </div>
    </div>

    <div class=" h-[21px] absolute top-[686px] font-light text-[14px] leading-[21.17px] pb-[72px]">
      ยังไม่มีบัญชี? <a  @click="navigateTo('/login')" class="text-[#FF6347] hover:underline cursor-pointer">เข้าสู่ระบบ</a>
    </div>
  </div>
</template>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

input[type="checkbox"]:checked+svg {
  display: block;
}

/* ปรับแต่ง style ของ intl-tel-input */
:deep(.iti) {
  width: 100%;
}

:deep(.iti__flag-container) {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2px;
}

:deep(.iti__selected-flag) {
  background: transparent !important;
  padding: 0 8px 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 0;
}

:deep(.iti__country-list) {
  border-radius: 8px;
  margin-top: 8px;
  max-height: 200px;
}

:deep(.iti__country) {
  padding: 8px 12px;
}

:deep(.iti__dial-code) {
  color: #666;
}

/* ปรับแต่ง input */
input {
  font-size: 16px;
}

input:focus {
  outline: none;
}

/* แสดง arrow และจัดตำแหน่งใหม่ */
:deep(.iti__arrow) {
  display: inline-block !important;
  position: relative;
  left: 4px;
  margin-left: 4px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #555;
}

/* จัดการ layout ของ flag container */
:deep(.iti__flag-container) {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

:deep(.iti__selected-flag) {
  background: transparent !important;
  padding: 0 8px 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 0;
}

/* จัดการ selected country primary */
:deep(.iti__selected-country-primary) {
  margin-left: 0;
  padding-left: 0;
  display: flex;
  align-items: center;
}

/* ปรับตำแหน่งธง */
:deep(.iti__flag) {
  margin-left: 0;
}

/* จัดการ dial code */
:deep(.iti__selected-dial-code) {
  order: 1;
  margin-right: 4px;
}

/* จัดการตำแหน่ง arrow */
:deep(.iti__arrow) {
  order: 2;
}

/* ปรับขนาดและสีของ arrow */
:deep(.iti__arrow--up) {
  border-top: none;
  border-bottom: 5px solid #555;
}

:deep(.iti__search-input) {
  /* border: 1px solid #6D6C69 !important; */
  border-radius: 4px;
  margin: 4px 8px;
  width: calc(100% - 16px);
  font-family: 'Prompt', sans-serif;
}

:deep(.iti__search-input:focus) {
  outline: none;
  /* border-color: #6D6C69 !important; */
}
</style>


