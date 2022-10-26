<script context="module" lang="ts">
    import type { Preload } from '@sapper/common'

    export const preload: Preload = async function (this, page, session) {
        const proformaFetch = await this.fetch('http://localhost:3001/api/proforma', {
            method: 'GET',
            headers: { Authorization: `Bearer ${session.AccessToken}` },
            credentials: 'include',
        })

        const proformas = await proformaFetch.json()
        return { proformas }
    }
</script>

<script lang="ts">
    import { DataTable, Link } from 'carbon-components-svelte'
    import breadCrumbStore from '../../../stores/breadCrumb.store'

    export let proformas = []
    $breadCrumbStore = [
        { Href: '/app', Name: 'Özet', IsCurrent: false },
        { Href: '', Name: 'Proformalar', IsCurrent: true },
    ]
    const tableHeaders = [{ key: 'Name', value: 'Name' }]
</script>

<h1>Proforma</h1>

<DataTable headers={tableHeaders} bind:rows={proformas}>
    <svelte:fragment slot="cell" let:row let:cell>
        {#if cell.key === 'Name'}
            <Link href={`/app/proforma/${row.Id}`}>{cell.value}</Link>
        {:else}
            {cell.value}
        {/if}
    </svelte:fragment>
</DataTable>
