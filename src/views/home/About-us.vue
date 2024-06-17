<script setup>
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import { useSideBarToggle } from '@/stores/toggle';
import Sidebar from '@/components/home/Sidebar.vue';

const toggleState = useSideBarToggle();

</script>

<template>
    <Header />
    <div class="relative dark:bg-darkmodebg">
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 bg">
            <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div class="relative z-0 lg:py-16">
                    <div class="relative h-64 sm:h-80 lg:h-full">
                        <img alt=""
                            src="/src/assets/images/cloud-storage-background-remixed-from-public-domain-by-nasa.jpg"
                            class="absolute inset-0 h-full w-full object-cover" />
                    </div>
                </div>

                <div class="relative flex items-center bg-gray-100 dark:bg-darkmodebg">
                    <!-- <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span> -->

                    <div class="p-8 sm:p-16 lg:p-24">
                        <h2 class="text-3xl sm:text-4xl font-bebasNeue dark:text-white">
                            About Us
                        </h2>

                        <p class="mt-4 text-gray-600 font-yanoneKaffeesatz text-xl dark:text-gray-400">
                            Welcome to InfiniteBox, your limitless cloud storage solution. Founded in 2024, we're
                            dedicated to providing secure, innovative storage options for individuals and businesses.

                            With InfiniteBox, you'll never run out of space. Our user-centric design and cutting-edge
                            technology ensure seamless storage, collaboration, and accessibility for all your digital
                            assets.

                            Join us and experience the freedom of unlimited storage. Thank you for choosing InfiniteBox
                            as your trusted cloud storage partner.
                        </p>

                        <a href="#"
                            class="mt-8 inline-block rounded border dark:hover:text-white dark:bg-secondarycolor border-secondarycolor bg-primarycolor px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Sidebar />
    </div>

    <div class="w-full dark:bg-darkmodebg max-[1200px]:mt-20">
        <div class="px-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 max-[1200px]:mt-[-200px]">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            
            <h2
                class="w-[80%] mb-6 font-bebasNeue text-3xl mt-20 leading-none tracking-tight dark:text-white text-gray-900 sm:text-4xl md:mx-auto">
                <span class="relative inline-block">
                    <svg viewBox="0 0 52 24" fill="currentColor"
                        class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                        <defs>
                            <pattern id="247432cb-6e6c-4bec-9766-564ed7c230dc" x="0" y="0" width=".135" height=".30">
                                <circle cx="1" cy="1" r=".7"></circle>
                            </pattern>
                        </defs>
                        <rect fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)" width="52" height="24"></rect>
                    </svg>
                    <span class="relative">Welcome</span>
                </span>
                our talented team of professionals
            </h2>
            <p class="text-gray-700 md:text-lg font-yanoneKaffeesatz text-xl dark:text-gray-400">
                Our team at InfiniteBox is a dynamic group of experts committed to revolutionizing cloud storage. With
                diverse skills in software development and user experience design, we work tirelessly to create an
                intuitive and reliable solution. Fueled by innovation and creativity, we aim to empower users to thrive
                in the digital age.
            </p>
        </div>
        <div class="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Oliver Aguilerra</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">Product Manager</p>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Marta Clermont</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">Design Team Lead</p>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Anthony Geek</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">CTO, Lorem Inc.</p>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Alice Melbourne</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">Human Resources</p>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Martin Garix</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">Bad boy</p>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Andrew Larkin</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">Backend Developer</p>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Sophie Denmo</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">Designer UI/UX</p>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Benedict Caro</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">Frontend Developer</p>
                </div>
            </div>
            <div class="flex">
                <img class="object-cover w-20 h-20 mr-4 rounded-full shadow"
                    src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person" />
                <div class="flex flex-col justify-center">
                    <p class="font-bebasNeue text-xl dark:text-white">Adam Molly</p>
                    <p class="text-sm text-gray-800 font-yanoneKaffeesatz dark:text-gray-400">Full Stack Developer</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    <Footer />
</template>