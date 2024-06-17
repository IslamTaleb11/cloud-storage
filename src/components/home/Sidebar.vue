<script setup>
import { useSideBarToggle } from '@/stores/toggle';
import { RouterLink } from 'vue-router';

const toggleState = useSideBarToggle();

</script>


<template>

    <div id="slideover-container" class="min-[1200px]:hidden inset-0">
        <!-- <div class="inset-0 w-full h-full bg-gray-900 opacity-0" id="slideover-bg">
        </div> -->
        <div class="bg-[#F4F7FC] dark:bg-gray-600 w-[30%] max-[450px]:w-[50%] right-0 fixed top-0 inset-y-0 duration-300 ease-out transition-all translate-x-full"
            id="slideover">
            <div class="flex justify-end p-5">
                <a class="w-10 h-10 rounded-full border bg-primarycolor p-3 text-white focus:outline-none focus:ring active:text-indigo-500 flex items-center justify-center"
                    href="#" @click="toggleState.setToggle">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </a>
            </div>
            <div class="flex flex-col items-center space-y-3">
                <RouterLink to="/"
                    class="font-bebasNeue text-2xl max-[700px]:text-xl dark:text-white dark:hover:bg-gray-700 text-primarycolor hover:bg-gray-200 w-[70px] text-center">HOME</RouterLink>
                <RouterLink to=""
                    class="font-bebasNeue text-2xl max-[700px]:text-xl dark:text-white dark:hover:bg-gray-700 text-primarycolor hover:bg-gray-200 w-[70px] text-center">FILES</RouterLink>
                <RouterLink to="/plans"
                    class="font-bebasNeue text-2xl max-[700px]:text-xl dark:text-white dark:hover:bg-gray-700 text-primarycolor hover:bg-gray-200 w-[140px] text-center">STORAGE
                    PLANS</RouterLink>
                <RouterLink to="/contact"
                    class="font-bebasNeue text-2xl max-[700px]:text-xl dark:text-white dark:hover:bg-gray-700 text-primarycolor hover:bg-gray-200 w-[85px] text-center">CONTACT</RouterLink>
                <RouterLink to="/about-us"
                    class="font-bebasNeue text-2xl max-[700px]:text-xl dark:text-white dark:hover:bg-gray-700 text-primarycolor hover:bg-gray-200 w-[95px] text-center">ABOUT
                    US</RouterLink>
                <RouterLink to="/login"
                    class="bg-primarycolor w-[100px] flex justify-evenly p-1 items-center font-bebasNeue text-2xl text-white
                        transition ease-in-out delay-150 
                        hover:-translate-y-1 hover:scale-110 hover:bg-secondarycolor duration-300 min-[1200px]:hidden max-[700px]:w-[80px] max-[700px]:text-[20px]">
                    <span class="pi pi-user"></span>Login</RouterLink>
            </div>
        </div>
    </div>
</template>