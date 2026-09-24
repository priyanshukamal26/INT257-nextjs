"use client"

import React, { useActionState } from "react"
import StoreImage from "./action"

export default function  UploadImage() {
    const [imagedata, actionForm]=useActionState(StoreImage, null);
    return (
        <div>
            <form className="border p-3" action={actionForm} encType="multipart/form-data">
                <input type="text"></input>
                <input type="file" name="image"></input>
                <input type="submit" name="btn" className="border p-2"></input>
            </form>
            {
                imagedata && (
                    <img src={"/uploads/" + imagedata.fileName} width={500}/>
                )
            }
        </div>
    )
}