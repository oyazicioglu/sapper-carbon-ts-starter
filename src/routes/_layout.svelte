<script lang="ts">
    import 'carbon-components-svelte/css/all.css'

    export let segment: string = ''
    segment = ''

    import { Loading } from 'carbon-components-svelte'
    import { stores, goto } from '@sapper/app'
    import { onMount } from 'svelte'

    const { preloading, session } = stores()

    onMount(async () => {
        if (!$session || !$session.Email) {
            goto('/user/login')
        }
    })
</script>

{#if $preloading}
    <Loading />
{/if}

<main>
    <slot />
</main>

<style lang="scss" global>
    @import '../styles/global.scss';
</style>
