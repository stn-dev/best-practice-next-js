"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    className: string
    id: string
}

function GoToUpdate({ className, id }: Props) {

    const router = useRouter()

    return (
        <button
            className={className}
            onClick={() => router.push(`/user/${id}/update`)}
        >
            UPDATE
        </button>
    )
}

export default GoToUpdate