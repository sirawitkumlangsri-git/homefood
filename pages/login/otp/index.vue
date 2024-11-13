<script setup>
const otpInputs = ref(['', '', '', '', '', ''])

const handleOtpInput = (index, event) => {
    // รับเฉพาะตัวเลข
    const value = event.target.value.replace(/[^0-9]/g, '')

    // เก็บแค่ตัวเดียว
    otpInputs.value[index] = value.slice(0, 1)

    // ถ้ามีการป้อนตัวเลขและไม่ใช่ช่องสุดท้าย ให้เลื่อนไปช่องถัดไป
    if (value && index < 5) {
        event.target.nextElementSibling?.focus()
    }
}

const handleKeyDown = (index, event) => {
    // ถ้ากด Backspace และช่องปัจจุบันว่าง ให้ย้อนกลับไปช่องก่อนหน้า
    if (event.key === 'Backspace' && !otpInputs.value[index] && index > 0) {
        otpInputs.value[index - 1] = ''
        event.target.previousElementSibling?.focus()
    }
}


// เพิ่ม computed properties สำหรับควบคุมปุ่ม
const buttonClass = computed(() => {
    // ตรวจสอบว่า OTP ครบ 6 หลักหรือไม่
    const isComplete = otpInputs.value.every(digit => digit !== '')
    return isComplete ? 'bg-[#FF6347]' : 'bg-[#FFCFC6]'
})

const isButtonDisabled = computed(() => {
    return !otpInputs.value.every(digit => digit !== '')
})

const goToGoogle = () => {
    window.location.href = 'https://www.google.com' // Redirect to Google

}
</script>

<template>
    <div class="w-full min-h-screen flex items-center justify-center font-prompt">

        <div class="absolute top-[78px] w-[288px] h-[204px] flex  flex-col gap-[32px]">
            <div class="w-full h-[42px] flex justify-between items-center">

                <div class="w-[42px] h-[42px] min-w-[42px] min-h-[42px] rounded-[22px] flex items-center gap-[10px]">

                    <button class="w-[26px] h-[26px] flex justify-center items-center" type="button"
                        aria-label="ย้อนกลับ">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.40802 0.925476C8.72532 1.24278 8.72532 1.75722 8.40802 2.07452L3.29504 7.1875H18.6668C19.1156 7.1875 19.4793 7.55127 19.4793 8C19.4793 8.44873 19.1156 8.8125 18.6668 8.8125H3.29504L8.40802 13.9255C8.72532 14.2428 8.72532 14.7572 8.40802 15.0745C8.09072 15.3918 7.57627 15.3918 7.25897 15.0745L0.758972 8.57452C0.441671 8.25722 0.441671 7.74278 0.758972 7.42548L7.25897 0.925476C7.57627 0.608175 8.09072 0.608175 8.40802 0.925476Z"
                                fill="#0D1217" />
                        </svg>
                    </button>

                </div>

                <div
                    class="w-[92px] h-[33px] text-center font-extrabold text-[22px] leading-[33.26px] bg-gradient-to-r from-[#FF6347] to-[#FF826C] bg-clip-text text-transparent">
                    การยืนยัน
                </div>

                <div class="w-[42px] h-[42px] min-w-[42px] min-h-[42px] rounded-[22px] flex items-center gap-[10px]">
                </div>

            </div>

            <div class="w-[288px] h-[24px] text-center font-normal text-[16px] leading-[24.19px] text-[#0D1217]">
                <span>ส่งโค้ดไปที่ (+66) 66 **** *649 แล้ว</span>
            </div>

            <div class="w-[288px] h-[74px] flex justify-between">
                <input v-for="(digit, index) in otpInputs" :key="index" v-model="otpInputs[index]" type="text"
                    inputmode="numeric" maxlength="1" @input="handleOtpInput(index, $event)"
                    @keydown="handleKeyDown(index, $event)"
                    class="w-[45px] h-[74px] rounded-[8px] border border-solid  text-center outline-none flex-shrink-0 font-prompt font-semibold text-[40px] leading-[60.48px]">
            </div>


        </div>

        <div
            class="w-[98px] h-[24px] absolute top-[294px] flex items-center justify-center font-prompt font-normal text-[16px] leading-[24.19px] text-center text-[#FF6347] ">
            รหัสไม่ถูกต้อง!
        </div>

        <div class="absolute top-[342px] w-[288px] flex flex-col gap-[24px]">

            <div class="w-[288px] h-[24px] font-normal text-[16px] leading-[24.19px] font-prompt text-center">
                ไม่ได้รับรหัส OTP?
            </div>

            <div class="w-[288px] h-[24px] flex justify-center items-center gap-[16px]">

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.0003 2.29167C5.74313 2.29167 2.29199 5.7428 2.29199 10C2.29199 14.2572 5.74313 17.7083 10.0003 17.7083C14.2575 17.7083 17.7087 14.2572 17.7087 10C17.7087 5.7428 14.2575 2.29167 10.0003 2.29167ZM1.04199 10C1.04199 5.05245 5.05277 1.04167 10.0003 1.04167C14.9479 1.04167 18.9587 5.05245 18.9587 10C18.9587 14.9475 14.9479 18.9583 10.0003 18.9583C5.05277 18.9583 1.04199 14.9475 1.04199 10ZM10.0003 6.04167C10.3455 6.04167 10.6253 6.32149 10.6253 6.66667V9.74112L12.5256 11.6414C12.7697 11.8855 12.7697 12.2812 12.5256 12.5253C12.2815 12.7694 11.8858 12.7694 11.6417 12.5253L9.55838 10.4419C9.44117 10.3247 9.37533 10.1658 9.37533 10V6.66667C9.37533 6.32149 9.65515 6.04167 10.0003 6.04167Z"
                        fill="#0D1217" />
                </svg>

                <div class="w-[60px] h-[24px] text-center font-prompt font-semibold text-[16px] leading-[24.19px]">
                    <span>00 : 45</span>
                </div>

            </div>

            <div class="w-[288px] h-[24px] text-center font-prompt font-semibold text-[16px] leading-[24.19px] ">
                <a class="text-[#FF6347] hover:underline cursor-pointer">ส่งรหัสใหม่อีกครั้ง</a>
            </div>

        </div>

        <button :class="buttonClass" :disabled="isButtonDisabled" @click="goToGoogle"
            class="absolute top-[496px] w-[288px] h-[53px] rounded-[28px] px-[22px] flex items-center justify-center gap-[14px] text-white font-semibold text-[18px] leading-[27.22px] text-center">
            ตรวจสอบ
        </button>

        <div class=" h-[24px] absolute top-[573px]  font-prompt font-normal text-[14px] leading-[21.17px] pb-[72px]">
            กลับไปที่ <a @click="navigateTo('/login')"
                class=" text-[#FF6347] hover:underline cursor-pointer text-[14px] leading-[21.17px] font-semibold">เข้าสู่ระบบ</a>
        </div>

    </div>
</template>

<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif;
}
</style>
