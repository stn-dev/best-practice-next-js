import React from 'react'
import UserForm from './from/Page'
import style from './postUser.module.scss'
import GoBack from '@/app/components/goBack/goBack'

type Props = {}

function page({ }: Props) {


    return (
        <div className={style.container} >
            <h1>
                Add new user
            </h1>

            <UserForm />

            <GoBack />

        </div>
    )
}

export default page