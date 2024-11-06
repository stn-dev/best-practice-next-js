import React from 'react'
import style from './updateUser.module.scss'
import UpdateUserForm from './form/UpdateUserForm'

type IdType = {
    params: { id: string }
}

function page({ params }: IdType) {
    return (
        <div className={style.container} >
            <h1>
                Update your account
            </h1>

            <UpdateUserForm params={params} />
        </div>
    )
}

export default page