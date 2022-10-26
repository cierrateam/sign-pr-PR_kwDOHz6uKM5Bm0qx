<template>
  <div class="md:text-center lg:text-start mt-20 lg:mt-[140px] xl:px-[124px] px-4">
    <h2
      class="lg:font-openSans text-primary mb-6 lg:mb-12 font-semibold text-[24px] lg:text-[40px] leading-[36px] lg:leading-[60px]">
      <slot />
    </h2>
    <div class="lg:flex flex-row block justify-between items-center">
      <GetStartedCard v-for="(card, index) in cards" :key="'GetStartedCard' + index" :number="index + 1"
        :title="card.title" :text="card.text" :bgColor="card.bgColor" :titleColor="card.titleColor"
        :textColor="card.textColor">
        <component :is="card.image"></component>
      </GetStartedCard>
    </div>
    <button
      class="  py-3 px-6 rounded-[32px] mt-2 lg:mt-9 bg-white text-primary font-medium text-[14px] leading-[22px] lg:text-base border border-solid border-primary">
      {{buttonText}}
    </button>
  </div>
</template>

<script setup>
import GetStartedCard from "../GetStartedCard.vue";
import CheckIcon from "../icons/Check.vue";
import ArrowIcon from "../icons/Arrow.vue";
import FrameIcon from "../icons/Frame.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const cards = [
  {
    title: t('getStarted.arrow.title'),
    image: ArrowIcon,
    text: t('getStarted.arrow.description'),
    bgColor: "bg-lightblue",
    titleColor: "text-primary",
    textColor: "text-primaryVariant",
  },
  {
    title: t('getStarted.frame.title'),
    image: FrameIcon,
    text: t('getStarted.frame.description'),
    bgColor: "bg-secondaryVariant",
    titleColor: "text-primary",
    textColor: "text-primaryVariant",
  },
  {
    title: t('getStarted.check.title'),
    image: CheckIcon,
    text: t('getStarted.check.description'),
    bgColor: "bg-primary",
    titleColor: "text-white",
    textColor: "text-darkblue",
  },
]

defineProps({
  buttonText: { type: String }
})
</script>