import Sign from '/components/sections/Sign.vue'
import Logo from '/components/icons/Logo.vue'

export default {
    title: 'Sign',
    component: Sign,
}

const Template = (args) => ({
    components: { Sign , Logo},
    setup() {
        return {
            args,
        }
    },
    template: ` <Sign v-bind="args">
    <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </Sign>`,
})

export const DefaultSign = Template.bind({})
DefaultSign.args = {
    default: `  Sign your next document using
    <span>
      <Logo/>
    </span>`,
    buttonText: 'Access the product',
}
