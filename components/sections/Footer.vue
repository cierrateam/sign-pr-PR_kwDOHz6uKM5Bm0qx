<template>
  <footer class="bg-primary lg:pb-0 lg:pt-[133px] lg:px-5 xl:px-[124px] py-10 px-4">
    <div class="block lg:flex flex-row items-start justify-between">
      <div class="mb-10 lg:mb-0">
        <FooterLogo/>
      </div>
      <nav class="mb-5 lg:mb-0 flex flex-wrap justify-start gap-x-8 lg:gap-x-7">
        <FooterLink :title="$t('header.getStarted')" address="/"></FooterLink>
        <FooterLink :title="$t('header.integrations')" address="/"></FooterLink>
        <FooterLink :title="$t('header.features')" address="/"></FooterLink>
        <FooterLink :title="$t('header.faq')" address="/"></FooterLink>
        <FooterLink :title="$t('header.pricing')" address="/pricing"></FooterLink>
      </nav>
      <div>
        <h4 class="text-white mb-3 text-xl font-medium">{{$t('footer.newsletter.title')}}</h4>
        <div class="relative z-0">
          <input type="text" id="first_name"
            class="bg-primary font-normal rounded-[100px] h-12 mb-1 border border-darkblue text-darkblue text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            :placeholder="$t('footer.newsletter.placeholder')" required />
          <div class="flex justify-center items-center bg-secondary rounded-full w-9 h-9 absolute top-1.5 right-1.5">
            <ChevronRightIcon/>
          </div>
        </div>
        <p class="text-blue font-normal text-[12px] leading-[19px]">
          {{$t('footer.newsletter.subtitle')}}
          <NuxtLink class="cursor-pointer underline underline-offset-0 decoration-blue" to="/">{{$t('footer.newsletter.link')}}</NuxtLink>
        </p>
      </div>
    </div>
    <hr class="border-primaryVariant my-10 lg:mt-8 lg:mb-6" />
    <div class=" block lg:flex flex-row items-center justify-between pb-0 lg:pb-6">
      <p class="text-darkblue mb-5 lg:mb-0 text-[14px] leading-[22px] font-medium">
        {{$t('footer.copyright')}}<span class="text-red">♥</span> {{$t('footer.location')}}
      </p>
      <nav class="flex flex-wrap justify-start gap-x-5 md:gap-x-10 text-darkblue text-[14px] leading-[22px] font-medium">
        <NuxtLink to="/">{{$t('footer.privacy')}}</NuxtLink>
        <NuxtLink to="">{{$t('footer.impressum')}}</NuxtLink>
        <NuxtLink to="/">{{$t('footer.terms')}}</NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import FooterLink from "../FooterLink.vue";
import ChevronRightIcon from "../icons/ChevronRight.vue";
import FooterLogo from '../icons/FooterLogo.vue';
</script>
