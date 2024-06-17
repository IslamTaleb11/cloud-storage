<script setup>
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import Sidebar from '@/components/home/Sidebar.vue';
import {onMounted, ref} from 'vue';
import axios from 'axios';
import { useDomainName } from '@/stores/domainName';

const domainName = 'http://localhost:8000/api/v1';
let email = ref('')
onMounted(()=>{
    axios.get(domainName+'/get-user-states').then((response)=>{
        console.log(response)
        email.value = response.data.email
        console.log(email)

    })
})

</script>


<template>
    <Header />
    <div class="relative dark:bg-darkmodebg flex bg-white min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 ">
        <div class="w-full px-5 text-center">
            <h2 class="mb-2 text-[42px] font-bebasNeue dark:text-white text-zinc-800">Check your inbox</h2>
            <p class="mb-2 text-lg text-zinc-500 font-yanoneKaffeesatz">We are glad, that you’re with us ? We’ve sent you a verification link
                to the email address <span class="font-medium text-primarycolor dark:text-secondarycolor">{{email}}</span>.</p>
            <RouterLink href="/login"
                class="mt-3 inline-block w-96 rounded bg-primarycolor dark:bg-secondarycolor px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700">Back To Login</RouterLink>
        </div>
    </div>
    <Sidebar />

<Footer />
</template>