<script setup>
import { useSideBarToggle } from '@/stores/toggle';
import InputSwitch from 'primevue/inputswitch';
import { ref, watch } from 'vue';
import YearlyPrices from '@/components/home/YearlyPrices.vue';
import MonthlyPrices from '@/components/home/MonthlyPrices.vue';
import { useToggleTime } from '@/stores/toggleTime';
import Testimonials from './Testimonials.vue';
import Sidebar from '@/components/home/Sidebar.vue';
import ScrollTop from 'primevue/scrolltop';


const toggleState = useSideBarToggle();
const toggleTimeState = useToggleTime();

const toggleTime = () => {
    checked.value = !checked.value
}



const brandItems = ref([
    {
        image: 'https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg',
        link: '#'
    },
    {
        image: 'https://cdn.tailgrids.com/2.0/image/assets/images/brands/lineicons.svg',
        link: '#'
    },
    {
        image: 'https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg',
        link: '#'
    },
    {
        image: 'https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg',
        link: '#'
    }
])





</script>

<template>


    <div class="relative overflow-hidden dark:bg-darkmodebg">

        <!-- <ScrollTop class="bg-primarycolor dark:bg-secondarycolor " /> -->

        <div v-motion-slide-visible-left
            class="w-[100%] h-[90vh] dark:bg-darkmodebg bg-[#F4F7FC] relative flex max-[1300px]:flex-col max-[1300px]:h-fit overflow-hidden">
            <div
                class=" w-[70%] flex items-center justify-center flex-col max-[1300px]:w-[100%] max-[1300px]:mt-[120px] max-[1300px]:text-center">
                <div class="w-[700px] max-[1300px]:w-[100%] flex flex-col justify-center max-[1300px]:items-center">
                    <h1 ref="el" class="text-7xl font-bebasNeue text-primarycolor max-[1300px]:w-[80%] dark:text-white">
                        InfiniteBox Is Your Best
                        Solution...</h1>
                    <p
                        class="text-gray-800 mt-5 font-yanoneKaffeesatz text-xl max-[1300px]:p-5 w-[80%] dark:text-gray-400">
                        Welcome to
                        InfiniteBox – your secure, seamless solution for storing, accessing, and sharing your files
                        effortlessly.
                        With cutting-edge encryption technology, InfiniteBox ensures the safety and privacy of your
                        data,
                        giving you peace of mind as you access your files from anywhere, anytime. Say goodbye to storage
                        limits and hello to endless possibilities with InfiniteBox.</p>
                </div>
                <div
                    class="w-[700px] mt-5 flex items-center space-x-10 max-[1300px]:w-[100%] max-[1300px]:space-x-3 max-[1300px]:justify-center max-[500px]:p-4 max-[500px]:space-x-0 min-[1300px]:justify-start">
                    <button
                        class="bg-primarycolor dark:bg-secondarycolor  w-[120px] flex justify-evenly p-1 items-center font-teko text-2xl text-white
                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-secondarycolor duration-300 max-[500px]:w-[40%] max-[500px]:ml-0">
                        <span class="material-symbols-outlined">
                            north_east
                        </span>Get Started</button>
                    <a href=""
                        class="dark:text-gray-400 font-yanoneKaffeesatz text-xl underline text-gray-800 max-[500px]:w-[40%]">Have
                        a
                        question? Contact Us</a>
                </div>
            </div>

            <div
                class="bg-primarycolor w-[30%] dark:bg-darkmodebg  max-[1300px]:w-[100%] max-[1300px]:-order-1 max-[1300px]:flex max-[1300px]:justify-center">
                <img src="/src/assets/images/Server-amico.png" alt=""
                    class="absolute w-[600px] left-[1100px] mt-[50px] max-[1300px]:relative max-[1300px]:left-0 max-[1300px]:top-[120px] min-[1300px]:left-[790px] min-[1300px]:w-[500px] min-[1300px]:top-[150px] min-[1400px]:left-[800px] min-[1600px]:left-[900px] min-[1700px]:left-[1100px] min-[1700px]:w-[700px] min-[1700px]:top-[50px]">
            </div>
        </div>

        <div v-motion-slide-visible-left class="mt-20">
            <div class="container w-[66%] p-6 mx-auto space-y-12 lg:px-8">
                <div>
                    <h2 class="text-center font-bebasNeue dark:text-white text-primarycolor text-6xl">Our Service
                        Features</h2>
                    <p class="max-w-3xl mx-auto mt-4 text-xl text-center font-yanoneKaffeesatz dark:text-gray-400">
                        Explore the latest features
                        that enhance your
                        learning experience and make it even more exciting.</p>
                </div>
                <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div class="mt-4 space-y-12">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                        <span class="material-symbols-outlined dark:text-gray-400">
                                            verified_user
                                        </span>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-2xl font-medium leadi font-yanoneKaffeesatz dark:text-white">Secure
                                        File Storage</h4>
                                    <p class="mt-2 text-xl font-yanoneKaffeesatz dark:text-gray-400">Keep your files
                                        safe with advanced
                                        encryption and security measures.</p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                        <span class="material-symbols-outlined dark:text-gray-400">
                                            share
                                        </span>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-2xl font-medium leadi font-yanoneKaffeesatz dark:text-white">
                                        Collaborative Sharing</h4>
                                    <p class="mt-2 text-xl font-yanoneKaffeesatz dark:text-gray-400">Share files with
                                        teammates, friends, or
                                        family members.</p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                        <span class="material-symbols-outlined dark:text-gray-400">
                                            description
                                        </span>
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <h4 class="text-2xl font-medium leadi font-yanoneKaffeesatz dark:text-white">File
                                        Preview</h4>
                                    <p class="mt-2 text-xl font-yanoneKaffeesatz dark:text-gray-400">Preview files
                                        directly in the cloud
                                        storage interface without downloading.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div aria-hidden="true" class="mt-10 lg:mt-0">
                        <img width="600" height="600" src="/src/assets/images/Cloud hosting-amico.png"
                            class="mx-auto rounded-lg shadow-lg dark-bg-gray-500" style="color:transparent">
                    </div>
                </div>
            </div>
        </div>

        <div v-motion-slide-visible-top
            class="w-[100%] h-[84vh] bg-primarycolor dark:bg-darkmodebg mt-10 relative flex max-[1300px]:items-center max-[1300px]:flex-col max-[1300px]:h-fit overflow-hidden">
            <div
                class=" w-[70%] flex items-center justify-center flex-col max-[1300px]:w-[100%] max-[1300px]:mt-[120px] max-[1300px]:text-center">
                <div class="w-[700px] max-[1300px]:w-[100%] flex flex-col justify-center max-[1300px]:items-center">
                    <h1 class="text-7xl font-bebasNeue text-white max-[1300px]:w-[80%] ">Store any file or folder</h1>
                    <p
                        class="text-gray-300 mt-5 font-yanoneKaffeesatz text-xl max-[1300px]:p-5 w-[80%] dark:text-gray-400">
                        Regardless of the type of file or folder you wish to save—whether it's photos, videos, large CAD
                        files, or PowerPoint presentations—you can securely store it using InfiniteBox cloud storage
                        solutions.</p>
                </div>

            </div>

            <div
                class="bg-bgcolor w-[30%] dark:bg-darkmodebg max-[1300px]:w-full max-[1300px]:-order-1 max-[1300px]:flex max-[1300px]:justify-center">
                <img src="/src/assets/images/Server-bro.png" alt=""
                    class="absolute w-[600px] left-[1100px] mt-[50px] max-[1300px]:relative max-[1300px]:left-0 max-[1300px]:top-[120px] min-[1300px]:left-[790px] min-[1300px]:w-[500px] min-[1300px]:top-[150px] min-[1400px]:left-[800px] min-[1600px]:left-[900px] min-[1700px]:left-[1100px] min-[1700px]:w-[700px] min-[1700px]:top-[50px]">
            </div>


        </div>


        <!-- ====== Brands Section Start -->
        <!-- <div v-motion-slide-visible-left class="bg-white dark:bg-darkmodebg py-20 dark:bg-dark lg:py-[120px] dark:">
            <div class="container mx-auto">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4">
                        <div class="flex flex-wrap items-center justify-center">
                            <template v-for="(item, index) in brandItems" :key="index">
                                <a :href="item.link"
                                    class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
                                    <img :src="item.image" alt="image" class="w-full h-10" />
                                </a>
                            </template>
</div>
</div>
</div>
</div>
</div> -->
        <!-- ====== Brands Section End -->
        <div class="bg-white dark:bg-darkmodebg mt-20">
            <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="text-3xl font-bebasNeue text-primarycolor sm:text-6xl dark:text-white">Trusted by Big Tech
                        Companies
                    </h2>

                    <p class="mt-4 text-gray-500 sm:text-xl font-yanoneKaffeesatz dark:text-gray-400">
                        At InfiniteBox, trust is at the core of everything we do. We are proud to be trusted by
                        individuals and businesses alike for our unwavering commitment to excellence, reliability, and
                        integrity.
                    </p>
                </div>

                <div class="mt-8 sm:mt-12">
                    <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div class="flex flex-col rounded-lg bg-blue-50 dark:bg-gray-800 px-4 py-8 text-center">
                            <dt class="order-last text-xl font-yanoneKaffeesatz text-gray-500">Total Sales</dt>

                            <dd class="text-4xl font-bebasNeue text-primarycolor md:text-6xl dark:text-white">$4.8m
                            </dd>
                        </div>

                        <div class="flex flex-col rounded-lg bg-blue-50 dark:bg-gray-800 px-4 py-8 text-center">
                            <dt class="order-last text-xl font-yanoneKaffeesatz text-gray-500">Total Users</dt>

                            <dd class="text-4xl font-bebasNeue text-primarycolor md:text-6xl dark:text-white">37K</dd>
                        </div>

                        <div class="flex flex-col rounded-lg bg-blue-50 dark:bg-gray-800 px-4 py-8 text-center">
                            <dt class="order-last text-xl font-yanoneKaffeesatz text-gray-500">Total Subscriptions</dt>

                            <dd class="text-4xl font-bebasNeue text-primarycolor md:text-6xl dark:text-white">12K</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

        <div v-motion-pop-visible v-if="!toggleTimeState.checked">
            <MonthlyPrices />
        </div>

        <div v-motion-pop-visible v-else>
            <YearlyPrices />
        </div>


        <div v-motion-slide-visible-left class="flex justify-center mt-20">
            <div class="space-y-4 w-[65%]">
                <h1 class="text-6xl font-bebasNeue text-primarycolor text-center dark:text-white">FAQ</h1>
                <details class="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-darkmodebg">
                        <h2 class="font-medium dark:text-white">What is your service about?</h2>

                        <svg class="size-5 shrink-0 transition duration-300 group-open:-rotate-180 dark:text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700 dark:text-white">
                        Our service is a cloud storage platform that allows users to securely store, access, and share
                        their
                        files and documents online.
                    </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden ">
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900  dark:bg-darkmodebg">
                        <h2 class="font-medium dark:text-white">How much storage space do I get?</h2>

                        <svg class="size-5 shrink-0 transition duration-300 group-open:-rotate-180 dark:text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700  dark:text-white">
                        The amount of storage space depends on your subscription plan. We offer flexible storage options
                        tailored to individual users, small teams, and large enterprises.
                    </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden ">
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900  dark:bg-darkmodebg">
                        <h2 class="font-medium dark:text-white">What happens to my data if I cancel my subscription?
                        </h2>

                        <svg class="size-5 shrink-0 transition duration-300 group-open:-rotate-180 dark:text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700  dark:text-white">
                        If you cancel your subscription, your data will remain intact for a certain period, depending on
                        your
                        plan. During this grace period, you can download your files or choose to renew your subscription
                        to
                        retain access.
                    </p>
                </details>
            </div>
        </div>


        <!-- <Testimonials /> -->

        <div class="mt-20">
            <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 w-[70%]">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div class="bg-primarycolor dark:bg-secondarycolor p-8 md:p-12 lg:px-16 lg:py-24">
                        <div class="mx-auto max-w-xl text-center">
                            <h2 class="text-2xl font-bebasNeue text-white md:text-3xl">
                                Sign up now and experience the difference
                            </h2>

                            <p class="hidden text-white/90 sm:mt-4 sm:block font-yanoneKaffeesatz">
                                With our comprehensive platform, you'll seamlessly integrate into your workflow, whether
                                you're
                                an individual looking to streamline your tasks or a team aiming for greater
                                collaboration
                                and
                                efficiency. Don't miss out on the chance to revolutionize the way you work—take the
                                first
                                step
                                towards success today!
                            </p>

                            <div class="mt-4 md:mt-8">
                                <a href="#"
                                    class="inline-block font-bebasNeue rounded border border-white bg-white px-12 py-3 text-xl font-medium text-secondarycolor transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img alt="" src="/src/assets/images/programmer-doing-server-examination.jpg"
                            class="h-40 w-full object-cover sm:h-56 md:h-full" />

                        <img alt=""
                            src="/src/assets/images/cloud-storage-background-remixed-from-public-domain-by-nasa.jpg"
                            class="h-40 w-full object-cover sm:h-56 md:h-full" />
                    </div>
                </div>
            </div>
        </div>


        <Sidebar />
    </div>


</template>

<style></style>