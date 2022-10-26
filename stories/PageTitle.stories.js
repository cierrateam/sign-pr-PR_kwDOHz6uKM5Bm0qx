import PageTitle from '/components/PageTitle.vue'

export default {
    title: 'PageTitle',
    component: PageTitle,
}

const Template = (args) => ({
    components: { PageTitle },
    setup() {
        return {
            args,
        }
    },
    template: `<PageTitle v-bind="args">
        <template v-if="${'title' in args}" v-slot:title>${args.title}</template>
        <template v-if="${'text' in args}" v-slot:text>${args.text}</template>
    </PageTitle>`,
})

export const IndexPageTitle = Template.bind({})
IndexPageTitle.args = {
    title: `Digitale Signatur <span class="text-secondary">leicht gemacht</span> für KMUs`,
    text: `Die datenschutzkonforme Software für digitale Signatur mit white-label Option, Workflow Builder comming soon und GraphQL-API.`,
}

export const PricingPageTitle = Template.bind({})
PricingPageTitle.args = {
    title: `<span class="text-secondary">Fair pricing</span> to keep your business growing`,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames adipiscing odio urna leo eu facilisis tortor.`,
}
