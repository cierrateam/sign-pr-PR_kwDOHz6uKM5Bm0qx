import GetStarted from '/components/sections/GetStarted.vue';

export default {
  title: 'GetStarted',
  component: GetStarted,
};

const Template = (args) => ({
  components: { GetStarted },
  setup() {
      return {
          args,
      }
  },
  template: `
      <GetStarted v-bind="args">
          <template v-if="${'default' in args}" v-slot>${args.default}</template>
      </GetStarted>
  `,
})

export const DefaultGetStarted = Template.bind({})
DefaultGetStarted.args = {
  default: `Getting <span class="text-secondary">started</span> with us`,
  buttonText: `Kostenlos testen`
}
