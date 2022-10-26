import Tools from '/components/sections/Tools.vue'
import Logo from "/components/icons/Logo.vue"

export default {
    title: 'Tools',
    component: Tools,
}

const Template = (args) => ({
    components: { Tools, Logo },
    setup() {
        return {
            args,
        }
    },
    template: ` <Tools v-bind="args">
    <template v-if="${'default' in args}" v-slot:default>${args.default}</template>
    </Tools>`,
})

export const DefaultTools = Template.bind({})
DefaultTools.args = {
    default: `+ die Tools, die du liebst`,
}
