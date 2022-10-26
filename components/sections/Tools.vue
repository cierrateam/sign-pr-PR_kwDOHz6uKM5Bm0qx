<template>
    <div class="
            -z-10
            xl:px-[124px]
            px-4
            pt-28
            lg:pt-[140px]
            pb-[108px]
            lg:pb-[120px]
            mt-[152px]
            relative
            bg-primary
            lg:flex
            block
            flex-row
            items-center
            justify-between
        ">
        <img class="hidden xl:block absolute left-0 top-[34%]" src="/assets/images/Rectangle62.png"
            alt="" />
        <img class="absolute left-0 top-[-5%] lg:top-[-8.5%] w-[115px] lg:w-auto"
            src="/assets/images/Vector.png" alt="" />
        <img class="absolute right-0 top-[-4%] sm:top-[-6%] md:top-[-7%] lg:top-[-8%] xl:top-[-9%] w-[104px] lg:w-auto"
            src="/assets/images/Vector1.png" alt="" />
        <img class="Vector2 absolute right-0 bottom-0 w-[74px] lg:w-auto" src="/assets/images/Vector2.png"
            alt="" />
        <div class="w-full xl:w-[46%] mb-10 lg:mb-0">
            <Logo />
            <h2
                class="lg:font-openSans mt-1 mb-4 font-semibold text-[24px] lg:text-[40px] leading-[36px] lg:leading-[60px] text-white">
                <slot />
            </h2>
            <p class="text-blue mb-5 text-base">
                {{$t('tools.description1')}}
            </p>
            <p class="text-blue text-base">
                {{$t('tools.description2')}}
            </p>
        </div>
        <div class="flex flex-wrap flex-row w-full xl:w-[46%]">
            <Tool v-for="(tool, index) in tools" :key="'Tool' + index" :title="tool.title" :image="tool.image"></Tool>
        </div>
    </div>
</template>

<script setup>
import Tool from '../Tool.vue'
import Logo from "../icons/Logo.vue"
import DropBoxIcon from '/assets/images/dropbox-11.png'
import CloseIcon from '/assets/images/close(4)1.png'
import GoogleDriveIcon from '/assets/images/google-drive-11.png'
import MicrosoftIcon from '/assets/images/microsoft-51.png'
import SharePointIcon from '/assets/images/microsoft-sharepoint1.png'
import PipeDriveIcon from '/assets/images/Pipedrive1.png'
import ZendeskIcon from '/assets/images/zendesk-11.png'
import SalesforceIcon from '/assets/images/salesforce-21.png'
import ActiveCampaignIcon from '/assets/images/Group3.png'
import OneDriveIcon from '/assets/images/onedrive-11.png'
import BoxIcon from '/assets/images/Group.png'
import CopperIcon from '/assets/images/Group2.png'
import HubspotIcon from '/assets/images/Vector4.png'
import SalesflareIcon from '/assets/images/image34.png'
import TeamIcon from '/assets/images/logo.png'
import ZohoIcon from '/assets/images/zoho-11.png'
import FlexmailIcon from '/assets/images/image35.png'
import { ref } from 'vue'

const tools = ref([
    {
        title: 'Sharepoint',
        image: SharePointIcon,
    },
    {
        title: 'Pipedrive',
        image: PipeDriveIcon,
    },
    {
        title: 'Zendesk',
        image: ZendeskIcon,
    },
    {
        title: 'Salesforce',
        image: SalesforceIcon,
    },
    {
        title: 'Dropbox',
        image: DropBoxIcon,
    },
    {
        title: 'ActiveCampaign',
        image: ActiveCampaignIcon,
    },
    {
        title: 'One point',
        image: OneDriveIcon,
    },
    {
        title: 'GoogleDrive',
        image: GoogleDriveIcon,
    },
    {
        title: 'Box',
        image: BoxIcon,
    },
    {
        title: 'copper',
        image: CopperIcon,
    },
    {
        title: 'Hubspot',
        image: HubspotIcon,
    },
    {
        title: 'Salesflare',
        image: SalesflareIcon,
    },
    {
        title: 'Teamleader',
        image: TeamIcon,
    },
    {
        title: 'CLose',
        image: CloseIcon,
    },
    {
        title: 'Zoho',
        image: ZohoIcon,
    },
    {
        title: 'Flexmail',
        image: FlexmailIcon,
    },
    {
        title: 'Microsoft Dynamics CRM',
        image: MicrosoftIcon,
    },
])
</script>
