import React from 'react'
import style from './loginPage.module.scss'
import LoginForm from './from/loginForm'

type Props = {}

function page({ }: Props) {
    return (
        <div className={style.container} >
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

export default page