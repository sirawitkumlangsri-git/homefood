<script setup>
import adminLayouts from '~/layouts/adminLayouts.vue'


const useres = ref([])

const fetchUser = async () => {
    try {
        const response = await fetch('/api/admin/users', {
            method: 'GET',
        });
        if (!response.ok) throw new Error('Failed to fetch users');
        useres.value = await response.json();
    } catch (err) {
        console.error('Error fetching users:', err);
    }
};

onMounted( async() => {
    await fetchUser()
    console.log('user: ' , useres.value)
})
</script>

<template>
    <adminLayouts>
        <div
            class="flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full mt-1 bg-opacity-60">
            <h2 class="sm:text-6xl text-4xl font-bold text-[#fefeff] text-stroke tracking-wide">DASHBOARD</h2>
        </div>
    </adminLayouts>
</template>

<style scoped>
.text-stroke {
    text-shadow: -5px -1px 0 #FF8128, 1px -1px 0 #FF8128, -5px 1px 0 #FF8128, 1px 1px 0 #FF8128;
}
</style>