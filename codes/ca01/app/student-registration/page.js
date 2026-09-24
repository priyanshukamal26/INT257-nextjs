"use client";

import { useActionState } from "react";
import { registerStudent } from "./action";

export default function StudentRegistration() {
  const [result, formAction] = useActionState(registerStudent, null);

  return (
    <section className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-2xl font-semibold">Student Registration</h2>
      <p className="mb-6 text-slate-600">
        Enter the student details and submit the form.
      </p>

      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block font-medium">
            Student name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded border border-slate-300 p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded border border-slate-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          Register student
        </button>
      </form>

      {result && (
        <div className="mt-6 rounded bg-green-50 p-4 text-green-800">
          <p className="font-semibold">{result.message}</p>
          {result.name && <p>Name: {result.name}</p>}
          {result.email && <p>Email: {result.email}</p>}
        </div>
      )}
    </section>
  );
}