import HeaderLink from '/components/HeaderLink.vue'

export default {
    title: 'HeaderLink',
    component: HeaderLink,
}

const Template = (args) => ({
    components: { HeaderLink },
    setup() {
        return {
            args,
        }
    },
    template: '<HeaderLink v-bind="args" />',
})

export const DefaultHeaderLink = Template.bind({})
DefaultHeaderLink.args = {
    title: 'Get started',
    address: '#',
}
