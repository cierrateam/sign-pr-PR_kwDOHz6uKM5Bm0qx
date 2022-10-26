import Header from '/components/sections/Header.vue'

export default {
    title: 'Header',
    component: Header,
}

const Template = (args) => ({
    components: { Header },
    setup() {
        return {
            args,
        }
    },
    template: '<Header v-bind="args" />',
})

export const DefaultHeader= Template.bind({})
