<template>
  <div>
    Login
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">เบอร์</span>
      </div>
      <input v-model="phone" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>

    <button @click="login" class="btn">ยืนยัน</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const phone = ref('')
const login = async () => {
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        phoneNumber: phone.value,
      },
    });

    authStore.login(response);
  } catch (error) {
    alert('เข้าสู่ระบบไม่สำเร็จ')
    console.error('Login failed', error);
    loginError.value = 'เบอร์ไม่ถูกต้อง';
  }
};
</script>

<style></style>