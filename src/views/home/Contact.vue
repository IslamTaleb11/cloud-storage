<script setup>
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import { useSideBarToggle } from '@/stores/toggle';
import Sidebar from '@/components/home/Sidebar.vue';
import Button from 'primevue/button';

const toggleState = useSideBarToggle();
</script>

<template>
  <Header />
  <div class="w-full dark:bg-darkmodebg h-fit flex ">
    <div class="container  mx-auto md:px-6 dark:bg-darkmodebg">
      <!-- Section: Design Block -->
      <section class="mt-[200px] mb-[200px]">
        <div class="flex justify-center">
          <div class="text-center md:max-w-xl lg:max-w-3xl">
            <h2 class="mb-12 px-6 text-4xl font-bebasNeue text-primarycolor dark:text-white">Contact us</h2>
          </div>
        </div>

        <div class="flex flex-wrap max-[700px]:p-5">
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput90" placeholder="Name" />
                <label
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primarycolor dark:peer-focus:text-gray-400 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200"
                  for="exampleInput90">Name
                </label>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input type="email"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput91" placeholder="Email address" />
                <label
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primarycolor peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-gray-400"
                  for="exampleInput91">Email address
                </label>
              </div>
              <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                <label for="exampleFormControlTextarea1"
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primarycolor peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-gray-400">Message</label>
              </div>
              <!-- <div class="mb-0 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex"> -->
              <!-- <input
              class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox" value="" id="exampleCheck96" checked /> -->
              <!-- <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
              Send me a copy of this message
            </label> -->
              <!-- </div> -->
              <div class="flex justify-start max-[768px]:justify-start">
                <a class="group relative inline-flex items-center overflow-hidden rounded dark:bg-secondarycolor bg-primarycolor px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                  href="#">
                  <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg class="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:me-4"> Submit </span>
                </a>
              </div>

            </form>
          </div>
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div class="flex flex-wrap w-full">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <span class="material-symbols-outlined text-primarycolor dark:text-gray-400">
                        support_agent
                      </span>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bebasNeue text-xl dark:text-white">
                      Technical support
                    </p>
                    <p class="text-neutral-500 font-yanoneKaffeesatz dark:text-gray-400">
                      support@infiniteBox.com
                    </p>
                    <p class="text-neutral-500 font-yanoneKaffeesatz dark:text-gray-400">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="flex items-start">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <span class="material-symbols-outlined text-primarycolor dark:text-gray-400">
                        help
                      </span>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bebasNeue text-xl dark:text-white">
                      Sales questions
                    </p>
                    <p class="text-neutral-500 font-yanoneKaffeesatz dark:text-gray-400">
                      sales@infiniteBox.com
                    </p>
                    <p class="text-neutral-500 font-yanoneKaffeesatz dark:text-gray-400">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <span class="material-symbols-outlined text-primarycolor dark:text-gray-400">
                        live_help
                      </span>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bebasNeue text-xl dark:text-white">Press</p>
                    <p class="text-neutral-500 font-yanoneKaffeesatz dark:text-gray-400">
                      press@infiniteBox.com
                    </p>
                    <p class="text-neutral-500 font-yanoneKaffeesatz dark:text-gray-400">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div class="align-start flex">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <span class="material-symbols-outlined text-primarycolor dark:text-gray-400">
                        pest_control
                      </span>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bebasNeue text-xl dark:text-white">Bug report</p>
                    <p class="text-neutral-500 font-yanoneKaffeesatz dark:text-gray-400">
                      bugs@infiniteBox.com
                    </p>
                    <p class="text-neutral-500 font-yanoneKaffeesatz dark:text-gray-400">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>
  </div>
  <div class="relative">
    <Sidebar />
  </div>
  <Footer />
</template>