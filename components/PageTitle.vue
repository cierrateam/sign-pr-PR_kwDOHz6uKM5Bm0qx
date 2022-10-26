<template>
    <div class="text-center">
        <h1 class="
                text-primary
                text-[28px]
                lg:text-[70px]
                leading-[40px]
                lg:leading-[90px]
                font-semibold
                mb-4
                px-4
                lg:px-0
                mx-auto
                w-full
                sm:w-[65%]
                lg:w-[70%]
                xl:w-[58%]
            ">
            <slot name="title"></slot>
        </h1>
        <p class="
                text-primaryVariant lg:text-base
                text-[14px]
                leading-[22px]
                font-normal
                mx-auto
                px-4
                lg:px-0
                w-full
                sm:w-[57%]
                lg:w-[62%]
                xl:w-1/2
            ">
            <slot name="text"></slot>
        </p>
    </div>
</template>

<script setup></script>