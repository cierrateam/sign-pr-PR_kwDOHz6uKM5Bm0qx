import Banner from '/components/sections/Banner.vue';

export default {
    title: 'Banner',
    component: Banner,
}

const Template = (args) => ({
    components: { Banner },
    setup() {
        return {
            args,
        }
    },
    template: '<Banner v-bind="args" />',
})

export const DefaultBanner = Template.bind({})
DefaultBanner.args = {
    buttonText: `Kostenlos testen`
}
