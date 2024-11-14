<script setup>
import { ref, computed, onMounted } from 'vue'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'

import Line from '~/components/user/icons/Line.vue'
import Apple from '~/components/user/icons/Apple.vue'
import Facebook from '~/components/user/icons/Facebook.vue'
import Google from '~/components/user/icons/Google.vue'
import Email from '~/components/user/icons/Email.vue'
import User from '~/components/user/icons/User.vue'

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

const phone = ref('')
const email = ref('')
const fullName = ref('')

watch(phone, (newValue) => {
  console.log('phone:', newValue)
})

const router = useRouter()

const register = async () => {
  const response = await $fetch('/api/auth/register', {
    method: 'POST',
    body: { email: email.value, phoneNumber: phone.value, fullname: fullName.value }
  });
  router.push('/login')
};


const buttonClass = computed(() => {
  return (phone.value && email.value && fullName.value)
    ? 'bg-[#FF6347]'//Activate
    : 'bg-[#FFCFC6]'
})

const isButtonDisabled = computed(() => {
  return !(phone.value && email.value && fullName.value)
})


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
            placeholder="เบอร์โทรศัพท์" /> <!-- @blur="validateNumber()" -->

        </div>
        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px] flex items-center">
          <Email />
          <input v-model="email" ref="emailInputRef" type="text"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px]"
            placeholder="อีเมล">
        </div>
        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px] flex items-center">
          <User />
          <input v-model="fullName" ref="fullNameInputRef" type="text"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px]"
            placeholder="ชื่อเต็ม">
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

    <div class="absolute top-[488px] w-[288px] flex flex-col gap-[32px]  h-[181px] " >
      <button :class="buttonClass" :disabled="isButtonDisabled" @click="register"
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
          <Google />
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="goToGoogle">
          <Facebook />
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="goToGoogle">
          <Line />
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="goToGoogle">
          <Apple />
        </button>

      </div>
    </div>

    <div class=" h-[21px] absolute top-[686px] font-light text-[14px] leading-[21.17px] pb-[72px]">
      ยังไม่มีบัญชี? <a @click="navigateTo('/login')"
        class="text-[#FF6347] hover:underline cursor-pointer">เข้าสู่ระบบ</a>
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