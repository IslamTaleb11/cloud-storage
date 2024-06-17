<script setup>
import Sidebar from '@/components/home/Sidebar.vue';
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import axios from 'axios';
import { ref } from 'vue';
import { Toaster, toast } from 'vue-sonner'

const domainName = 'http://localhost:8000/api/v1'
const email = ref('');

const forgotPassword = async () => {
    let text = document.getElementById('button-text');
    const icon = document.getElementById('icon')
    const mainBtn = document.getElementById('main-btn')
    if(icon) icon.remove()
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

    setTimeout(2000)

    try {
        await axios.post(domainName + '/forgot-password', {
            email: email.value
        }).then((response) => {
            toast.success('Success', {
                description: response.data.status,
                duration: 5000,
            });
        })
        mainBtn.classList = 'w-full py-3 bg-green-600 font-medium text-white rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
        text.innerHTML = `<span class="material-symbols-outlined">
      task_alt
      </span>`;
        text.classList = 'font-white'
        await new Promise(resolve => setTimeout(resolve, 4000));
        mainBtn.classList = 'w-full py-3 font-medium text-white bg-primarycolor dark:bg-secondarycolor rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
        text.innerHTML = `<div class='flex space-x-2'>
            <svg id="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
        <span id="button-text">Reset password</span>
            </div>`
    }
    catch (err) {
        mainBtn.classList = 'w-full py-3 bg-red-600 font-medium text-white rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
        text.innerHTML = `<span class="material-symbols-outlined">
            error
            </span>`
        text.classList = 'font-white'
        toast.error(err.response.data.message)
        await new Promise(resolve => setTimeout(resolve, 4000));
        mainBtn.classList = 'w-full py-3 font-medium text-white bg-primarycolor dark:bg-secondarycolor rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center'
        text.innerHTML = `<div class='flex space-x-2'>
            <svg id="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
        <span id="button-text">Reset password</span>
            </div>`
        
    }



}

</script>


<template>
    <Header />
    <Toaster position="top-right" theme="light" richColors />
    <!-- component -->
    <div class="h-[80vh] dark:bg-darkmodebg flex justify-center items-center w-full">
        <div
            class="min-[1450px]:w-[30%] min-[1000px]:w-[40%] mx-auto bg-white dark:bg-darkmodebg  p-8 rounded-xl shadow shadow-slate-300">
            <h1 class="text-5xl font-bebasNeue dark:text-white">Reset password</h1>
            <p class="text-slate-500">Fill up the form to reset the password</p>

            <form @submit.prevent="forgotPassword" class="my-10">
                <div class="flex flex-col space-y-5">
                    <label for="email">
                        <p class=" text-slate-700 pb-2 dark:text-gray-400">Email address</p>
                        <input id="email" name="email" type="email" v-model="email"
                            class="w-full py-3 dark:bg-darkmodebg focus:outline-none dark:text-white"
                            placeholder="Enter email address" autocomplete="off">
                    </label>

                    <button type="submit" id="main-btn"
                        class="w-full py-3 font-medium text-white bg-primarycolor dark:bg-secondarycolor  rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg id="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>

                        <span id="button-text">Reset password</span>
                    </button>
                    <p class="text-center dark:text-gray-400">Not registered yet? <RouterLink to="/signup"
                            class="text-primarycolor dark:text-secondarycolor font-medium inline-flex space-x-1 items-center">
                            <span>Register now
                            </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg></span>
                        </RouterLink>
                    </p>
                </div>
            </form>
            <Sidebar />

        </div>
    </div>


    <Footer />

</template>