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
    return {MenuItems,countItems}
})
