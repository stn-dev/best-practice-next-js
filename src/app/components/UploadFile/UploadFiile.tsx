import React from 'react'
import style from './uploadFile.module.scss'

type Props = {
    file: File
}
function UploadFiile() {

    return (
        <>
            <div className={style.container} >
                <label htmlFor="image">
                    <img src="/defaultUserImage.png" alt="" />
                </label>
                <input type="file" name="image" id="image" hidden />
            </div>
        </>
    )
}

export default UploadFiile