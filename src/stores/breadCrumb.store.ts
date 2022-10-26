import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export interface Breadcrumbs {
    Name: string
    Href: string
    IsCurrent?: boolean
}
const breadCrumbStore: Writable<Breadcrumbs[]> = writable([])

export default breadCrumbStore
