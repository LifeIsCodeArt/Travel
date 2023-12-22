import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useMenuItemsStore = defineStore('MenuItemsStore', () => {
    const MenuItems = ref([
        {
            id:1,
            name: 'destinations'
        },
        {
            id:2,
            name: 'experiences'
        },
        {
            id:3,
            name: 'about'
        },
        {
            id:4,
            name: 'gallery'
        }
    ])

    const MenuItemsFooter = ref([
        {
            id:1,
            name: 'About'
        },
        {
            id:2,
            name: 'Pricing'
        },
        {
            id:3,
            name: 'Company'
        },
        {
            id:4,
            name: 'Blog'
        }
    ])

    const countItems = ref([
        {
            id:1,
            description: 'explore\n' +
                         'Ukraine'
        },
        {
            id:2,
            description: 'explore\n' +
                         'DropWow'
        },
        {
            id:3,
            description: 'explore\n' +
                'indonesia'
        },

    ])

   const footerIcons = ref([
       {
           id:1,
           imageLink:'/src/assets/icons/Footer%20icons/Google.png',
           description: 'Google'
       },
       {
           id:2,
           imageLink:'/src/assets/icons/Footer%20icons/Linkedin.png',
           description: 'Linkedin'
       },
       {
           id:3,
           imageLink:'/src/assets/icons/Footer%20icons/Facebook.png',
           description: 'Facebook'
       },
   ])

    return {MenuItems,countItems,MenuItemsFooter,footerIcons}
})
