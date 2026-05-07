// import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     /** The base URL of the server (optional if you're using the same domain) */
//     // baseURL: "https://skill-sphere-theta-henna.vercel.app/"
//     baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL
// })
// export const { signIn, signUp, useSession } = createAuthClient({
//     baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL
// });
// export const { signIn, signUp, useSession } = createAuthClient();


import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "https://skill-sphere-theta-henna.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient({
    baseURL: "https://skill-sphere-theta-henna.vercel.app"
});