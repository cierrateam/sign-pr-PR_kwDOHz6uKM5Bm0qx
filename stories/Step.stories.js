import Step from '/components/Step.vue'
import IllustrationIcon from '/components/icons/Illustration.vue'
import UnionIcon from '/components/icons/Union.vue'
import ShieldCheckIcon from '/components/icons/Shieldcheck.vue'
import WritingIcon from '/components/icons/Writing.vue'
import Button12 from '/assets/svg/Button-12.svg'
import Button2 from '/assets/svg/Button2.svg'
import Sign3 from '/assets/svg/sign3.svg'
import Letter3 from '/assets/svg/letter3.svg'
import Navigation1 from '/assets/svg/navigation1.svg'
import Paper1 from '/assets/svg/paper1.svg'
import Protected1 from '/assets/svg/protected1.svg'
import Manysign1 from '/assets/svg/manysign1.svg'
import Desktop1 from '/assets/svg/Desktop1.svg'
import Popup1 from '/assets/svg/popup1.svg'
import Table1 from '/assets/svg/table1.svg'

export default {
    title: 'Step',
    component: Step,
}

const Template = (args) => ({
    components: { Step , UnionIcon, WritingIcon , ShieldCheckIcon , IllustrationIcon },
    setup() {
        return {
            args,
        }
    },
    template: `
        <Step v-bind="args">
        <template v-if="${'icon' in args}" v-slot:icon>${args.icon}</template>
            <template v-if="${'title' in args}" v-slot:title>${
        args.title
    }</template>
            <template v-if="${'text' in args}" v-slot:text>${
        args.text
    }</template>
            <template v-if="${'images' in args}" v-slot:images>${
        args.images
    }</template>
        </Step>
    `,
})

export const SignStep = Template.bind({})
SignStep.args = {
    icon: `<WritingIcon />`,
    title: `Sign effortlessly`,
    text: `Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem
    eliteque ut curabitur semper in. Lorem ipsum dolor sit amet,
    conse ctetur adipiscing lorem eliteque ut.`,
    images: ` <div class="flex flex-row items-end justify-between  -z-10 lg:justify-end px-4 lg:px-0">
    <img class="-mr-[.3rem] lg:-mr-3 min-w-[210px] xl:w-auto" src="${Letter3}" alt="" />
    <div>
        <div class="relative">
            <div class="
                flex flex-row
                items-center
                absolute
                right-0
                bottom-4
            ">
                <img src="${Button12}" alt="" class=" -z-10 mr-2 min-w-[40px] xl:w-auto" />
                <img src="${Button2}" alt="" class=" -z-10 min-w-[67px] xl:w-auto"/>
            </div>
        </div>
        <img src="${Sign3}" alt="" class="mb-6 lg:mb-16 min-w-[153px] xl:w-auto" />
    </div>
</div>`,
}

export const StayStep = Template.bind({})
StayStep.args = {
    icon: `<ShieldCheckIcon />`,
    title: `Stay compliant`,
    text: `Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem
    eliteque ut curabitur semper in. Lorem ipsum dolor sit amet,
    conse ctetur adipiscing lorem eliteque ut.`,
    images: `   <div class="              
    bg-lightgrey
    lg:rounded-r-xl
    flex flex-row
    justify-center
    items-center
    xl:px-28
    px-4
    xl:py-20
    py-9
    relative
">
    <img src="${Navigation1}" alt="" class="min-w-[86px] xl:w-auto"/>
    <img src="${Paper1}" alt="" class="ml-5 min-w-[244px] xl:w-auto"/>
    <img class="absolute top-[38%] lg:top-[36%] xl:top-[38%] left-[48%] lg:left-[44%] w-[125px] md:w-auto" src="${Protected1}" alt="" />
</div>`,
    firstDesc: false,
}

export const MultipleStep = Template.bind({})
MultipleStep.args = {
    icon: `<IllustrationIcon />`,
    title: `Multiple signature options`,
    text: `Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem
    eliteque ut curabitur semper in. Lorem ipsum dolor sit amet,
    conse ctetur adipiscing lorem eliteque ut.`,
    images: `<img src="${Manysign1}" alt="" class=" -z-10 w-auto mx-auto"/>`,
}

export const WorkflowStep = Template.bind({})
WorkflowStep.args = {
    icon: `<UnionIcon />`,
    title: `Configure workflow`,
    text: `Lorem ipsum dolor sit amet, conse ctetur adipiscing lorem
    eliteque ut curabitur semper in. Lorem ipsum dolor sit amet,
    conse ctetur adipiscing lorem eliteque ut.`,
    images: `   <div class="
    -z-10
    bg-lightgrey
    lg:rounded-r-xl
    flex flex-row
    justify-center
    items-center
    lg:px-24
    px-3
    lg:py-20
    py-9
">
    <div class="justify-center">
        <div class="flex flex-row items-start justify-start ml-2">
            <div>
                <img src="${Desktop1}" alt="" />
            </div>
            <div>
                <img src="${Popup1}" alt="" />
            </div>
        </div>
        <div>
            <img src="${Table1}" alt="" />
        </div>
    </div>
</div>`,
    firstDesc: false,
}
