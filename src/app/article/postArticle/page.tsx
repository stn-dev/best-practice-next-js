import React from 'react'
import style from './page;.module.scss'
import FormDatas from './Form/FormDatas'

type Props = {}

export default function page({ }: Props) {
    return (
        <div className={style.container} >
            <h1>Add new article</h1>
            <FormDatas />
        </div>
    )
}