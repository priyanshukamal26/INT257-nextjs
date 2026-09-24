"use server"

import React from "react";

import fs from "fs";
import path from "path";

export default async function StoreImage(previousState, FormData) {
    const image=FormData.get("image");

    const bytes=await image.arrayBuffer();
    const buffer=Buffer.from(bytes);
    const filePath=path.join(process.cwd(),
    "app",
    "uploads",
    image.name);

    fs.writeFileSync(filePath, buffer);
    return {fileName: image.name};

}