import Questions from '/components/sections/Questions.vue';

export default {
  title: 'Questions',
  component: Questions,
};

const Template = (args) => ({
  components: { Questions },
  setup() {
      return {
          args,
      }
  },
  template: '<Questions v-bind="args"/>'
})

export const DefaultQuestions = Template.bind({})
