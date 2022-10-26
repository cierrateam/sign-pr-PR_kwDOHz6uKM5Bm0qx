import Shapes from '/components/sections/Shapes.vue'

export default {
    title: 'Shapes',
    component: Shapes,
}

const Template = (args) => ({
    components: { Shapes },
    setup() {
        return {
            args,
        }
    },
    template: '<Shapes v-bind="args" />',
})

export const DefaultShapes = Template.bind({})
