<script setup>
import Navbar from '~/components/user/Navbar'
import Promotion from '~/components/user/Promotion'
import Menu from '~/components/user/Menu'
import MenuDesktop from '~/components/user/MenuDesktop.vue'
</script>

<template>
    <div class="mx-auto max-w-7xl mt-5 pb-24">
        <div class="mx-auto">
            <Navbar />
        </div>

        <slot />

        <Menu class="fixed bottom-5 left-0 right-0 z-50 sm:hidden" />
        <MenuDesktop class="hidden sm:block fixed bottom-[40%] left-0 z-50"/>
    </div>
</template>


<style scoped></style>
