export interface Session {
    User?: SessionUser
}

export interface SessionUser {
    Email: string
    AccessToken?: string
}

declare namespace sapper {
    export interface SapperRequest {
        session?: Session
    }
}
