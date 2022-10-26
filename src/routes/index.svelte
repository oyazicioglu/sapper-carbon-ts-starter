<script lang="ts">
    import { stores, goto } from '@sapper/app'
    import { onMount } from 'svelte'

    const { session } = stores()

    onMount(async () => {
        if ($session && $session.Email) {
            goto('/app')
        }
    })
</script>

<svelte:head>
    <title>Sapper Template</title>
</svelte:head>

<style lang="scss">
</style>
