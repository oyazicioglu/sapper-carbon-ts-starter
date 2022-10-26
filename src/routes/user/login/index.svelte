<script lang="ts">
    import { Button, Form, Grid, PasswordInput, TextInput, Tile } from 'carbon-components-svelte'
    import { stores, goto } from '@sapper/app'
    import Login from 'carbon-icons-svelte/lib/Login.svelte'

    let email: string
    let password: string
    const { session } = stores()

    const handleLogin = async () => {
        const fetchResult = await fetch('http://localhost:3001/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username: email,
                password: password,
            }),
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })

        if (fetchResult.status === 201) {
            const result = await fetchResult.json()
            $session = result
            goto('/app')
        }
    }
</script>

<Tile>
    <Grid fullWidth width="500px">
        <Form>
            <TextInput type="email" bind:value={email} placeholder="Email" />
            <PasswordInput bind:value={password} placeholder="Password" />
            <Button icon={Login} width="100%" on:click={handleLogin}>Login</Button>
        </Form>
    </Grid>
</Tile>
