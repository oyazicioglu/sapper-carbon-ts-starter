<script lang="ts">
    import 'carbon-components-svelte/css/all.css';
    import { Theme } from 'carbon-components-svelte';

    export let segment: string = '';
    segment = '';

    import {
        Header,
        HeaderUtilities,
        HeaderAction,
        HeaderPanelLinks,
        HeaderPanelDivider,
        HeaderPanelLink,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        SkipToContent,
        HeaderGlobalAction,
        Content,
        Loading,
    } from 'carbon-components-svelte';
    import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
    import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';
    import { stores } from '@sapper/app';
    import ColorSwitch from 'carbon-icons-svelte/lib/ColorSwitch.svelte';

    let isSideNavOpen = false;
    let isOpen = false;
    let theme: CarbonTheme = 'g80';

    const { preloading } = stores();

    const toggleTheme = () => {
        if (theme === 'g80') {
            theme = 'g10';
        } else {
            theme = 'g80';
        }
    };
</script>

<Theme bind:theme />

{#if $preloading}
    <Loading />
{/if}

<main>
    <Header company="Qei" platformName="Admin" bind:isSideNavOpen>
        <svelte:fragment slot="skip-to-content">
            <SkipToContent />
        </svelte:fragment>
        <HeaderNav>
            <HeaderNavItem href="/" text="Link 1" />
            <HeaderNavItem href="/" text="Link 2" />
            <HeaderNavItem href="/" text="Link 3" />
            <HeaderNavMenu text="Menu">
                <HeaderNavItem href="/" text="Link 1" />
                <HeaderNavItem href="/" text="Link 2" />
                <HeaderNavItem href="/" text="Link 3" />
            </HeaderNavMenu>
        </HeaderNav>
        <HeaderUtilities>
            <HeaderGlobalAction on:click={toggleTheme} icon={ColorSwitch} />
            <HeaderAction bind:isOpen icon={UserAvatarFilledAlt} closeIcon={UserAvatarFilledAlt}>
                <HeaderPanelLinks>
                    <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
                    <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                    <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
                    <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
                    <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
                    <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
                    <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                    <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
                    <HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
                    <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
                </HeaderPanelLinks>
            </HeaderAction>
        </HeaderUtilities>
    </Header>

    <Content>
        <slot />
    </Content>
</main>

<style lang="scss" global>
    @import '../styles/global.scss';
</style>
