'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Social_Login from '../Components/Shared/Social_Login'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'


export default function Login() {
    
    const searchParams = useSearchParams()
    const path = searchParams.get('redirect')
    const router = useRouter()
    const handleLogin = async (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: path ? path : '/'
        })
        event.target.reset()
        if (resp.status === 200) {
            router.push('/')
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 md:w-1/2">
                    <Image src='/assets/images/login/login.svg' height={640} width={600} alt='login image'></Image>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-10">Login</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Login"
                                />
                            </div>
                        </form>
                        <p className="my-4 text-center">
                            New to Cars Doctor?{" "}
                            <Link
                                href='SignUp'
                                className="link-hover text-orange-600 font-semibold"
                            >
                                Sign up
                            </Link>
                        </p>
                        <Social_Login></Social_Login>
                    </div>
                </div>
            </div>
        </div>
    )
}