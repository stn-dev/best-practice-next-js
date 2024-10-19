import style from './connexion.module.scss'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <>
            <div className={style.container} >
                <h1>connexion with google</h1>
            </div>
        </>
    )
}

export default page