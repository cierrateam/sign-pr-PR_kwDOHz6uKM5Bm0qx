<template>
  <div class="
                mb-12 lg:mb-24 px-0
                xl:pr-[124px]
                lg:flex flex-row
                items-center
                justify-between
            " :class="paddingClass">
    <div class="w-full lg:w-1/4 px-4 lg:px-0" :class="descriptionOrderClass">
      <slot name="icon"></slot>
      <h3 class="text-primary font-medium mb-4 text-xl lg:text-[24px] lg:leading-[34px]">
        <slot name="title"></slot>
      </h3>
      <p class="text-primaryVariant text-base font-normal mb-8 lg:mb-0">
        <slot name="text"></slot>
      </p>
    </div>
    <div  :class="imagesOrderClass">
      <slot name="images"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  firstDesc: { type: Boolean, default: true }
})
const descriptionOrderClass = computed(() => props.firstDesc ? 'lg:order-1' : 'lg:order-2')
const imagesOrderClass = computed(() => props.firstDesc ? 'lg:order-2' : 'lg:order-1 lg:w-7/12')
const paddingClass = computed(() => props.firstDesc ? 'lg:px-5 xl:pl-[124px]' : 'lg:pr-5 xl:pl-0')
</script>
