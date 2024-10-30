"use client"

import React from 'react'

function UserForm() {

    const postUser = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const name = formData.get('name')
        const age = formData.get("age")
        const genres = formData.get("genres")
        const file = formData.get('image')

        console.log(file)

        // try {
        //     const res = await fetch("http://localhost:3000/api/user", {
        //         method: "POST",
        //         headers: {
        //             "content-Type": "application/json"
        //         },
        //         body: JSON.stringify({ name, age, genres, file })
        //     }
        //     )

        //     if (res.ok) {
        //         alert("user posted")
        //     } else {
        //         alert("error when post user")
        //     }

        //     // e.currentTarget.reset()
        // } catch (error) {
        //     console.log(error)
        // }
    }


    return (
        <div>
            <form onSubmit={postUser} >
                <input
                    type="text"
                    name='name'
                    placeholder='name'
                    required
                />
                <br />
                <input
                    type="number"
                    name='age'
                    placeholder='enter your age'
                    required
                />
                <br />
                <select name="genres" >
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <br />
                <input
                    type="file"
                    name='image'
                    placeholder='file'
                />
                <br />
                <button className='w-7 h-3 text-black border-black'>save</button>
            </form>
        </div>
    )
}

export default UserForm