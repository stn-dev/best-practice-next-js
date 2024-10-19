"use client"

import { useRouter } from 'next/router'
import React from 'react'


export default function page() {

    const handleClick = () => {
        alert("bonjour tous le monde")
    }

    return (
        <button onClick={handleClick} > alert bonjour </button>
    )
}


