<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <CookieBanner /> 
  </div>

</template>

<script setup>
import Header from "../components/sections/Header.vue";
import Footer from "../components/sections/Footer.vue";
import CookieBanner from "../components/CookieBanner.vue";

</script>