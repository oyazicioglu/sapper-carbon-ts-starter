<script lang="ts">
    import { Theme } from 'carbon-components-svelte'

    export let segment: string
    segment = ''
</script>

<Theme theme="g80" />

<div class="login-container">
    <slot />
</div>

<style lang="scss">
    .login-container {
        width: 500px;
        position: absolute;
        left: 0;
        right: 0;
        top: 100px;
        margin: auto;
    }
</style>
