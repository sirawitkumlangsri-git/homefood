<script setup>
import Search from '~/components/user/Search'
import ProductSale from '~/components/user/ProductSale.vue'

const isOpen = ref(false);
const selectedItem = ref('');

const selectItem = (item) => {
    selectedItem.value = item;
    isOpen.value = false;
};
</script>

<template>
    <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
        <RouterLink to="/"
            class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
                    fill="#0D1217" />
            </svg>
        </RouterLink>

        <div class="flex-1 mt-3">
            <h2 class="text-xl mx-16 font-bold">สินค้าลดราคา</h2>
        </div>
    </div>

    <div>
        <Search />
    </div>

    <div class="relative">
        <button @click="isOpen = !isOpen"
            class="select select-bordered h-14 w-full flex items-center justify-between p-4">
            <div class="flex items-center">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2 7C2 4.51472 4.01472 2.5 6.5 2.5C8.98528 2.5 11 4.51472 11 7V10C11 10.3487 11 10.5231 10.9617 10.6662C10.8576 11.0544 10.5544 11.3576 10.1662 11.4617C10.0231 11.5 9.84874 11.5 9.5 11.5H6.5C4.01472 11.5 2 9.48528 2 7Z"
                        fill="url(#paint0_linear_378_602)" />
                    <path
                        d="M13 15C13 14.6513 13 14.4769 13.0383 14.3338C13.1424 13.9456 13.4456 13.6424 13.8338 13.5383C13.9769 13.5 14.1513 13.5 14.5 13.5H17.5C19.9853 13.5 22 15.5147 22 18C22 20.4853 19.9853 22.5 17.5 22.5C15.0147 22.5 13 20.4853 13 18V15Z"
                        fill="url(#paint1_linear_378_602)" />
                    <path
                        d="M2 18C2 15.5147 4.01472 13.5 6.5 13.5H9.2C9.83006 13.5 10.1451 13.5 10.3857 13.6226C10.5974 13.7305 10.7695 13.9026 10.8774 14.1143C11 14.3549 11 14.6699 11 15.3V18C11 20.4853 8.98528 22.5 6.5 22.5C4.01472 22.5 2 20.4853 2 18Z"
                        fill="url(#paint2_linear_378_602)" />
                    <path
                        d="M13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5H14.2857C14.1365 11.5 14.0618 11.5 13.999 11.4929C13.4775 11.4342 13.0658 11.0225 13.0071 10.501C13 10.4382 13 10.3635 13 10.2143V7Z"
                        fill="url(#paint3_linear_378_602)" />
                    <defs>
                        <linearGradient id="paint0_linear_378_602" x1="2" y1="23" x2="22" y2="3"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF6347" />
                            <stop offset="1" stop-color="#FF9684" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_378_602" x1="2" y1="23" x2="22" y2="3"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF6347" />
                            <stop offset="1" stop-color="#FF9684" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_378_602" x1="2" y1="23" x2="22" y2="3"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF6347" />
                            <stop offset="1" stop-color="#FF9684" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_378_602" x1="2" y1="23" x2="22" y2="3"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF6347" />
                            <stop offset="1" stop-color="#FF9684" />
                        </linearGradient>
                    </defs>
                </svg>

                <span>เลือกประเภทสินค้า</span>
            </div>
        </button>

        <div v-if="isOpen === true" class="absolute top-full left-0 right-0 bg-white shadow-md mt-2 rounded-md">
            <ul class="p-2">
                <li @click="selectItem('Star Wars')" class="p-2 hover:bg-gray-200">Star Wars</li>
                <li @click="selectItem('Harry Potter')" class="p-2 hover:bg-gray-200">Harry Potter</li>
                <li @click="selectItem('Lord of the Rings')" class="p-2 hover:bg-gray-200">Lord of the Rings</li>
                <li @click="selectItem('Planet of the Apes')" class="p-2 hover:bg-gray-200">Planet of the Apes</li>
                <li @click="selectItem('Star Trek')" class="p-2 hover:bg-gray-200">Star Trek</li>
            </ul>
        </div>
    </div>

    <ProductSale />
</template>

<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif;
}
</style>
