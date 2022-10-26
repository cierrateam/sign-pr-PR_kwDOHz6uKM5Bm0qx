<template>
  <NuxtLink :to="address" class="text-primaryVariant text-base lg:pr-7 font-medium lg:last:pr-0 mb-7 lg:mb-0">
    {{title}}
  </NuxtLink>
</template>

<script setup>

  defineProps({
    title : {type: String},
    address: { type: String, default: "#" },
  })

</script>
