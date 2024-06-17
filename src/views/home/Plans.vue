<script setup>
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import { useSideBarToggle } from '@/stores/toggle';
import Sidebar from '@/components/home/Sidebar.vue';

const toggleState = useSideBarToggle();
</script>

<template>
    <Header />

<div class=" h-fit dark:bg-darkmodebg">
    <div class=" dark:bg-darkmodebg">
        <h2
            class="lg:w-[30%] max-[1024px]:w-full  dark:text-white max-[1024px]:p-x-15 text-center mb-6 font-bebasNeue text-4xl  leading-none tracking-tight text-primarycolor  md:mx-auto">
            <span class="relative inline-block mt-[100px]">
                <svg viewBox="0 0 52 24" fill="currentColor"
                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                    <defs>
                        <pattern id="ace59d72-08d5-4850-b9e4-d9d0b86c0525" x="0" y="0" width=".135" height=".30">
                            <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                    </defs>
                    <rect fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)" width="52" height="24"></rect>
                </svg>
                <span class="relative dark:text-white">Transparent</span>
            </span>
            pricing. Pay as you grow.
        </h2>
    </div>

    <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 mb-20 mt-20">
        <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
            <div class="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12 lg:w-[80%]">
                <h3 class="text-4xl font-bebasNeue leading-8 text-primarycolor  sm:leading-9 dark:text-white">
                    Starter
                </h3>
                <p class="mt-6 font-yanoneKaffeesatz text-xl leading-6 text-gray-500 dark:text-gray-200">
                    Ideal for individuals and families, our Basic Plan offers secure storage for personal files and
                    documents. With 50GB of storage space </p>
                <div class="mt-8">
                    <div class="flex items-center">
                        <h4
                            class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider dark:text-gray-400 text-secondarycolor uppercase bg-white dark:bg-gray-800">
                            What&#x27;s included
                        </h4>
                        <div class="flex-1 border-t-2 border-gray-200">
                        </div>
                    </div>
                    <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                50GB storage
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Secure storage for personal files and documents
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Access from anywhere, on any device
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                File versioning and recovery
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Basic sharing options
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Email support
                            </p>
                        </li>

                    </ul>
                </div>
                <div class="mt-8">
                    <div class="flex items-center">
                        <h4
                            class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider dark:text-gray-400 text-secondarycolor uppercase bg-white dark:bg-gray-800">
                            &amp; What&#x27;s not
                        </h4>
                    </div>
                    <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2"
                                    fill="red" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Advanced security features like end-to-end encryption
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2"
                                    fill="red" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Priority customer support
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
            <div
                class="px-6 py-8 lg:w-[20%] text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p class=" font-bebasNeue text-4xl leading-6 text-gray-900 dark:text-white">
                    Free
                </p>
                <div
                    class="flex items-center justify-center mt-4 text-5xl font-bebasNeue leading-none text-gray-900 dark:text-white">
                    <span>
                        $0/mo
                    </span>
                </div>

                <div class="mt-6">
                    <div class="rounded-md shadow">
                        <button type="button"
                            class="py-2 px-4  bg-primarycolor dark:bg-secondarycolor dark:hover:bg-primarycolor hover:bg-secondarycolor focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-2xl font-bebasNeue shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 mb-20 mt-20">
        <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
            <div class="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12 lg:w-[80%]">
                <h3 class="text-4xl font-bebasNeue leading-8 text-primarycolor  sm:leading-9 dark:text-white">
                    Pro
                </h3>
                <p class="mt-6 font-yanoneKaffeesatz text-xl leading-6 text-gray-500 dark:text-gray-200">
                    Take your productivity to the next level with our Pro Plan, designed for professionals and small
                    businesses. With 250GB of storage space, you'll have ample room to store and share important files,
                    presentations, and project materials.</p>
                <div class="mt-8">
                    <div class="flex items-center">
                        <h4
                            class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider dark:text-gray-400 text-secondarycolor uppercase bg-white dark:bg-gray-800">
                            What&#x27;s included
                        </h4>
                        <div class="flex-1 border-t-2 border-gray-200">
                        </div>
                    </div>
                    <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                250GB storage
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Enhanced security with end-to-end encryption
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Advanced sharing and collaboration tools
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Priority customer support
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                File access and editing history
                            </p>
                        </li>

                    </ul>
                </div>
                <div class="mt-8">
                    <div class="flex items-center">
                        <h4
                            class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider dark:text-gray-400 text-secondarycolor uppercase bg-white dark:bg-gray-800">
                            &amp; What&#x27;s not
                        </h4>
                    </div>
                    <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2"
                                    fill="red" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Unlimited storage space
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="px-6 py-8 lg:w-[20%] text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p class="font-bebasNeue text-3xl leading-6 text-gray-900 dark:text-white"
                    style="text-decoration: line-through;">
                    $120/mo
                </p>

                <div
                    class="flex items-center justify-center mt-4 text-5xl font-bebasNeue leading-none text-gray-900 dark:text-white">
                    <span>
                        $99/mo
                    </span>
                </div>

                <div class="mt-6">
                    <div class="rounded-md shadow">
                        <button type="button"
                            class="py-2 px-4  bg-primarycolor dark:bg-secondarycolor dark:hover:bg-primarycolor hover:bg-secondarycolor focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-2xl font-bebasNeue shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8  mt-20">
        <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg pricing-box lg:max-w-none lg:flex">
            <div class="px-6 py-8 bg-white dark:bg-gray-800 lg:flex-shrink-1 lg:p-12 lg:w-[80%]">
                <h3 class="text-4xl font-bebasNeue leading-8 text-primarycolor  sm:leading-9 dark:text-white">
                    Business
                </h3>
                <p class="mt-6 font-yanoneKaffeesatz text-xl leading-6 text-gray-500 dark:text-gray-200">
                    Our Business Plan offers a comprehensive cloud storage solution tailored for teams and enterprises.
                </p>
                <div class="mt-8">
                    <div class="flex items-center">
                        <h4
                            class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider dark:text-gray-400 text-secondarycolor uppercase bg-white dark:bg-gray-800">
                            What&#x27;s included
                        </h4>
                        <div class="flex-1 border-t-2 border-gray-200">
                        </div>
                    </div>
                    <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                1TB storage
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Comprehensive cloud storage solution for teams and enterprises
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                24/7 phone support and priority email support
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                API access for custom integrations
                            </p>
                        </li>
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                    stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200 mb-2">
                                Advanced reporting and analytics
                            </p>
                        </li>

                    </ul>
                </div>
                <div class="mt-8">
                    <div class="flex items-center">
                        <h4
                            class="flex-shrink-0 pr-4 text-sm font-semibold leading-5 tracking-wider dark:text-gray-400 text-secondarycolor uppercase bg-white dark:bg-gray-800">
                            &amp; What&#x27;s not
                        </h4>
                    </div>
                    <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                        <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="w-6 h-6 mr-2"
                                    fill="red" viewBox="0 0 1792 1792">
                                    <path
                                        d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                24/7 phone support
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="px-6 py-8 lg:w-[20%] text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p class="font-bebasNeue text-3xl leading-6 text-gray-900 dark:text-white"
                    style="text-decoration: line-through;">
                    $699/mo
                </p>

                <div
                    class="flex items-center justify-center mt-4 text-5xl font-bebasNeue leading-none text-gray-900 dark:text-white">
                    <span>
                        $499/mo
                    </span>
                </div>

                <div class="mt-6">
                    <div class="rounded-md shadow">
                        <button type="button"
                            class="py-2 px-4 bg-primarycolor dark:bg-secondarycolor dark:hover:bg-primarycolor hover:bg-secondarycolor focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-2xl font-bebasNeue shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="relative">
        <Sidebar />
    </div>
    <Footer />
</div>
    

    
</template>