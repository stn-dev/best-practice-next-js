"use client"

import React, { useEffect } from 'react'
import { animatePageIn } from '../utiles/animate'

function template({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        animatePageIn()
    })

    return (
        <div>
            {children}
        </div>
    )
}

export default template