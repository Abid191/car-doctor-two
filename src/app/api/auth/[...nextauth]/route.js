import { connectDB } from "@/lib/connectDB"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials
                if (!email || !password) {
                    return null
                }

                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null
                }

                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMatched) {
                    return null
                }
                return currentUser
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_Google_clientID,
            clientSecret: process.env.NEXT_PUBLIC_Google_client_Secret
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GitHub_clientID,
            clientSecret: process.env.NEXT_PUBLIC_GitHub_client_Secret
        }),
    ],
    pages: {
        signIn: '/Login'
    },

    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google' || account.provider === 'github') {

                const { name, email, image } = user
                try {
                    const db = await connectDB()
                    const userCollection = db.collection('users')
                    const userExist = await userCollection.findOne({ email })
                    if (!userExist) {
                        const res = await userCollection.insertOne(user)
                        return user
                    } else {
                        return user
                    }
                } catch (error) {
                    console.log(user)
                }

            } else {
                return user
            }
        },
    },


})

export { handler as GET, handler as POST }