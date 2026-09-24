"use server";

export async function registerStudent(previousState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (!name || !email) {
    return { message: "Please enter both name and email." };
  }

  console.log("Student details:", { name, email });

  return {
    message: "Student registered successfully.",
    name,
    email,
  };
}