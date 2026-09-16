"use server";

export async function SignUpData(previousState, formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const cpassword = formData.get('cpassword');

    if(!name) {
        return {message: "Enter username"};
    }

    if(!email) {
        return {message: "Enter email"};
    }

    if(!password) {
        return {message: "Enter password"};
    }

    if(!cpassword) {
        return {message: "Enter cpassword"};
    }

    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(cpassword);

    return { name, password, message:"You are SignedUp"};
}