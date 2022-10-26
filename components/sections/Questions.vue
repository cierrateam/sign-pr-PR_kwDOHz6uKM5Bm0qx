<template>
  <div
    class="px-4 lg:px-44 xl:px-[299px]  relative bg-primary mt-[119px] lg:mt-[177px] pt-24 xl:pt-[63px] pb-[138px] xl:pb-[87px] rounded-tr-[100px] lg:rounded-tr-[240px]">
    <img class="absolute bottom-[4.5%] md:bottom-[6%] lg:bottom-[11%] right-[-7%] md:right-0 w-[50px] lg:w-auto"
      src="/assets/images/Rectangle49.png" alt="" />
    <img class="absolute w-[80px] lg:w-auto right-[5%] lg:right-[8.6%] top-[-2%] sm:top-[-4.5%]"
      src="/assets/images/Vector3.png" alt="" />
    <img
      class="absolute w-[109px] lg:w-auto right-[12%] md:right-[9%] lg:right-[10%] xl:right-[7.5%] bottom-[-6%] md:bottom-[-8%] lg:bottom-[-16%] xl:bottom-[-17.5%]"
      src="/assets/images/Vector5.png" alt="" />
    <img class="absolute left-0 w-[109px] lg:w-auto bottom-0 xl:bottom-[8%]" src="/assets/images/Vector6.png" alt="" />
    <img class="absolute w-[104px] lg:w-auto top-[-4%] md:top-[-5%] lg:top-[-9%] left-[-3%] md:left-0"
      src="/assets/images/Vector7.png" alt="" />
    <h2
      class="lg:font-openSans font-medium lg:font-semibold text-xl lg:text-[40px] lg:leading-[60px] text-lightgrey pb-1 text-center">
      {{$t('questions.title')}}</h2>

    <div class="py-4 lg:py-6 border-b-primaryVariant border-b cursor-pointer" v-for="(question, index) in questions"
      :key="'question' + index" @click="setActiveIndex(index)">
      <div class="flex justify-between items-center w-full">
        <div class="text-[14px] leading-[22px] lg:text-base font-medium lg:font-semibold text-lightgrey">
          {{ question.question }}
        </div>

        <div>
          <ChevronDownIcon :class="activeIndex == index ? 'rotate-180 transition ease ' : 'rotate-0 transition ease'" />
        </div>
      </div>

      <div v-show="activeIndex == index"
        class="text-[14px] leading-[22px] lg:text-base mt-5 font-normal text-lightblue text-left ">
        {{ question.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import ChevronDownIcon from "../icons/ChevronDown.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const activeIndex = ref(-1);

const setActiveIndex = (index) => {
  if (index == activeIndex.value) activeIndex.value = -1;
  else activeIndex.value = index;
};

const questions = ref([
  {
    question: t('questions.question1.question'),
    answer: t('questions.question1.answer')
  },
  {
    question: t('questions.question2.question'),
    answer: t('questions.question2.answer')
  },
  {
    question: t('questions.question3.question'),
    answer: t('questions.question3.answer')
  },
  {
    question: t('questions.question4.question'),
    answer: t('questions.question4.answer')
  },
  {
    question: t('questions.question5.question'),
    answer: t('questions.question5.answer')
  },
  {
    question: t('questions.question6.question'),
    answer: t('questions.question6.answer')
  },
  {
    question: t('questions.question7.question'),
    answer: t('questions.question7.answer'),
  },
]);
</script>

