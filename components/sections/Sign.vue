<template>
  <div class="text-center mt-[134px] lg:mt-[200px]">
    <h2 class="font-semibold text-[24px] lg:font-openSans lg:text-[40px] leading-[36px] lg:leading-[60px] px-4 lg:px-0 text-dark text-center">
      <slot />
    </h2>
    <button class="  py-3 px-6 mt-6 bg-white font-medium text-base border border-solid border-primaryVariant text-primaryVariant rounded-[32px]">
      {{buttonText}}
    </button>
  </div>
</template>

<script setup>

defineProps({
  buttonText: { type: String }
})

</script>
