"use server";

export async function LoginData(previousState, formData) {
    const name = formData.get('name');
    const password = formData.get('password');

    if(!name) {
        return {message: "Enter username"};
    }

    if(!password) {
        return {message: "Enter password"};
    }

    if(name=='admin' && password=='1234') {
        return {name, password, message:"You are SignedUp"}
    }
    else {
        return {
            message: "Enter correct name and password!"
        }
    }
}