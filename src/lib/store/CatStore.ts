import { writable } from 'svelte/store'
import type { CatModel } from '$lib/model/Cat'

export const catsStore = writable<CatModel[]>([])
