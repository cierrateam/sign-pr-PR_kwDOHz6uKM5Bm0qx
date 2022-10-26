<template>
    <div class="text-center mt-[100px] lg:mt-[188px]">
        <PageTitle>
            <template v-slot:title>{{$t('banner.title1')}}<span class="text-secondary">{{$t('banner.title2')}}</span>{{$t('banner.title3')}}</template>
            <template v-slot:text>{{$t('banner.description')}}</template>
        </PageTitle>
        <button class="
                py-3
                px-6
                mt-10
                bg-white
                font-medium
                lg:text-base
                text-[14px]
                leading-[22px]
                border border-solid border-primaryVariant
                text-primaryVariant
                rounded-[32px]
            ">
            {{ buttonText }}
        </button>
        <div class="relative mt-0 md:-mt-20 lg:-mt-40 xl:-mt-56 h-[23rem] sm:h-[23rem] lg:h-[23rem] xl:h-[39rem]">
            <img class="
            -z-10
                    absolute
                    right-[-25%]
                    sm:right-0
                    bottom-0
                    xl:w-auto
                    w-[221px]
                " src="/assets/images/blueVector.svg" alt="" />
            <img class="
            -z-10
                    absolute
                    left-[-9%]
                    sm:left-0
                    bottom-0
                    xl:w-auto
                    w-[133px]
                " src="/assets/images/greyVector.svg" alt="" />
            <img class="
            -z-10
                    absolute
                    bottom-0
                    xl:left-[19%]
                    lg:left-[15%]
                    md:left-[19%]
                    sm:left-[22%]
                    left-[30%]
                    xl:w-auto
                    md:w-[80px]
                    sm:w-[100px]
                    w-[80px]
                " src="/assets/images/lightOrangeVector.svg" alt="" />
            <img class="
                    -z-10
                    absolute
                    left-[-9%]
                    sm:left-0
                    top-0
                    xl:w-auto
                    w-[133px]
                " src="/assets/images/orangeVector.svg" alt="" />
        </div>
    </div>
</template>

<script setup>
import PageTitle from '../PageTitle.vue';
defineProps({
    buttonText: { type: String },
})
</script>
