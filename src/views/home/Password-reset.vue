<script setup>
import Sidebar from '@/components/home/Sidebar.vue';
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Toaster, toast } from 'vue-sonner'

const domainName = 'http://localhost:8000/api/v1'
const route = useRoute()
const router = useRouter()


let showPassword = ref(false)
const password = ref('')
const passwordConfirmation = ref('')
const toggleShowPassword = () => {
    showPassword.value = !showPassword.value
}

let showConfPassword = ref(false)
const toggleShowConfPassword = () => {
    showConfPassword.value = !showConfPassword.value
}

const confirmReset = async () => {
    let text = document.getElementById('button-text');
    const mainBtn = document.getElementById('main-btn')
    text.innerHTML = `<div role="status" class="flex justify-center">
                    <svg aria-hidden="true" class="w-8 h-5 text-gray-200 animate-spin dark:text-white fill-secondarycolor"
                      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>`;

    try {
        await axios.post(domainName + '/reset-password', {
            email: route.query.email,
            token: route.params.token,
            password: password.value,
            password_confirmation: passwordConfirmation.value
        }).then((response) => {
            toast.success('Success', {
                description: response.data.status,
                duration: 5000,
            });
        })
        mainBtn.classList = 'w-full py-3 bg-green-600 font-medium text-white rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
        text.innerHTML = `<span class="material-symbols-outlined">
      task_alt
      </span>`
        text.classList = 'font-white'
        await new Promise(resolve => setTimeout(resolve, 4000));
        mainBtn.classList = 'w-full py-3 font-medium text-white bg-primarycolor dark:bg-secondarycolor rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
        text.innerHTML = `<div class='flex space-x-2'>
        <span id="button-text">Reset password</span>
            </div>`
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push('/login')
    }
    catch (err) {
        mainBtn.classList = 'w-full py-3 bg-red-600 font-medium text-white rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
        toast.error(err.response.data.message);
        text.innerHTML = `<span class="material-symbols-outlined">
            error
            </span>`
        text.classList = 'font-white'
        await new Promise(resolve => setTimeout(resolve, 4000));
        mainBtn.classList = 'w-full py-3 font-medium text-white bg-primarycolor dark:bg-secondarycolor rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
        text.innerHTML = `<div class='flex space-x-2'>
        <span id="button-text">Confirm</span>
            </div>`

    }

}
</script>

<template>
    <Toaster position="top-right" theme="light" richColors />
    <Header />

    <div class="h-[80vh] dark:bg-darkmodebg flex justify-center items-center w-full">
        <div
            class="min-[1450px]:w-[30%] min-[1000px]:w-[40%] mx-auto bg-white dark:bg-darkmodebg  p-8 rounded-xl shadow shadow-slate-300">
            <h1 class="text-5xl font-bebasNeue dark:text-white">Reset password</h1>
            <p class="text-slate-500">Fill up the forms to reset the password</p>

            <form @submit.prevent="forgotPassword" class="my-10">
                <div class="flex flex-col space-y-5">
                    <label for="email" class="flex flex-col">
                        <p class=" text-slate-700 pb-2 dark:text-gray-400">New Password</p>
                        <div class="flex items-center" v-if="!showPassword">
                            <input id="password" name="password" type="password" v-model="password"
                                class="w-full py-3 dark:bg-darkmodebg focus:outline-none dark:text-white"
                                placeholder="Enter new password" autocomplete="off">
                            <span @click.prevent="toggleShowPassword"><span
                                    class="icon is-small is-right dark:text-gray-400">
                                    <i class="fas"
                                        :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i></span></span>
                        </div>


                        <div class="flex items-center" v-else>

                            <input id="password" name="password" type="text" v-model="password"
                                class="w-full py-3 dark:bg-darkmodebg focus:outline-none dark:text-white"
                                placeholder="Enter new password" autocomplete="off">
                            <span @click.prevent="toggleShowPassword"><span
                                    class="icon is-small is-right dark:text-gray-400">
                                    <i class="fas"
                                        :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i></span></span>
                        </div>
                    </label>
                    <label for="email" class="flex flex-col">
                        <p class=" text-slate-700 pb-2 dark:text-gray-400">New Password</p>
                        <div class="flex items-center" v-if="!showConfPassword">
                            <input id="password" name="password" type="password" v-model="passwordConfirmation"
                                class="w-full py-3 dark:bg-darkmodebg focus:outline-none dark:text-white"
                                placeholder="Enter new password" autocomplete="off">
                            <span @click.prevent="toggleShowConfPassword"><span
                                    class="icon is-small is-right dark:text-gray-400">
                                    <i class="fas"
                                        :class="{ 'fa-eye-slash': showConfPassword, 'fa-eye': !showConfPassword }"></i></span></span>
                        </div>


                        <div class="flex items-center" v-else>

                            <input id="password" name="password" type="text" v-model="passwordConfirmation"
                                class="w-full py-3 dark:bg-darkmodebg focus:outline-none dark:text-white"
                                placeholder="Enter new password" autocomplete="off">
                            <span @click.prevent="toggleShowConfPassword"><span
                                    class="icon is-small is-right dark:text-gray-400">
                                    <i class="fas"
                                        :class="{ 'fa-eye-slash': showConfPassword, 'fa-eye': !showConfPassword }"></i></span></span>
                        </div>

                    </label>

                    <button type="submit" id="main-btn" @click.prevent="confirmReset"
                        class="w-full py-3 font-medium text-white bg-primarycolor dark:bg-secondarycolor  rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                        <span id="button-text">Confirm</span>
                    </button>

                </div>
            </form>
            <Sidebar />

        </div>
    </div>


    <Sidebar />
    <Footer />

</template>