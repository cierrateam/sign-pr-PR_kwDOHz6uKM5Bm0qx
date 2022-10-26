<template>
    <div>
        <ClientOnly>
            <TransitionRoot as="div" :show="openCookieBanner">
                <Dialog as="div" class="relative z-10" @close="!openCookieBanner">
                    <TransitionChild as="div" enter="ease-out duration-300" enter-from="opacity-0"
                        enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <div class="fixed inset-0 bg-primary bg-opacity-50 transition-opacity" />
                    </TransitionChild>

                    <div class="fixed inset-0 z-10">
                        <div class="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
                            <TransitionChild as="div" enter="ease-out duration-300"
                                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                                leave-from="opacity-100 translate-y-0 sm:scale-100"
                                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <DialogPanel
                                    class="relative transform bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[650px] sm:max-w-[90%]">
                                    <div class="bg-white p-6 sm:p-8">
                                        <div class="sm:flex sm:items-start">
                                            <div class="text-left">
                                                <DialogTitle as="h2"
                                                    class="text-[22px] leading-[22px] font-semibold text-primary">
                                                    {{$t('cookieBanner.title')}}
                                                </DialogTitle>
                                                <div class="mt-5">
                                                    <p class="text-primary text-base">
                                                        {{$t('cookieBanner.description')}}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="px-6 pb-6 flex flex-row-reverse justify-start items-end sm:px-7 sm:pb-7">
                                        <button type="button"
                                            class="inline-flex justify-center border border-transparent bg-primary px-2 md:px-4 py-[6px] text-sm md:text-base font-medium text-white hover:bg-primaryVariant focus:outline-none ml-1 sm:ml-[10px]"
                                            @click="acceptAllCookies()">
                                            {{$t('cookieBanner.agreeButton')}}
                                        </button>
                                        <button type="button"
                                            class="mt-3 inline-flex justify-center border border-transparent bg-white px-2 md:px-4 py-[6px] text-sm md:text-base font-medium text-primary hover:bg-lightgrey focus:outline-none sm:mt-0 sm:ml-[10px]"
                                            @click="openCookieSetting = true" ref="cancelButtonRef">
                                            {{$t('cookieBanner.settingButton')}}
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
            <TransitionRoot as="div" :show="openCookieSetting">
                <Dialog as="div" class="relative z-10" @close="!openCookieSetting">
                    <TransitionChild as="div" enter="ease-out duration-300" enter-from="opacity-0"
                        enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <div class="fixed inset-0 bg-opacity-50 transition-opacity" />
                    </TransitionChild>

                    <div class="fixed inset-0 z-10">
                        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild as="div" enter="ease-out duration-300"
                                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                                leave-from="opacity-100 translate-y-0 sm:scale-100"
                                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <DialogPanel
                                    class="relative transform bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[650px] sm:max-w-[90%]  overflow-y-scroll max-h-[90%] h-[480px] lg:h-[560px]">
                                    <div class="bg-white p-6 sm:p-8 sm:pb-[10px] relative">
                                        <button @click="openCookieSetting = false"
                                            class="absolute top-0 right-2 text-[25px] text-primary hover:text-primaryVariant">
                                            ×
                                        </button>
                                        <div class="sm:flex sm:items-start">
                                            <div class="text-left">
                                                <DialogTitle as="h2"
                                                    class="text-[22px] leading-[22px] font-semibold text-primary">
                                                    {{$t('cookieBanner.setting.title')}}
                                                </DialogTitle>
                                                <div class="mt-5">
                                                    <p class="text-primary text-base">
                                                        {{$t('cookieBanner.setting.description.text')}}
                                                        <NuxtLink to="/privacy-policy"
                                                            @click="manageCookieModals()"
                                                            class="text-primary hover:text-secondary cursor-pointer">
                                                            {{$t('cookieBanner.setting.description.link')}}
                                                        </NuxtLink>
                                                    </p>
                                                </div>
                                                <div class="text-center mb-5 mt-[22px]">
                                                    <button type="button"
                                                        class="inline-flex justify-center border border-transparent bg-primary px-2 md:px-4 py-[6px] text-sm md:text-base font-medium text-white hover:bg-primaryVariant focus:outline-none sm:ml-[10px]"
                                                        @click="acceptAllCookies()">
                                                        {{$t('cookieBanner.setting.acceptAllButton')}}
                                                    </button>
                                                </div>
                                                <CookieCheckbox v-for="(checkbox, index) in checkboxList"
                                                    :key="'checkbox' + index" :disabled="checkbox.disabled"
                                                    :label="checkbox.label" :text="checkbox.text"
                                                    v-model="checkboxList[index].selected">
                                                </CookieCheckbox>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="px-6 pb-6 flex flex-row-reverse justify-start items-end sm:px-7 sm:pb-7">
                                        <button type="button"
                                            class="inline-flex justify-center border border-transparent bg-primary px-2 md:px-4 py-[6px] text-sm md:text-base font-medium text-white hover:bg-primaryVariant focus:outline-none ml-1 sm:ml-[10px]"
                                            @click="saveCookies()">
                                            {{$t('cookieBanner.setting.saveButton')}}
                                        </button>
                                        <button type="button"
                                            class="mt-3 inline-flex justify-center border border-transparent bg-white px-2 md:px-4 py-[6px] text-sm md:text-base font-medium text-primary hover:bg-lightgrey focus:outline-none sm:mt-0 sm:ml-[10px]"
                                            @click="openCookieSetting = false" ref="cancelButtonRef">
                                            {{$t('cookieBanner.setting.abortButton')}}
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        </ClientOnly>
    </div>
</template>

<script setup>
import CookieCheckbox from "./CookieCheckbox.vue";
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const isNecessaryCookieAllowed = computed(() => {
    const cookie = useCookie('necessary');
    return !cookie.value
});
const openCookieBanner = ref(false);
openCookieBanner.value = isNecessaryCookieAllowed.value;


const openCookieSetting = ref(false);
const checkboxList = ref([
    {
        label: t('cookieBanner.setting.checkboxList.necessaryCookie.label'),
        text: t('cookieBanner.setting.checkboxList.necessaryCookie.description'),
        disabled: true,
        selected: true,
        cookieName: "necessary"
    },
    {
        label: t('cookieBanner.setting.checkboxList.analysisCookie.label'),
        text: t('cookieBanner.setting.checkboxList.analysisCookie.description'),
        selected: false,
        cookieName: "analysis"
    },
    {
        label: t('cookieBanner.setting.checkboxList.marketingCookie.label'),
        text: t('cookieBanner.setting.checkboxList.marketingCookie.description'),
        selected: false,
        cookieName: "marketing"
    },
])

const manageCookieModals = () => {
    openCookieSetting.value = false;
    setTimeout(() => {
        openCookieBanner.value = false;
    }, 100);
}

const acceptAllCookies = async () => {
    await checkboxList.value.forEach((element, index) => {
        element.selected = true;
        const cookie = useCookie(element.cookieName);
        cookie.value = true;
    });
    manageCookieModals();
}

const saveCookies = async () => {
    await checkboxList.value.forEach((element, index) => {
        if (element.selected) {
            const cookie = useCookie(element.cookieName);
            cookie.value = true;
        };
    });
    manageCookieModals();
}

</script>