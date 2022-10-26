import GetStartedCard from '/components/GetStartedCard.vue';
import CheckIcon from "/components/icons/Check.vue";
import ArrowIcon from "/components/icons/Arrow.vue";
import FrameIcon from "/components/icons/Frame.vue"

export default  {
    title: 'GetStartedCard',
    component: GetStartedCard,
}

const Template = (args) => ({
    components: { GetStartedCard , ArrowIcon, FrameIcon, CheckIcon },
    setup() {
        return {
            args,
        }
    },
    template: `<GetStartedCard v-bind="args">
                <${args.default} />
            </GetStartedCard>`,
})

const cardText = "Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem eliteque ut curabitur semper in.";
export const ArrowGetStartedCard = Template.bind({})
ArrowGetStartedCard.args = {
    default: 'ArrowIcon',
    title: "Click Get started",
    text: cardText,
    bgColor: "bg-lightblue",
    titleColor: "text-primary",
    textColor: "text-primaryVariant",
    number:1
}

export const FrameGetStartedCard = Template.bind({})
FrameGetStartedCard.args = {
    default: 'FrameIcon',
    title: "Complete the registration",
    text: cardText,
    bgColor: "bg-secondaryVariant",
    titleColor: "text-primary",
    textColor: "text-primaryVariant",
    number:2
}
export const CheckGetStartedCard = Template.bind({})
CheckGetStartedCard.args = {
    default: 'CheckIcon',
    title: "Start uploading and sign",
    text: cardText,
    bgColor: "bg-primary",
    titleColor: "text-white",
    textColor: "text-darkblue",
    number:3
}
