<script context="module" lang="ts">
    import type { Preload } from '@sapper/common'
    import { Tile } from 'carbon-components-svelte'

    export const preload: Preload = async function (this, page, session) {
        const { id } = page.params
        const proformaFetch = await this.fetch(`http://localhost:3001/api/proforma/${id}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${session.AccessToken}` },
            credentials: 'include',
        })

        const proforma = await proformaFetch.json()
        return { proforma }
    }
</script>

<script lang="ts">
    import breadCrumbStore from '../../../stores/breadCrumb.store'
    export let proforma
    $breadCrumbStore = [
        { Href: '/app', Name: 'Özet', IsCurrent: false },
        { Href: '/app/proforma', Name: 'Proformalar', IsCurrent: false },
        { Href: '', Name: proforma.Name, IsCurrent: true },
    ]
</script>

{proforma.Name}
