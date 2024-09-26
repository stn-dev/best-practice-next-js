import React from 'react'
import FormDatas from './FormDatas'

type Props = {}

export default function page({ }: Props) {
    return (
        <div>
            <h2>add new article</h2>
            <FormDatas />
        </div>
    )
}