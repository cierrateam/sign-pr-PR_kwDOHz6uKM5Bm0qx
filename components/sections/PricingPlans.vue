<template>
    <div class="mt-[100px] lg:mt-[137px] lg:pb-6">
        <PageTitle>
            <template v-slot:title><span
                    class="text-secondary">{{$t('pricing.title1')}}</span>{{$t('pricing.title2')}}</template>
            <template v-slot:text>{{$t('pricing.description')}}</template>
        </PageTitle>
        <div class="flex items-center justify-center pt-[78px] lg:pt-[105px] pb-10 lg:pb-16">
            <span class="text-base text-primary cursor-pointer w-[70px] text-right" @click="isYearlySelected=false"
                :class="{'font-semibold' : !isYearlySelected}">{{$t('pricing.toggleInput.monthly')}}</span>
            <label for="toggle" class="inline-flex mx-4 relative items-center cursor-pointer">
                <input type="checkbox" value="" id="toggle" class="sr-only peer" v-model="isYearlySelected">
                <div
                    class="w-11 h-6 bg-secondaryVariant rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary">
                </div>
            </label>
            <div class="relative w-[70px]">
                <span
                    class="text-base text-primary cursor-pointer underline underline-offset-[6px] decoration-secondary"
                    :class="{'font-semibold' : isYearlySelected}"
                    @click="isYearlySelected=true">{{$t('pricing.toggleInput.yearly')}}</span>
                <div class="absolute w-max text-center text-secondary bottom-[60%] left-[20%] sm:left-[45%]">
                    <span class="font-normal text-[14px] leading-[22px]">{{$t('pricing.toggleInput.absolute')}}</span>
                    <div class="pl-8 sm:pl-7">
                        <SmallArrow />
                    </div>
                </div>
            </div>
        </div>
        <div class="space-y-12 px-4 lg:px-10 xl:px-[124px] lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            <PriceCard v-for="(card, index) in cards" :key="'PriceCard' + index" :title="card.title" :price=card.price
                :frequency="card.frequency" :description="card.description" :features="card.features" :cta="card.cta"
                :mostPopular=card.mostPopular :typeOfCard="card.typeOfCard"></PriceCard>
        </div>
    </div>
</template>

<script setup>
import PageTitle from '../PageTitle.vue';
import PriceCard from '../PriceCard.vue';
import SmallArrow from '../icons/SmallArrow.vue';
import { ref , watch } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const isYearlySelected = ref(false);

watch(isYearlySelected, () => {
    for (let i = 0; i < cards.length; i++) {
        var card = cards[i]
        if (card.price != undefined) {
            if (isYearlySelected.value) {
                card.price = card.price * 12 * .5;
                card.typeOfCard =  t('pricing.type.year')
            }
            else {
                card.price = card.price / 12 / .5;
                card.typeOfCard = t('pricing.type.month')
            }
        };
    }
});

const cards = [
    {
        title: t('pricing.cards.free.title'),
        price: 0,
        frequency: t('pricing.cards.free.frequency'),
        description: t('pricing.cards.free.description'),
        features: [
            { text: t('pricing.cards.free.features.text1') },
            { text: t('pricing.cards.free.features.text2') },
            { text: t('pricing.cards.free.features.text3') },
            { text: t('pricing.cards.free.features.text4') }
        ],
        cta: 'Get started',
        mostPopular: false,
        typeOfCard: t('pricing.type.month')
    },
    {
        title: t('pricing.cards.unlimited.title'),
        price: 25,
        frequency: t('pricing.cards.unlimited.frequency'),
        description: t('pricing.cards.unlimited.description'),
        features: [
            { text: t('pricing.cards.unlimited.features.text1') },
            { text: t('pricing.cards.unlimited.features.text2') },
            { text: t('pricing.cards.unlimited.features.text3') },
            { text: t('pricing.cards.unlimited.features.text4') },
            { text: t('pricing.cards.unlimited.features.text5') },
        ],
        cta: t('pricing.cards.unlimited.button'),
        mostPopular: true,
        typeOfCard:  t('pricing.type.month')
    },
    {
        title: t('pricing.cards.enterprise.title'),
        description: t('pricing.cards.enterprise.description'),
        features: [
            { text: t('pricing.cards.enterprise.features.text1') },
            { text: t('pricing.cards.enterprise.features.text2') },
            { text: t('pricing.cards.enterprise.features.text3') },
            { text: t('pricing.cards.enterprise.features.text4') },
            { text: t('pricing.cards.enterprise.features.text5') },
            { text: t('pricing.cards.enterprise.features.text6'), isBold: true },
            { text: t('pricing.cards.enterprise.features.text7'), isBold: true }
        ],
        cta: t('pricing.cards.enterprise.button'),
        mostPopular: false,
    },
];
</script>