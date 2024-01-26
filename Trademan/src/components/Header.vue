<script setup lang="ts">
import logo from "@/assets/icon/logo.png";
import simu from "@/assets/icon/simu.png";
import  new_feature from "@/assets/icon/new_feature.png";
</script>

<template>
    <div class="">
        <nav class="w-full relative justify-between bg-[#1e2025] flex border-0 border-[#e5e7eb]">
            <div className="container flex h-[55px]">
            <ul className="flex gap-10 ml-auto  mr-auto justify-between text-white">
                <li class="my-auto mt-1 cursor-pointer">
                    <img :src="logo" class="w-36 h-12">
                    <a
                    href="#"
                    className=""
                    >  </a
                    >
                </li>
                <li class="mt-[15px]">
                    <a
                    href="#"
                    className=" hover:text-amber-400"
                    >Market</a
                    >
                </li>
                <li class="mt-[15px]">
                    <a
                    href="#"
                    className="hover:text-amber-400"
                    >Trade</a
                    >
                </li>
                <li class="mt-[15px]">
                    <a
                    href="#"
                    className="hover:text-amber-400"
                    >Portfolio</a
                    >
                </li>
                <li class="mt-[15px]">
                    <a
                    href="#"
                    className="hover:text-amber-400"
                    >Bubble</a
                    >
                </li>
                <li class="mt-[15px]">
                    <div class="inline-block">
                        <a
                        href="#"
                        className="hover:text-amber-400"
                        >Coachman</a
                        >
                        <img :src="new_feature" class="inline-block ml-1 mb-3" style="height: 16px;">
                    </div>
                </li>
            </ul>

            <ul className="flex gap-3 ml-auto text-white">
                <li class="mt-[15px]">
                    <div class="flex">
                        <span class="w-5 h-5 ">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" 
                                 class="fill-white fill-textBlack">
                            <path d="M20.1 9.22c-1.81 0-2.55-1.28-1.65-2.85a1.9 1.9 0 0 0-.7-2.59l-1.73-.99a1.669 1.669 0 0 0-2.28.6l-.11.19c-.9 
                            1.57-2.38 1.57-3.29 0l-.11-.19a1.641 1.641 0 0 0-2.26-.6l-1.73.99a1.908 1.908 0 0 0-.7 2.6c.91 1.56.17 2.84-1.64 
                            2.84a1.906 1.906 0 0 0-1.9 1.9v1.76a1.906 1.906 0 0 0 1.9 1.9c1.81 0 2.55 1.28 1.64 2.85a1.9 1.9 0 0 0 .7 2.59l1.73.99a1.669 
                            1.669 0 0 0 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19a1.669 1.669 0 0 0 2.28.6l1.73-.99a1.9 1.9 0 0 0 .7-2.59c-.91-1.57-.17-2.85 
                            1.64-2.85a1.906 1.906 0 0 0 1.9-1.9v-1.76a1.921 1.921 0 0 0-1.91-1.9zM12 15.25A3.25 3.25 0 1 1 15.25 12 3.256 3.256 0 0 1 12 15.25z">
                            </path>
                            </svg>
                        </span>
                        <span class="px-2">
                            Setting
                        </span>
                    </div>
                </li>
                <li class="mt-[15px]">
                    <div class="flex">
                        <span class="w-5 h-5">
                            <svg viewBox="0 0 24.766 24.766" xmlns="http://www.w3.org/2000/svg" 
                                 class="fill-white fill-textBlack">
                            <path d="M17.542 7.223a5.159 5.159 0 1 1-5.16-5.159 5.159 5.159 0 0 1 5.16 5.159zM12.383 14.963c-5.17 0-9.38 
                            3.467-9.38 7.739a.511.511 0 0 0 .516.516h17.728a.511.511 0 0 0 .516-.516c0-4.272-4.21-7.739-9.38-7.739z">
                            </path></svg>
                        </span>
                        <span class="px-2 font-light">
                            130531
                        </span>
                    </div>
                </li>
                <li class="my-auto cursor-pointer">
                    <img :src="simu" alt="img" class="w-90 h-6">
                </li>
            </ul>
            </div>
        </nav>
    </div>
</template>