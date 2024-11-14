<template>
  <adminLayouts>
    <div class="container mx-auto p-4 bg-base-100 rounded-lg">
      <div class="flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full bg-opacity-50">
        <h2 class="sm:text-5xl text-3xl font-bold text-[#fefeff] text-stroke tracking-wide">จัดการผู้ใช้บริการ</h2>
      </div>
      <div class="overflow-x-auto mt-5">

        <table class="table">
          <thead>
            <tr>
              <th>
                <p class="text-center">ลำดับ</p>
              </th>
              <th>
                <p class="text-center">อีเมล</p>
              </th>
              <th>
                <p class="text-center">ชื่อเต็ม</p>
              </th>
              <th>
                <p class="text-center">เบอร์โทรศัพท์</p>
              </th>
              <th>
                <p class="text-center">Role</p>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in useres" :key="user.id">
              <td>
                <p class="text-center">{{ user.id }}</p>
              </td>
              <td>
                <p class="text-center">{{ user.email }}</p>
              </td>
              <td>
                <p class="text-center">{{ user.fullname }}</p>
              </td>
              <td>
                <p class="text-center">{{ user.phoneNumber }}</p>
              </td>
              <td>
                <p class="text-center">{{ user.role }}</p>
              </td>
              <td>
                <div class="flex gap-2 justify-center">
                  <button class="btn" @click="deleteUser(user.email)">
                    <Trash />
                  </button>
                  <button class="btn btn-accent" @click="editUser(user.id)">
                    <Edit />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </adminLayouts>
</template>

<script setup>
import adminLayouts from '~/layouts/adminLayouts.vue'

import Trash from '~/components/admin/icons/Trash.vue';
import Edit from '~/components/admin/icons/Edit.vue';

const useres = ref([])

const router = useRouter()

const fetchUser = async () => {
  try {
    const response = await fetch('/api/admin/users', {
      method: 'GET',
    });
    if (!response.ok) throw new Error('แสดงข้อมูลผู้ใช้ไม่สำเร็จ');
    useres.value = await response.json();
  } catch (err) {
    console.error('แสดงข้อมูลผู้ใช้ไม่สำเร็จ:', err);
  }
};

const deleteUser = async (email) => {
  const confirmed = confirm('คุณต้องการลบผู้ใช้นี้หรือไม่?');
  if (!confirmed) return;
  try {
    const response = await fetch(`/api/user?email=${email}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('ลบไม่สำเร็จ');
    useres.value = useres.value.filter(user => user.email !== email);
  } catch (err) {
    console.error('Error deleting user:', err);
  }
};

const editUser = (id) => {
  router.push(`/admin/users/edit/${id}`);
};

onMounted(async () => {
  await fetchUser()
  console.log('user: ', useres.value)
})
</script>

<style scoped>
.text-stroke {
  text-shadow: -5px -1px 0 #FF8128, 1px -1px 0 #FF8128, -5px 1px 0 #FF8128, 1px 1px 0 #FF8128;
}
</style>