import { writable } from 'svelte/store'
import type { MainMenu } from '$lib/model/MenuModel'

/* Initialize */
export const mainmenus = writable<MainMenu[]>([
    {
        name: 'Cat',
        path: '/cat',
        explain: 'catAPIで楽しむ',
    },
    {
        name: 'Menu A',
        path: '/menu-a',
        explain: 'メニューAを開く',
    },
    {
        name: 'Menu B',
        path: '/menu-b',
        explain: 'メニューBを開く',
    },
    {
        name: 'Menu C',
        path: '/menu-c',
        explain: 'メニューCを開く',
    },
])
