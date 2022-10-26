<template>
  <header class="my-5 lg:my-7">
    <Popover>
      <div class="flex flex-row items-center justify-between mx-4 xl:mx-[124px]">
        <div>
          <HeaderLogo />
        </div>
        <PopoverButton class="lg:hidden focus:outline-none">
          <MenuBar />
        </PopoverButton>
        <div class="hidden w-full lg:block md:w-auto">
          <nav>
            <HeaderLink :title="$t('header.getStarted')" address="/"></HeaderLink>
            <HeaderLink :title="$t('header.integrations')" address="/"></HeaderLink>
            <HeaderLink :title="$t('header.features')" address="/"></HeaderLink>
            <HeaderLink :title="$t('header.faq')" address="/"></HeaderLink>
            <HeaderLink :title="$t('header.pricing')" address="/pricing"></HeaderLink>
          </nav>
        </div>
        <div class="hidden lg:flex flex-row justify-between items-center">
          <NuxtLink to="" class="text-primaryVariant text-base font-medium">{{$t('header.signIn')}}</NuxtLink>
          <button class="text-white ml-5 bg-dark px-4 h-10 py-2 rounded-3xl text-base font-medium">
            {{$t('header.button')}}
          </button>
        </div>
      </div>
      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="fixed h-screen z-40 inset-x-0 top-0 origin-top-right transform transition lg:hidden">
          <div class="bg-white h-screen overflow-y-scroll">
            <div class="flex items-center justify-between py-5 px-4">
              <div>
                <HeaderLogo />
              </div>
              <PopoverButton class="inline-flex items-center justify-center focus:outline-none">
                <span class="sr-only">Close menu</span>
                <CloseMenu />
              </PopoverButton>
            </div>
            <div class="py-6 px-5">
              <nav class="grid text-center mt-12">
                <HeaderLink :title="$t('header.getStarted')" address="/"></HeaderLink>
                <HeaderLink :title="$t('header.integrations')" address="/"></HeaderLink>
                <HeaderLink :title="$t('header.features')" address="/"></HeaderLink>
                <HeaderLink :title="$t('header.faq')" address="/"></HeaderLink>
                <HeaderLink :title="$t('header.pricing')" address="/pricing"></HeaderLink>
              </nav>
              <div class="grid lg:hidden text-center mt-[52px]">
                <NuxtLink to="#" class="text-primaryVariant text-base font-medium">{{$t('header.signIn')}}</NuxtLink>
                <button class="text-white text-base font-medium bg-dark px-4 h-10 py-2 rounded-3xl mx-auto mt-4">
                  {{$t('header.button')}}
                </button>
              </div>
              <p class="text-primaryVariant mt-[149px] text-[14px] leading-[22px] font-medium text-center">
                {{$t('footer.copyright')}}<span class="text-red">♥</span>  {{$t('footer.location')}}
              </p>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import HeaderLink from "../HeaderLink.vue";
import CloseMenu from '../icons/CloseMenu.vue';
import HeaderLogo from '../icons/HeaderLogo.vue';
import MenuBar from '../icons/MenuBar.vue';
</script>

<style>

</style>
