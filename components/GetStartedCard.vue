<template>
  <div class="w-full lg:w-[32%] xl:w-[30%] lg:h-[420px] xl:h-[398px] max-w-md p-6 xl:p-8 flex flex-col justify-between items-start rounded-xl mb-3 lg:mb-0 mx-auto lg:mx-0" :class="bgColor">
    <span :class="titleColor">{{ number }}</span>
    <div class="-mt-5 md:mt-4 mx-auto">
        <slot />
    </div>
    <h4 :class="titleColor" class="mb-2 lg:mb-3 mt-9 lg:mt-12 text-base lg:text-xl font-medium">{{ title }}</h4>
    <p :class="textColor" class="text-[14px] text-left leading-[22px] lg:text-base font-normal">{{ text }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  title: { type: String, required: true },
  bgColor: { type: String, required: true },
  text: { type: String },
  titleColor: { type: String },
  textColor: { type: String },
  number: { type: Number },
})

</script>
