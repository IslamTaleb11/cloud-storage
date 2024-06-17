<script setup>
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import Password from 'primevue/password';
import { ref, computed } from 'vue';
import { useSideBarToggle } from '@/stores/toggle';
import Sidebar from '@/components/home/Sidebar.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { Toaster, toast } from 'vue-sonner';
import Checkbox from 'primevue/checkbox';


const router = useRouter();
const domainName = 'http://localhost:8000/api/v1'
const toggleState = useSideBarToggle();
const email = ref('');
const pass = ref('');
const name = ref('');
let match = ref(null);
let checkPass = ref('')

const checkPassMatch = () => {

    if (pass.value.length > 0 && checkPass.value.length > 0) {
        if (checkPass.value === pass.value) {
            match.value = true
        } else {
            match.value = false
        }
    }
}

let showPassword = ref(false);
const toggleShow = () => {
    showPassword.value = !showPassword.value;
}

const signup = async () => {
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
        if (checked.value) {
            await axios.post(domainName + '/register', {
                name: name.value,
                email: email.value,
                password: pass.value,
                password_confirmation: checkPass.value
            }).then((response) => {
                toast.success('Success', {
                    description: response.data.status,
                    duration: 5000,
                });
            })
            mainBtn.classList = 'mt-6 rounded-lg bg-green-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none transition delay-100 md:w-32'
            text.innerHTML = `<span class="material-symbols-outlined">
      task_alt
      </span>`
            text.classList = 'font-white'
            await new Promise(resolve => setTimeout(resolve, 4000));
            mainBtn.classList = 'mt-6 rounded-lg bg-primarycolor dark:bg-secondarycolor px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none transition delay-100 md:w-32'
            text.innerHTML = 'Sign in'
            await new Promise(resolve => setTimeout(resolve, 1000));
            router.push('/email-verification')

        }

        else {
            toast.error('You have first to agree to the Terms and Conditions');
            mainBtn.classList = 'mt-6 rounded-lg bg-red-600 px-4 py-2 text-center text-base font-semibold text-white outline-none transition delay-100 md:w-32'
            text.innerHTML = `<span class="material-symbols-outlined">
            error
            </span>`
            text.classList = 'font-white'
            await new Promise(resolve => setTimeout(resolve, 4000));
            mainBtn.classList = 'mt-6 rounded-lg bg-primarycolor dark:bg-secondarycolor px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none transition hover:bg-secondarycolor delay-100 md:w-32'
            text.innerHTML = 'Sign in'
        }
    }

    catch (err) {
        mainBtn.classList = 'mt-6 rounded-lg bg-red-600 px-4 py-2 text-center text-base font-semibold text-white outline-none transition delay-100 md:w-32'
        text.innerHTML = `<span class="material-symbols-outlined">
            error
            </span>`
        text.classList = 'font-white'
        toast.error(err.response.data.message);
        await new Promise(resolve => setTimeout(resolve, 4000));
        mainBtn.classList = 'mt-6 rounded-lg bg-primarycolor dark:bg-secondarycolor px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none transition hover:bg-secondarycolor delay-100 md:w-32'
        text.innerHTML = 'Sign in'
    }
}






const checked = ref(false);


</script>

<template>
    <Toaster position="top-right" theme="light" richColors />
    <Header />
    <div class="flex h-screen flex-wrap text-slate-800 overflow-hidden">
        <div
            class="relative hidden h-screen select-none flex-col justify-center bg-primarycolor text-center md:flex md:w-1/2">
            <div class="mx-auto py-16 px-8 text-white xl:w-[40rem]">
                <p class="my-6 text-4xl leading-10 font-bebasNeue">InfiniteBox <span
                        class="mx-auto block w-56 whitespace-nowrap rounded-lg bg-orange-400 py-2 text-white font-bebasNeue">Easy
                        to use!</span></p>
                <p class="mb-4 font-yanoneKaffeesatz text-xl">Welcome to InfiniteBox! We're excited to have you join our
                    community. By creating an account, you'll gain access to a range of features and services designed
                    to make your experience seamless and enjoyable. Simply fill out the form below to get started.</p>
            </div>
            <!-- <img class="mx-auto w-11/12 max-w-lg rounded-lg object-cover" src="/images/SoOmmtD2P6rjV76JvJTc6.png" /> -->
        </div>
        <div class="flex w-full flex-col md:w-1/2 dark:bg-darkmodebg">
            <div class="flex justify-center pt-12 md:justify-start md:pl-12">
                <RouterLink to="/" class="text-2xl font-bold text-primarycolor dark:text-white"> InfiniteBox
                </RouterLink>
            </div>
            <div class="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
                <p
                    class="text-center text-4xl text-primarycolor font-bebasNeue md:text-left md:leading-tight dark:text-white">
                    Create your free account</p>
                <p class="mt-6 text-center font-medium md:text-left dark:text-gray-400">
                    Already using InfiniteBox?
                    <RouterLink to="/login" class="whitespace-nowrap font-semibold text-secondarycolor dark:text-white">
                        Login here
                    </RouterLink>
                </p>
                <!-- <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"><img class="mr-2 h-5" src="/images/-9jfz8JJkYKu0yDYmD5WM.svg" alt /> Get started with Google</button> -->
                <div class="relative mt-8 flex h-px place-items-center bg-gray-200 dark:bg-gray-400">
                    <div
                        class="absolute left-1/2 h-6 -translate-x-1/2 bg-white dark:bg-darkmodebg dark:text-gray-400 px-4 text-center text-sm text-gray-500">
                        Or use email instead</div>
                </div>
                <form class="flex flex-col items-stretch pt-3 md:pt-8" @submit.prevent="signup">
                    <div class="flex flex-col pt-4">
                        <div
                            class="relative flex overflow-hidden rounded-md border-2 dark:border-none transition focus-within:border-primarycolor">
                            <input type="text" id="signup-name" v-model="name"
                                class="w-full flex-shrink appearance-none dark:bg-darkmodebg dark:text-white border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                placeholder="Name" />
                        </div>
                    </div>
                    <div class="flex flex-col pt-4">
                        <div
                            class="relative flex overflow-hidden rounded-md border-2 dark:border-none transition focus-within:border-primarycolor">
                            <input type="email" id="signup-email" v-model="email"
                                class="w-full flex-shrink appearance-none rounded-lg dark:text-white dark:bg-darkmodebg border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                placeholder="Email" />

                        </div>
                    </div>
                    <div class="flex flex-col pt-4">
                        <div
                            class="relative flex overflow-hidden rounded-md border-2 dark:border-none transition focus-within:border-primarycolor">
                            <!-- <input v-if="showPassword" placeholder="Enter Your Password" type="text" v-model="pass" :feedback="false"
                            class="w-full flex-shrink appearance-none dark:bg-darkmodebg  border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" /> -->



                            <Password id="password1"  unstyled inputClass="w-full dark:bg-darkmodebg"
                                v-model="pass"
                                :pt="{ panel: { class: 'dark:bg-darkmodebg' }, info: { class: 'dark:text-gray-400'}, 
                                overlay:{class:'dark:bg-darkmodebg bg-white p-2'} }" 
                                class="w-full flex-shrink appearance-none dark:text-white py-2 px-4 text-base focus:outline-none"
                                placeholder="Enter Password" required>
                                <template #header>
                                    <h6 class="font-yanoneKaffeesatz text-xl dark:text-gray-400">Pick a password</h6>
                                </template>
                                <template #footer>

                                    <p class="mt-2 font-yanoneKaffeesatz text-xl dark:text-gray-400">Suggestions</p>
                                    <ul class="pl-2 ml-2 mt-0 " style="line-height: 1.5">
                                        <li class="font-yanoneKaffeesatz text-xl dark:text-gray-400">At least one
                                            lowercase</li>
                                        <li class="font-yanoneKaffeesatz text-xl dark:text-gray-400">At least one
                                            uppercase</li>
                                        <li class="font-yanoneKaffeesatz text-xl dark:text-gray-400">At least one
                                            numeric</li>
                                        <li class="font-yanoneKaffeesatz text-xl dark:text-gray-400">Minimum 8
                                            characters</li>
                                    </ul>
                                </template>
                            </Password>
                            <!-- <button class="button mr-1" @click.prevent="toggleShow"><span
                                    class="icon is-small is-right">
                                    <i class="fas"
                                        :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i></span></button> -->
                        </div>
                    </div>
                    <div class="mb-4 flex flex-col pt-4">
                        <div
                            class="relative flex overflow-hidden rounded-md border-2 dark:border-none transition focus-within:border-primarycolor">
                            <Password unstyled inputClass="w-full dark:bg-darkmodebg"
                                class="w-full dark:text-white flex-shrink appearance-none border-gray-300 dark:bg-darkmodebg bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                                placeholder="Confirm Password" v-model="checkPass" :feedback="false"
                                @change="checkPassMatch" required inputStyle=""/>
                        </div>

                        <span v-if="match == false && pass.length > 0"
                            class="text-red-400 font-yanoneKaffeesatz text-xl">Password
                            Confirmation Doesn't match
                            the Password</span>
                    </div>
                    <div class="flex space-x-2">
                        <Checkbox :pt="{ box: { class: 'dark:bg-secondarycolor bg-primarycolor' } }" v-model="checked"
                            :binary="true" />

                        <!-- <input type="checkbox" v-model="checkBox" @change="handleCheck"> -->
                        <label class="inline-block dark:text-gray-400" for="remember-me"> I agree to the <a
                                class="underline" href="#">Terms
                                and
                                Conditions</a></label>
                    </div>
                    <button type="submit" id="main-btn"
                        class="mt-6 rounded-lg bg-primarycolor dark:bg-secondarycolor px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none transition hover:bg-secondarycolor delay-100 md:w-32">
                        <span id="button-text">Sign in</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
    <Sidebar />

    <Footer />


</template>

<style scoped>
.custom-password-input {
  border: none !important; /* Ensure border is removed */
  box-shadow: none !important; /* Remove any shadow if applied */
}
</style>