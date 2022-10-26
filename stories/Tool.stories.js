import Tool from '/components/Tool.vue'
import ToolImage from  '/assets/images/image35.png'

export default {
    title: 'Tool',
    component: Tool,
}

const Template = (args) => ({
    components: { Tool },
    setup() {
        return {
            args,
        }
    },
    template: '<Tool v-bind="args" />',
})

export const DefaultTool = Template.bind({})
DefaultTool.args = {
    title: 'Flexmail',
    image: ToolImage,
}
