<template>
  <NuxtLink :to="address" class="text-blue text-base font-medium lg:last:pr-0 mb-5 lg:mb-0">
    {{title}}
  </NuxtLink>
</template>

<script setup>

  defineProps({
    title : {type: String},
    address: { type: String, default: "#" },
  })

</script>
