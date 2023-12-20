import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useBenefitItemsStore = defineStore('BenefitItemsStore', () => {
    const BenefitItems = ref([
        {
            id:1,
            title: 'Title here',
            text:'Lorem ipsum dolor sit\n' +
                'amet et amet ist ame.'
        },
        {
            id:2,
            title: 'Title here',
            text:'Lorem ipsum dolor sit\n' +
                'amet et amet ist ame.'
        },
        {
            id:3,
            title: 'Title here',
            text:'Lorem ipsum dolor sit\n' +
                'amet et amet ist ame.'
        }
    ])

    return {BenefitItems}
})