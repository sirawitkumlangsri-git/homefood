<script setup>
import storeLayouts from '~/layouts/storeLayouts.vue'
import Search from '~/components/user/Search.vue'
</script>

<template>
    <storeLayouts>
        <div class=" absolute w-[288px] top-[78px]  h-[42px] flex justify-between items-center">
            <button type="button"
                class="w-[42px] h-[42px] rounded-[22px] flex justify-center items-center gap-[10px] bg-[#FFFFFF1A] shadow-[0px_4px_12px_0px_#0D0A2C0F]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.4075 5.92548C11.7248 6.24278 11.7248 6.75722 11.4075 7.07452L6.29456 12.1875H21.6663C22.1151 12.1875 22.4788 12.5513 22.4788 13C22.4788 13.4487 22.1151 13.8125 21.6663 13.8125H6.29456L11.4075 18.9255C11.7248 19.2428 11.7248 19.7572 11.4075 20.0745C11.0902 20.3918 10.5758 20.3918 10.2585 20.0745L3.75848 13.5745C3.44118 13.2572 3.44118 12.7428 3.75848 12.4255L10.2585 5.92548C10.5758 5.60817 11.0902 5.60817 11.4075 5.92548Z"
                        fill="#0D1217" />
                </svg>
            </button>
            <span class="font-prompt text-[22px] font-semibold leading-[33.26px] text-center">ศูนย์ธุรกิจของฉัน</span>
            <button type="button"
                class="w-[42px] h-[42px] rounded-[22px] p-[5px] flex justify-center items-center gap-[10px] bg-white shadow-[0px_4px_12px_0px_#0D0A2C0F]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.4375 12.9997C2.4375 11.3543 3.77132 10.0205 5.41667 10.0205C7.06202 10.0205 8.39583 11.3543 8.39583 12.9997C8.39583 14.645 7.06202 15.9788 5.41667 15.9788C3.77132 15.9788 2.4375 14.645 2.4375 12.9997ZM5.41667 11.6455C4.66878 11.6455 4.0625 12.2518 4.0625 12.9997C4.0625 13.7476 4.66878 14.3538 5.41667 14.3538C6.16455 14.3538 6.77083 13.7476 6.77083 12.9997C6.77083 12.2518 6.16455 11.6455 5.41667 11.6455Z"
                        fill="#0D1217" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.0208 12.9997C10.0208 11.3543 11.3547 10.0205 13 10.0205C14.6453 10.0205 15.9792 11.3543 15.9792 12.9997C15.9792 14.645 14.6453 15.9788 13 15.9788C11.3547 15.9788 10.0208 14.645 10.0208 12.9997ZM13 11.6455C12.2521 11.6455 11.6458 12.2518 11.6458 12.9997C11.6458 13.7476 12.2521 14.3538 13 14.3538C13.7479 14.3538 14.3542 13.7476 14.3542 12.9997C14.3542 12.2518 13.7479 11.6455 13 11.6455Z"
                        fill="#0D1217" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20.5833 10.0205C18.938 10.0205 17.6042 11.3543 17.6042 12.9997C17.6042 14.645 18.938 15.9788 20.5833 15.9788C22.2287 15.9788 23.5625 14.645 23.5625 12.9997C23.5625 11.3543 22.2287 10.0205 20.5833 10.0205ZM19.2292 12.9997C19.2292 12.2518 19.8354 11.6455 20.5833 11.6455C21.3312 11.6455 21.9375 12.2518 21.9375 12.9997C21.9375 13.7476 21.3312 14.3538 20.5833 14.3538C19.8354 14.3538 19.2292 13.7476 19.2292 12.9997Z"
                        fill="#0D1217" />
                </svg>

            </button>
        </div>
        <div
            class="absolute w-[288px] h-[56px] min-[56px] top-[152px] rounded-[8px] border border-solid p-[16px] gap-[12px] flex items-center bg-[#1F2A370D] border-[#E9EAEB]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75ZM1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5Z"
                    fill="#BABDC1" />
            </svg>

            <input type="text" placeholder="ค้นหา..."
                class="w-full bg-transparent outline-none text-[#0D1217] placeholder:text-[#BABDC1] font-prompt font-normal text-base leading-[24.19px] opacity-100">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.25 7C18.25 9.07107 16.5711 10.75 14.5 10.75C12.4289 10.75 10.75 9.07107 10.75 7C10.75 4.92893 12.4289 3.25 14.5 3.25C16.5711 3.25 18.25 4.92893 18.25 7ZM14.5 9.25C15.7426 9.25 16.75 8.24264 16.75 7C16.75 5.75736 15.7426 4.75 14.5 4.75C13.2574 4.75 12.25 5.75736 12.25 7C12.25 8.24264 13.2574 9.25 14.5 9.25Z"
                    fill="#0D1217" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.75 17C5.75 19.0711 7.42893 20.75 9.5 20.75C11.5711 20.75 13.25 19.0711 13.25 17C13.25 14.9289 11.5711 13.25 9.5 13.25C7.42893 13.25 5.75 14.9289 5.75 17ZM9.5 19.25C8.25736 19.25 7.25 18.2426 7.25 17C7.25 15.7574 8.25736 14.75 9.5 14.75C10.7426 14.75 11.75 15.7574 11.75 17C11.75 18.2426 10.7426 19.25 9.5 19.25Z"
                    fill="#0D1217" />
                <path
                    d="M14.25 16.9585C14.25 16.5443 14.5858 16.2085 15 16.2085H22C22.4142 16.2085 22.75 16.5443 22.75 16.9585C22.75 17.3727 22.4142 17.7085 22 17.7085H15C14.5858 17.7085 14.25 17.3727 14.25 16.9585Z"
                    fill="#0D1217" />
                <path
                    d="M9 6.20852C9.41421 6.20852 9.75 6.54431 9.75 6.95852C9.75 7.37273 9.41421 7.70852 9 7.70852L2 7.70852C1.58579 7.70852 1.25 7.37273 1.25 6.95852C1.25 6.54431 1.58579 6.20852 2 6.20852L9 6.20852Z"
                    fill="#0D1217" />
                <path
                    d="M1.25 16.9585C1.25 16.5443 1.58579 16.2085 2 16.2085H4C4.41421 16.2085 4.75 16.5443 4.75 16.9585C4.75 17.3727 4.41421 17.7085 4 17.7085H2C1.58579 17.7085 1.25 17.3727 1.25 16.9585Z"
                    fill="#0D1217" />
                <path
                    d="M22 6.20852C22.4142 6.20852 22.75 6.54431 22.75 6.95852C22.75 7.37273 22.4142 7.70852 22 7.70852H20C19.5858 7.70852 19.25 7.37273 19.25 6.95852C19.25 6.54431 19.5858 6.20852 20 6.20852H22Z"
                    fill="#0D1217" />
            </svg>

        </div>

        <div class="absolute w-[288px] h-auto top-[232px] flex flex-wrap gap-[16px] pb-[40px]">
            <div class="w-[136px] h-auto p-[8px] gap-[8px] rounded-[12px] bg-white shadow-[0px_4px_6px_0px_#0D0A2C0F] flex flex-col">
                <div class=" flex w-[120px] h-[100px] rounded-[8px] bg-[#1F2A370D]">
                    <img src="https://s3-alpha-sig.figma.com/img/9404/448d/9c80947e0408d3d81f78f309e848d61e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZL~ns6zfLnlB8ZUmRted~URyOJu8G92fMO-pKBSZVPf8dvc0UAdzjCceUKxMbd3nUmPn9AK6wiANIveH4X~aUx9vAKF998xs43YfZKUozmeN~b-Ql2aybd9wAUAd25QXEBsT7glyZ5cBk~vh-w8WdfxRB7HPU3P3JhKC3x8h77x-u~tmjzvvRhr-fSVdiAPkB2po~ETZFpesDXLskkK9djNqRyQVd8hGdPT4NAd491~Yo-FVwfWth024t3XMvX7CtmUzLJG4QsmnAQt1waHxCmZ4K1yytg7-twUeu-P2dlo9J00u6Pvb5vGxKOVBkHx5vga3m~G1h1mxeXDck0lUGQ__"
                        alt="Store thumbnail" class="w-full h-full object-cover rounded-[8px]">
                </div>
                <div
                    class="w-full font-prompt text-[12px] font-medium leading-[18.14px] text-[#0D1217] overflow-hidden">
                    <span>ร้านขนมหวานแสนอร่อยมากๆกกกกฟฟกฟหกฟกหกฟหกฟหกหกฟหกฟหกฟกกฟก</span>
                </div>
                <div class="mt-auto">
                    <div class="w-[35px] h-[18px] gap-[4px] flex items-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.33967 3.15521C6.07855 1.82973 6.44799 1.16699 7.00033 1.16699C7.55266 1.16699 7.9221 1.82973 8.66098 3.15521L8.85214 3.49813C9.0621 3.87479 9.16709 4.06312 9.33078 4.18738C9.49446 4.31164 9.69833 4.35777 10.1061 4.45002L10.4773 4.53401C11.9121 4.85865 12.6295 5.02097 12.8002 5.56984C12.9708 6.1187 12.4818 6.69062 11.5036 7.83445L11.2505 8.13037C10.9726 8.45541 10.8336 8.61793 10.7711 8.81899C10.7085 9.02005 10.7296 9.23689 10.7716 9.67056L10.8098 10.0654C10.9577 11.5915 11.0317 12.3546 10.5848 12.6938C10.138 13.033 9.46626 12.7237 8.12285 12.1052L7.77529 11.9451C7.39354 11.7694 7.20266 11.6815 7.00033 11.6815C6.79799 11.6815 6.60712 11.7694 6.22536 11.9451L5.8778 12.1052C4.53439 12.7237 3.86268 13.033 3.41583 12.6938C2.96898 12.3546 3.04292 11.5915 3.19081 10.0654L3.22907 9.67057C3.27109 9.23689 3.2921 9.02005 3.22958 8.81899C3.16705 8.61793 3.02807 8.45541 2.75011 8.13037L2.49705 7.83445C1.51889 6.69062 1.02981 6.1187 1.20049 5.56984C1.37117 5.02097 2.08858 4.85865 3.52339 4.53401L3.89459 4.45002C4.30232 4.35777 4.50619 4.31164 4.66988 4.18738C4.83357 4.06312 4.93855 3.87479 5.14851 3.49813L5.33967 3.15521Z"
                                fill="#FFC700" />
                        </svg>
                        <span class="font-prompt text-[12px] font-normal leading-[18.14px] text-[#0D1217]">4.5</span>
                    </div>
                    <div class="w-[118px] gap-[8px] flex justify-between items-center mb-[2px] ">
                        <span
                            class="font-prompt text-[14px] font-semibold leading-[21.17px]  text-[#FF6347] rounded">สถานะร้าน</span>
                        <label class="relative inline-flex items-center cursor-pointer w-[50px] h-[22px]">
                            <input type="checkbox" class="sr-only peer" checked="checked" aria-label="Store status toggle" />
                            <div
                                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#13C296] peer transition-all duration-200">
                            </div>
                            <div
                                class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-200">
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="w-[136px] h-auto p-[8px] gap-[8px] rounded-[12px] bg-white shadow-[0px_4px_6px_0px_#0D0A2C0F] flex flex-col">
                <div class=" flex w-[120px] h-[100px] rounded-[8px] bg-[#1F2A370D]">
                    <img src="https://s3-alpha-sig.figma.com/img/9404/448d/9c80947e0408d3d81f78f309e848d61e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZL~ns6zfLnlB8ZUmRted~URyOJu8G92fMO-pKBSZVPf8dvc0UAdzjCceUKxMbd3nUmPn9AK6wiANIveH4X~aUx9vAKF998xs43YfZKUozmeN~b-Ql2aybd9wAUAd25QXEBsT7glyZ5cBk~vh-w8WdfxRB7HPU3P3JhKC3x8h77x-u~tmjzvvRhr-fSVdiAPkB2po~ETZFpesDXLskkK9djNqRyQVd8hGdPT4NAd491~Yo-FVwfWth024t3XMvX7CtmUzLJG4QsmnAQt1waHxCmZ4K1yytg7-twUeu-P2dlo9J00u6Pvb5vGxKOVBkHx5vga3m~G1h1mxeXDck0lUGQ__"
                        alt="Store thumbnail" class="w-full h-full object-cover rounded-[8px]">
                </div>
                <div
                    class="w-full font-prompt text-[12px] font-medium leading-[18.14px] text-[#0D1217] overflow-hidden">
                    <span>ร้านขนมหวานแสนอร่อยมาก</span>
                </div>
                <div class="mt-auto">
                    <div class="w-[35px] h-[18px] gap-[4px] flex items-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.33967 3.15521C6.07855 1.82973 6.44799 1.16699 7.00033 1.16699C7.55266 1.16699 7.9221 1.82973 8.66098 3.15521L8.85214 3.49813C9.0621 3.87479 9.16709 4.06312 9.33078 4.18738C9.49446 4.31164 9.69833 4.35777 10.1061 4.45002L10.4773 4.53401C11.9121 4.85865 12.6295 5.02097 12.8002 5.56984C12.9708 6.1187 12.4818 6.69062 11.5036 7.83445L11.2505 8.13037C10.9726 8.45541 10.8336 8.61793 10.7711 8.81899C10.7085 9.02005 10.7296 9.23689 10.7716 9.67056L10.8098 10.0654C10.9577 11.5915 11.0317 12.3546 10.5848 12.6938C10.138 13.033 9.46626 12.7237 8.12285 12.1052L7.77529 11.9451C7.39354 11.7694 7.20266 11.6815 7.00033 11.6815C6.79799 11.6815 6.60712 11.7694 6.22536 11.9451L5.8778 12.1052C4.53439 12.7237 3.86268 13.033 3.41583 12.6938C2.96898 12.3546 3.04292 11.5915 3.19081 10.0654L3.22907 9.67057C3.27109 9.23689 3.2921 9.02005 3.22958 8.81899C3.16705 8.61793 3.02807 8.45541 2.75011 8.13037L2.49705 7.83445C1.51889 6.69062 1.02981 6.1187 1.20049 5.56984C1.37117 5.02097 2.08858 4.85865 3.52339 4.53401L3.89459 4.45002C4.30232 4.35777 4.50619 4.31164 4.66988 4.18738C4.83357 4.06312 4.93855 3.87479 5.14851 3.49813L5.33967 3.15521Z"
                                fill="#FFC700" />
                        </svg>
                        <span class="font-prompt text-[12px] font-normal leading-[18.14px] text-[#0D1217]">4.5</span>
                    </div>
                    <div class="w-[118px] gap-[8px] flex justify-between items-center mb-[2px] ">
                        <span
                            class="font-prompt text-[14px] font-semibold leading-[21.17px]  text-[#FF6347] rounded">สถานะร้าน</span>
                        <label class="relative inline-flex items-center cursor-pointer w-[50px] h-[22px]">
                            <input type="checkbox" class="sr-only peer" checked="checked" aria-label="Store status toggle" />
                            <div
                                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#13C296] peer transition-all duration-200">
                            </div>
                            <div
                                class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-200">
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="w-[136px] h-auto p-[8px] gap-[8px] rounded-[12px] bg-white shadow-[0px_4px_6px_0px_#0D0A2C0F] flex flex-col">
                <div class=" flex w-[120px] h-[100px] rounded-[8px] bg-[#1F2A370D]">
                    <img src="https://s3-alpha-sig.figma.com/img/9404/448d/9c80947e0408d3d81f78f309e848d61e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZL~ns6zfLnlB8ZUmRted~URyOJu8G92fMO-pKBSZVPf8dvc0UAdzjCceUKxMbd3nUmPn9AK6wiANIveH4X~aUx9vAKF998xs43YfZKUozmeN~b-Ql2aybd9wAUAd25QXEBsT7glyZ5cBk~vh-w8WdfxRB7HPU3P3JhKC3x8h77x-u~tmjzvvRhr-fSVdiAPkB2po~ETZFpesDXLskkK9djNqRyQVd8hGdPT4NAd491~Yo-FVwfWth024t3XMvX7CtmUzLJG4QsmnAQt1waHxCmZ4K1yytg7-twUeu-P2dlo9J00u6Pvb5vGxKOVBkHx5vga3m~G1h1mxeXDck0lUGQ__"
                        alt="Store thumbnail" class="w-full h-full object-cover rounded-[8px]">
                </div>
                <div
                    class="w-full font-prompt text-[12px] font-medium leading-[18.14px] text-[#0D1217] overflow-hidden">
                    <span>ร้านขนมหวานแสนอร่อยมากๆกกกกฟฟกฟหกฟกหกฟหกฟหกหกฟหกฟหกฟกกฟก</span>
                </div>
                <div class="mt-auto">
                    <div class="w-[35px] h-[18px] gap-[4px] flex items-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.33967 3.15521C6.07855 1.82973 6.44799 1.16699 7.00033 1.16699C7.55266 1.16699 7.9221 1.82973 8.66098 3.15521L8.85214 3.49813C9.0621 3.87479 9.16709 4.06312 9.33078 4.18738C9.49446 4.31164 9.69833 4.35777 10.1061 4.45002L10.4773 4.53401C11.9121 4.85865 12.6295 5.02097 12.8002 5.56984C12.9708 6.1187 12.4818 6.69062 11.5036 7.83445L11.2505 8.13037C10.9726 8.45541 10.8336 8.61793 10.7711 8.81899C10.7085 9.02005 10.7296 9.23689 10.7716 9.67056L10.8098 10.0654C10.9577 11.5915 11.0317 12.3546 10.5848 12.6938C10.138 13.033 9.46626 12.7237 8.12285 12.1052L7.77529 11.9451C7.39354 11.7694 7.20266 11.6815 7.00033 11.6815C6.79799 11.6815 6.60712 11.7694 6.22536 11.9451L5.8778 12.1052C4.53439 12.7237 3.86268 13.033 3.41583 12.6938C2.96898 12.3546 3.04292 11.5915 3.19081 10.0654L3.22907 9.67057C3.27109 9.23689 3.2921 9.02005 3.22958 8.81899C3.16705 8.61793 3.02807 8.45541 2.75011 8.13037L2.49705 7.83445C1.51889 6.69062 1.02981 6.1187 1.20049 5.56984C1.37117 5.02097 2.08858 4.85865 3.52339 4.53401L3.89459 4.45002C4.30232 4.35777 4.50619 4.31164 4.66988 4.18738C4.83357 4.06312 4.93855 3.87479 5.14851 3.49813L5.33967 3.15521Z"
                                fill="#FFC700" />
                        </svg>
                        <span class="font-prompt text-[12px] font-normal leading-[18.14px] text-[#0D1217]">4.5</span>
                    </div>
                    <div class="w-[118px] gap-[8px] flex justify-between items-center mb-[2px] ">
                        <span
                            class="font-prompt text-[14px] font-semibold leading-[21.17px]  text-[#FF6347] rounded">สถานะร้าน</span>
                        <label class="relative inline-flex items-center cursor-pointer w-[50px] h-[22px]">
                            <input type="checkbox" class="sr-only peer" checked="checked" aria-label="Store status toggle" />
                            <div
                                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#13C296] peer transition-all duration-200">
                            </div>
                            <div
                                class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-200">
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="w-[136px] h-auto p-[8px] gap-[8px] rounded-[12px] bg-white shadow-[0px_4px_6px_0px_#0D0A2C0F] flex flex-col">
                <div class=" flex w-[120px] h-[100px] rounded-[8px] bg-[#1F2A370D]">
                    <img src="https://s3-alpha-sig.figma.com/img/9404/448d/9c80947e0408d3d81f78f309e848d61e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZL~ns6zfLnlB8ZUmRted~URyOJu8G92fMO-pKBSZVPf8dvc0UAdzjCceUKxMbd3nUmPn9AK6wiANIveH4X~aUx9vAKF998xs43YfZKUozmeN~b-Ql2aybd9wAUAd25QXEBsT7glyZ5cBk~vh-w8WdfxRB7HPU3P3JhKC3x8h77x-u~tmjzvvRhr-fSVdiAPkB2po~ETZFpesDXLskkK9djNqRyQVd8hGdPT4NAd491~Yo-FVwfWth024t3XMvX7CtmUzLJG4QsmnAQt1waHxCmZ4K1yytg7-twUeu-P2dlo9J00u6Pvb5vGxKOVBkHx5vga3m~G1h1mxeXDck0lUGQ__"
                        alt="Store thumbnail" class="w-full h-full object-cover rounded-[8px]">
                </div>
                <div
                    class="w-full font-prompt text-[12px] font-medium leading-[18.14px] text-[#0D1217] overflow-hidden">
                    <span>ร้านขนมหวานแสนอร่อยมากๆกกกกฟฟกฟหกฟกหกฟหกฟหกหกฟหกฟหกฟกกฟก</span>
                </div>
                <div class="mt-auto">
                    <div class="w-[35px] h-[18px] gap-[4px] flex items-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.33967 3.15521C6.07855 1.82973 6.44799 1.16699 7.00033 1.16699C7.55266 1.16699 7.9221 1.82973 8.66098 3.15521L8.85214 3.49813C9.0621 3.87479 9.16709 4.06312 9.33078 4.18738C9.49446 4.31164 9.69833 4.35777 10.1061 4.45002L10.4773 4.53401C11.9121 4.85865 12.6295 5.02097 12.8002 5.56984C12.9708 6.1187 12.4818 6.69062 11.5036 7.83445L11.2505 8.13037C10.9726 8.45541 10.8336 8.61793 10.7711 8.81899C10.7085 9.02005 10.7296 9.23689 10.7716 9.67056L10.8098 10.0654C10.9577 11.5915 11.0317 12.3546 10.5848 12.6938C10.138 13.033 9.46626 12.7237 8.12285 12.1052L7.77529 11.9451C7.39354 11.7694 7.20266 11.6815 7.00033 11.6815C6.79799 11.6815 6.60712 11.7694 6.22536 11.9451L5.8778 12.1052C4.53439 12.7237 3.86268 13.033 3.41583 12.6938C2.96898 12.3546 3.04292 11.5915 3.19081 10.0654L3.22907 9.67057C3.27109 9.23689 3.2921 9.02005 3.22958 8.81899C3.16705 8.61793 3.02807 8.45541 2.75011 8.13037L2.49705 7.83445C1.51889 6.69062 1.02981 6.1187 1.20049 5.56984C1.37117 5.02097 2.08858 4.85865 3.52339 4.53401L3.89459 4.45002C4.30232 4.35777 4.50619 4.31164 4.66988 4.18738C4.83357 4.06312 4.93855 3.87479 5.14851 3.49813L5.33967 3.15521Z"
                                fill="#FFC700" />
                        </svg>
                        <span class="font-prompt text-[12px] font-normal leading-[18.14px] text-[#0D1217]">4.5</span>
                    </div>
                    <div class="w-[118px] gap-[8px] flex justify-between items-center mb-[2px] ">
                        <span
                            class="font-prompt text-[14px] font-semibold leading-[21.17px]  text-[#FF6347] rounded">สถานะร้าน</span>
                        <label class="relative inline-flex items-center cursor-pointer w-[50px] h-[22px]">
                            <input type="checkbox" class="sr-only peer" checked="checked" aria-label="Store status toggle" />
                            <div
                                class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#13C296] peer transition-all duration-200">
                            </div>
                            <div
                                class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform duration-200">
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </div>


    </storeLayouts>


</template>

<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif;
}
</style>
