<template>
  <adminLayouts>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else class="flex justify-center p-4">
      <form @submit.prevent="submitForm" class="w-full">
        <label class="form-control w-full mt-3">
          <div class="label">
            <span class="label-text">ชื่อ</span>
          </div>
          <input type="text" v-model="form.fullname" class="input input-bordered w-full" required />
        </label>

        <label class="form-control w-full mt-3">
          <div class="label">
            <span class="label-text">อีเมล</span>
          </div>
          <input type="email" v-model="form.email" class="input input-bordered w-full" required />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">role</span>
          </div>
          <select class="select select-bordered" v-model="form.role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="cashier">Cashier</option>
          </select>
        </label>

        <div class="flex sm:justify-end justify-center gap-5">
          <RouterLink to="/admin/users" class="btn btn-accent font-light my-5 text-white sm:w-60 w-36">
            ย้อนกลับ
          </RouterLink>
          <div>
            <button type="submit" class="btn btn-accent my-5 text-white font-light sm:w-60 w-36">ยืนยันการแก้ไข</button>
          </div>
        </div>
      </form>
    </div>
  </adminLayouts>
</template>

<script setup>
import adminLayouts from '~/layouts/adminLayouts.vue'
const router = useRouter();
const route = useRoute();
const loading = ref(true);

const form = ref({
  email: '',
  role: '',
  fullname: '',
  phoneNumber: ''
});

const fetchUser = async (id) => {
  try {
    const response = await fetch(`/api/admin/user/${id}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`แสดงข้อมูลผู้ใช้ไม่สำเร็จ status : ${response.status}`);
    }
    const userData = await response.json();
    form.value = {
      email: userData.email,
      role: userData.role,
      fullname: userData.fullname,
      phoneNumber: userData.phoneNumber,
    };
  } catch (error) {
    console.error('แสดงข้อมูลผู้ใช้ไม่สำเร็จ:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  const id = route.params.id;
  console.log('Route ID:', id);
  if (id) {
    await fetchUser(id);
  }
  console.log('form : ' , form.value)
});

const submitForm = async () => {
  const id = route.params.id;
  try {
    const response = await fetch(`/api/admin/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
    router.push('/admin/users');
  } catch (error) {
    console.error('Error updating user:', error);
  }
};
</script>

<style>

</style>