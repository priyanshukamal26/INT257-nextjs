const notices=[
    {id: "1", subject: "New Admissions", body: "Inviting new admissions for 2027"},
    {id: "2", subject: "Holiday Notice", body: "College closed Friday." },
    {id: "3", subject: "Library Notice", body: "Library closes at 6 PM." }
];

export async function GET() {
    return Response.json(notices);
}