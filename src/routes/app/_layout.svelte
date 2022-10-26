<script lang="ts">
    import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte'
    import ColorSwitch from 'carbon-icons-svelte/lib/ColorSwitch.svelte'
    import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte'
    import { stores } from '@sapper/app'

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
        Theme,
        Breadcrumb,
        BreadcrumbItem,
        Tile,
        Grid,
    } from 'carbon-components-svelte'
    import breadCrumbStore from '../../stores/breadCrumb.store'

    let isSideNavOpen = false
    let isOpen = false
    let theme: CarbonTheme = 'g80'
    const { session } = stores()

    const toggleTheme = () => {
        if (theme === 'g80') {
            theme = 'g10'
        } else {
            theme = 'g80'
        }
    }
</script>

<Theme bind:theme />

<Header company="Qei" platformName="Admin" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
        <HeaderNavItem href="/app" text="Özet" />
        <HeaderNavItem href="/app/proforma" text="Proformalar" />
        <HeaderNavItem href="/app/product" text="Ürünler" />
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
                <HeaderPanelDivider>{$session.Email}</HeaderPanelDivider>
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
    {#if $breadCrumbStore && $breadCrumbStore.length > 0}
        <Breadcrumb style="margin-bottom:2rem;">
            {#each $breadCrumbStore as breadCrumb}
                <BreadcrumbItem href={breadCrumb.Href} isCurrentPage={breadCrumb.IsCurrent}>{breadCrumb.Name}</BreadcrumbItem>
            {/each}
        </Breadcrumb>
    {/if}
    <slot />
</Content>
