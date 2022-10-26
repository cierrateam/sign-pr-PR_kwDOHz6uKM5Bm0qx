<template>
  <div class="relative max-w-md mx-auto flex flex-col rounded-2xl border px-5 py-6 xl:p-8 shadow-sm"
    :class="mostPopular ? 'bg-secondaryVariant2 border-secondaryVariant':'bg-white border-lightblue'">
    <div class="flex-1">
      <h3 class="text-xl font-medium text-primary">{{ title }}</h3>
      <p v-if="mostPopular"
        class="absolute top-0 -translate-y-1/2 transform rounded-full bg-secondary uppercase tracking-[.02em] py-1.5 px-4 text-[12px] leading-[19px] font-normal text-white">
        {{$t('pricing.mostPopular')}}</p>
      <p v-if="price !== null" class="mt-4 flex items-baseline text-dark">
        <span
          class="text-[32px] leading-[42px] lg:text-[40px] lg:leading-[40px] xl:text-[48px] xl:leading-[48px] font-bold tracking-tight">€{{ price
          }}</span>
        <span class="ml-1 text-base lg:text-xl font-medium">{{"/"+ typeOfCard + " " + frequency }}</span>
      </p>
      <p class="mt-4 lg:mt-6 text-base font-normal text-blueVariant">{{ description }}</p>
      <!-- Feature list -->
      <ul role="list" class="mt-4 lg:mt-6 space-y-3 lg:space-y-6">
        <li v-for="feature in features" :key="feature" class="flex">
          <div class="flex items-center"><img src="/assets/images/Icon.png" alt=""></div>
          <span class="ml-[17px] text-base"
            :class="feature.isBold ? 'font-medium text-dark' : 'font-normal text-primaryVariant'">
            {{ feature.text }}
          </span>
        </li>
      </ul>
    </div>
    <NuxtLink to=""
      :class="[mostPopular ? 'bg-secondary text-white border-secondary' : 'bg-white text-secondary border-secondary', 'mt-6 lg:mt-[62px] block w-full py-3 border rounded-lg text-center font-medium text-[14px] leading-[22px]']">
      {{
      cta }}</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  typeOfCard: { type: String },
  title: { type: String, required: true },
  price: { type: Number, default: null },
  frequency: { type: String },
  description: { type: String },
  features: { type: Array },
  cta: { type: String },
  mostPopular: { type: Boolean, default: false }
})

</script>
