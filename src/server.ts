import sirv from 'sirv'
import compression from 'compression'
import * as sapper from '@sapper/server'
import express from 'express'
import cookieParser from 'cookie-parser'
import fetch from 'cross-fetch'

const app = express()
const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(compression({ threshold: 0 }))
app.use(sirv('static', { dev }))
app.use(
    sapper.middleware({
        session: async (req: any) => {
            const { access_token } = req.cookies
            let user = undefined

            if (access_token) {
                const fetchResult = await fetch('http://localhost:3001/api/user', {
                    method: 'GET',
                    headers: { Authorization: `Bearer ${access_token}` },
                })

                user = await fetchResult.json()
                if (user) {
                    user.AccessToken = access_token
                }
            }

            req.session = user
            return req.session
        },
    })
)
app.listen(PORT, () => {})
