'use client'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Social_Login() {


  const searchParams = useSearchParams()
  const path = searchParams.get('redirect')
  const router = useRouter()
  const session = useSession()

  const handleSocialLogin = async (provider) => {
    const resp = await signIn(provider,
      {
        redirect: true,
        callbackUrl: path ? path : '/'
      })
  }
  if (session.status === 'authenticated') {
    router.push('/')
  }

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center ">

        <button onClick={() => handleSocialLogin('google')} className="btn btn-circle text-2xl"><FcGoogle /></button>

        <button onClick={() => handleSocialLogin('github')} className="btn btn-circle text-2xl ml-5"><FaGithub /></button>
      </div>

    </div>
  )
}
