import React from 'react'
import style from './uniqueUser.module.scss'
import { IUserType } from '@/db/Types/type'
import { getOneUser } from '@/db/User/userSevice'

type userId = {
    params: { id: string }
}


const uniqueUser = async ({ params }: userId) => {

    const user = await getOneUser(params.id)

    return (
        <div className={style.container}>
            <div className={style.user} >

                <img src="" alt="user picture" />

                <div className={style.userInfos} >

                    <h1>{user?.name}</h1>
                    <p>age : <span> {user?.age} </span></p>
                    <p>genres : <span> {user?.genres} </span></p>

                    <div className={style.btnContainer} >

                        <button className={style.deleteBtn} >DELETE</button>
                        <button className={style.updateBtn}>UPDATE</button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default uniqueUser