import PricingPlans from '/components/sections/PricingPlans.vue';

export default {
  title: 'PricingPlans',
  component: PricingPlans,
};

const Template = (args) => ({
  components: { PricingPlans },
  setup() {
      return {
          args,
      }
  },
  template: '<PricingPlans v-bind="args"/>'
})

export const DefaultPricingPlans = Template.bind({})
