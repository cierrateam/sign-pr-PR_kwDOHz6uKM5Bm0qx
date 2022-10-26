<template>
    <div class="mt-[70px] lg:mt-36  -z-10">
        <h2
            class="lg:font-openSans text-primary lg:text-center font-semibold text-[24px] lg:text-[40px] leading-[36px] lg:leading-[60px] mb-12 lg:mb-20 px-4 lg:px-0">
            <span class="text-secondary">{{$t('steps.title1')}}</span>{{$t('steps.title2')}}
            <span class="text-secondary">{{$t('steps.title3')}}</span>{{$t('steps.title4')}}
        </h2>
        <Step>
            <template #icon><WritingIcon /></template>
            <template #title>{{$t('steps.sign.title')}}</template>
            <template #text>{{$t('steps.sign.description')}}</template>
            <template #images>
                <div class="flex flex-row items-end justify-between  -z-10 lg:justify-end px-4 lg:px-0">
                    <img class="-mr-[.3rem] lg:-mr-3 min-w-[210px] xl:w-auto" src="../../assets/svg/letter3.svg"
                        alt="" />
                    <div>
                        <div class="relative">
                            <div class="
                                flex flex-row
                                items-center
                                absolute
                                right-0
                                bottom-4
                            ">
                                <img src="../../assets/svg/Button-12.svg" alt=""
                                    class=" -z-10 mr-2 min-w-[40px] xl:w-auto" />
                                <img src="../../assets/svg/Button2.svg" alt="" class=" -z-10 min-w-[67px] xl:w-auto" />
                            </div>
                        </div>
                        <img src="../../assets/svg/sign3.svg" alt="" class="mb-6 lg:mb-16 min-w-[153px] xl:w-auto" />
                    </div>
                </div>
            </template>
        </Step>
        <Step :firstDesc=false>
            <template #icon><ShieldCheckIcon /></template>
            <template #title>{{$t('steps.stay.title')}}</template>
            <template #text>{{$t('steps.stay.description')}}</template>
            <template #images>
                <div class="  
                    -z-10            
                    bg-lightgrey
                    lg:rounded-r-xl
                    flex flex-row
                    justify-center
                    items-center
                    xl:px-28
                    px-4
                    xl:py-20
                    py-9
                    relative
                ">
                    <img src="../../assets/svg/navigation1.svg" alt="" class="min-w-[86px] xl:w-auto" />
                    <img src="../../assets/svg/paper1.svg" alt="" class="ml-5 min-w-[244px] xl:w-auto" />
                    <img class="absolute top-[38%] lg:top-[36%] xl:top-[38%] left-[48%] lg:left-[44%] w-[125px] md:w-auto"
                        src="../../assets/svg/protected1.svg" alt="" />
                </div>
            </template>
        </Step>
        <Step>
            <template #icon><IllustrationIcon /></template>
            <template #title>{{$t('steps.multiple.title')}}</template>
            <template #text>{{$t('steps.multiple.description')}}</template>
            <template #images>
                <img src="../../assets/svg/manysign1.svg" alt="" class=" -z-10 w-auto mx-auto" />
            </template>
        </Step>
        <Step :firstDesc=false>
            <template #icon><UnionIcon /></template>
            <template #title>{{$t('steps.workflow.title')}}</template>
            <template #text>{{$t('steps.workflow.description')}}</template>
            <template #images>
                <div class="
                    -z-10               
                    bg-lightgrey
                    lg:rounded-r-xl
                    flex flex-row
                    justify-center
                    items-center
                    lg:px-24
                    px-3
                    lg:py-20
                    py-9
                ">
                    <div class="justify-center">
                        <div class="flex flex-row items-start justify-start ml-2">
                            <div>
                                <img src="../../assets/svg/Desktop1.svg" alt="" />
                            </div>
                            <div>
                                <img src="../../assets/svg/popup1.svg" alt="" />
                            </div>
                        </div>
                        <div>
                            <img src="../../assets/svg/table1.svg" alt="" />
                        </div>
                    </div>
                </div>
            </template>
        </Step>
    </div>
</template>

<script setup>

import Step from '../Step.vue';
import IllustrationIcon from "../icons/Illustration.vue";
import UnionIcon from "../icons/Union.vue";
import ShieldCheckIcon from "../icons/Shieldcheck.vue";
import WritingIcon from "../icons/Writing.vue";

</script>

