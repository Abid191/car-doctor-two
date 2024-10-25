'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Social_Login from '../Components/Shared/Social_Login'

export default function Register() {

    const handleSignUp = async (event) => {
        event.preventDefault()
        const form = event.target
        const newUser = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        }
        const resp = await fetch('http://localhost:3000/SignUp/api',{
            method : 'POST',
            headers: {'content-type' : 'application/json'},
            body:JSON.stringify(newUser),
        })
        console.log(resp)
        if(resp){
            form.reset()
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 md:w-1/2">
                    <Image src='/assets/images/login/login.svg' height={640} width={600} alt='login image'></Image>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center mt-10">Sign Up</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Your Password"
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
                                    value="Signup"
                                />
                            </div>
                        </form>
                        <p className="my-4 text-center">
                            Already have an account?{" "}
                            <Link
                                href='Login'
                                className="link-hover text-orange-600 font-semibold"
                            >
                                Login
                            </Link>
                        </p>
                        <Social_Login></Social_Login>
                    </div>
                </div>
            </div>
        </div>
    )
}
