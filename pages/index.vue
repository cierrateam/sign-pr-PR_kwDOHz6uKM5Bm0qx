<template>
  <div>
    <Banner :buttonText="$t('banner.button')" />
    <GetStarted :buttonText="$t('getStarted.button')">{{$t('getStarted.title1')}}<span class="text-secondary">{{$t('getStarted.title2')}}</span>{{$t('getStarted.title3')}} </GetStarted>
    <Tools>+ {{$t('tools.title')}}</Tools>
    <Steps />
    <Questions />
    <Sign :buttonText="$t('sign.button')">{{$t('sign.title')}}
      <span>
        <Logo/>
      </span>
    </Sign>
    <Shapes />
  </div>

</template>

<script setup>

import Banner from "../components/sections/Banner.vue";
import GetStarted from "../components/sections/GetStarted.vue";
import Tools from "../components/sections/Tools.vue";
import Steps from "../components/sections/Steps.vue";
import Questions from "../components/sections/Questions.vue";
import Sign from "../components/sections/Sign.vue";
import Shapes from "../components/sections/Shapes.vue";
import Logo from "../components/icons/Logo.vue";

</script>

