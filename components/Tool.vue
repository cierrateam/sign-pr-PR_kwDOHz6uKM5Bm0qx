<template>
  <div class="mr-3 lg:mr-5 mb-6 lg:mb-5 px-3 lg:px-4 py-[6px] lg:py-2 bg-white text-primary rounded-lg flex items-center flex-row">
    <img :src="image" class="mr-2" />
    <span class="font-medium text-[14px] leading-[22px] lg:text-base">{{title}}</span>
  </div>
</template>

<script setup>

defineProps({
  title: { type: String },
  image: { type: String },
})

</script>
