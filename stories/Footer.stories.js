import Footer from '/components/sections/Footer.vue'

export default {
    title: 'Footer',
    component: Footer,
}

const Template = (args) => ({
    components: { Footer },
    setup() {
        return {
            args,
        }
    },
    template: '<Footer v-bind="args" />',
})

export const DefaultFooter= Template.bind({})
