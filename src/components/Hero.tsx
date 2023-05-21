import React from 'react'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => (
  <div className="space-y-5">
    <Image src={nlwLogo} alt="NLW Spacetime" />
    <div className="max-w-[420px] space-y-1">
      <h1 className="text-5xl font-bold leading-tight text-gray-50">
        Sua cápsula do tempo
      </h1>
      <p className="text-lg leading-relaxed">
        Colecione momentos marcantes de sua jornada e compartilhee (se
        quiser) com o mundo!
      </p>
    </div>

    <Link
      href="/memories/new"
      className="
        inline-block rounded-full 
        bg-green-500 px-5 py-3 
        font-alt text-sm uppercase 
        leading-none text-black hover:bg-green-600
      "
    >
      Cadastrar Lembrança
    </Link>
  </div>
)