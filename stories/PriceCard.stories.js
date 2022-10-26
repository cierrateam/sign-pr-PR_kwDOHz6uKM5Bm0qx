import PriceCard from '/components/PriceCard.vue';

export default  {
    title: 'PriceCard',
    component: PriceCard,
}

const Template = (args) => ({
    components: { PriceCard },
    setup() {
        return {
            args,
        }
    },
    template: '<PriceCard v-bind="args" />',
})

export const FreePriceCard = Template.bind({})
FreePriceCard.args = 
    {
        title: 'Free',
        price: 0,
        frequency: 'per user',
        description: 'Enjoy our platform with limited restrictions.',
        features: [
            { text: 'Individual' },
            { text: 'Branding on contracts' },
            { text: 'Max 1 User' },
            { text: 'Maximal 500MB Speicher' }
        ],
        cta: 'Get started',
    mostPopular: false,
    typeOfCard: 'month'
    }

export const UnlimitedPriceCard = Template.bind({})
UnlimitedPriceCard.args =   {
    title: 'Unlimited',
    price: 25,
    frequency: 'per user',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
        { text: 'Unlimited accounts' },
        { text: 'Unlimited documents' },
        { text: 'Custom branding' },
        { text: 'Advanced analytics' },
        { text: 'Unlimited subscribers' },
    ],
    cta: 'Get started',
    mostPopular: true,
    typeOfCard: 'month'
}
export const EnterprisePriceCard = Template.bind({})
EnterprisePriceCard.args =  {
    title: 'Enterprise',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
        { text: 'Unlimited accounts' },
        { text: 'Unlimited documents' },
        { text: 'Custom branding' },
        { text: 'Advanced analytics' },
        { text: 'Unlimited subscribers' },
        { text: 'SSO with SAML', isBold :true},
        { text: 'Self hosted option', isBold :true }
    ],
    cta: 'Contact us',
    mostPopular: false,
}
