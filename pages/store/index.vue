<script setup>
import storeLayouts from '~/layouts/storeLayouts.vue'

const otpInputs = ref(['', '', '', '',])

const handleOtpInput = (index, event) => {
    // รับเฉพาะตัวเลข
    const value = event.target.value.replace(/[^0-9]/g, '')

    // เก็บแค่ตัวเดียว
    otpInputs.value[index] = value.slice(0, 1)

    // ถ้ามีการป้อนตัวเลขและไม่ใช่ช่องสุดท้าย ให้เลื่อนไปช่องถัดไป
    if (value && index < 3) {
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

const buttonClass = computed(() => {
    // ตรวจสอบว่า OTP ครบ 6 หลักหรือไม่
    const isComplete = otpInputs.value.every(digit => digit !== '')
    return isComplete ? 'bg-[#FF6347]' : 'bg-[#FFCFC6]'
})

const isButtonDisabled = computed(() => {
    return !otpInputs.value.every(digit => digit !== '')
})
</script>

<template>
    <storeLayouts>
        <div class="absolute w-[288px] h-[228px] top-[78px]  flex flex-col gap-[32px]">
            <div class="w-[288px] h-[42px] flex justify-between items-center">
                <button type="button"
                    class="w-[42px] h-[42px] rounded-[22px] flex justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0px_4px_12px_0px_#0D0A2C0F]">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.4075 5.92548C11.7248 6.24278 11.7248 6.75722 11.4075 7.07452L6.29456 12.1875H21.6663C22.1151 12.1875 22.4788 12.5513 22.4788 13C22.4788 13.4487 22.1151 13.8125 21.6663 13.8125H6.29456L11.4075 18.9255C11.7248 19.2428 11.7248 19.7572 11.4075 20.0745C11.0902 20.3918 10.5758 20.3918 10.2585 20.0745L3.75848 13.5745C3.44118 13.2572 3.44118 12.7428 3.75848 12.4255L10.2585 5.92548C10.5758 5.60817 11.0902 5.60817 11.4075 5.92548Z"
                            fill="#0D1217" />
                    </svg>
                </button>
                <span
                    class="font-prompt text-[22px] font-semibold leading-[33.26px] text-center">เข้าสู่ระบบศูนย์ธุรกิจ</span>
                <div
                    class="w-[42px] h-[42px] rounded-[22px] p-[5px] flex justify-center items-center gap-[10px] bg-white">
                </div>
            </div>
            <div class="w-[288px] h-[48px] font-prompt text-center text-[16px] font-normal leading-[24.19px] px-[40px]">
                <span>เข้าสู่ระบบศูนย์ธุรกิจของคุณ ด้วยรหัส PIN ที่คุณมี</span>
            </div>
            <div class="w-[288px] h-[74px] flex justify-between">
                <input v-for="(digit, index) in otpInputs" :key="index" v-model="otpInputs[index]" type="tel"
                    inputmode="numeric" maxlength="1" @input="handleOtpInput(index, $event)"
                    @keydown="handleKeyDown(index, $event)"
                    class="w-[66px] h-[74px] rounded-[8px] border border-solid  text-center outline-none flex-shrink-0 font-prompt font-semibold text-[40px] leading-[60.48px] bg-[#1F2A370D]">
            </div>
        </div>
        <div class="w-[288px] h-[114px] absolute top-[430px] flex flex-col gap-[8px]">
            <button :class="buttonClass" :disabled="isButtonDisabled"
                class="w-[288px] h-[53px] px-[22px] flex items-center gap-[14px] rounded-[28px]  shadow-[0px_4px_12px_0px_#0000000F]">
                <span class="w-full font-prompt text-[18px] font-semibold leading-[27.22px] text-center text-white">ดำเนินการต่อ</span> 
            </button>
            <div class="w-[288px] h-[53px] px-[22px] flex items-center gap-[14px] rounded-[28px]">
                <a  href="" class="w-full font-prompt text-[18px] font-normal leading-[27.22px] text-center text-[#0D1217] opacity-40">ยกเลิก</a>
            </div>
        </div>
    </storeLayouts>

    <!-- <Menu class="fixed bottom-5 left-0 right-0 z-50" /> -->

</template>

<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif;
}
</style>
