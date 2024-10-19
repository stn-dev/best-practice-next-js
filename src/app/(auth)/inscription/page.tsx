import style from './page.module.scss'
import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <>
            <div className={style.container} >
                <h1>inscription page</h1>
            </div>
        </>
    )
}

export default page