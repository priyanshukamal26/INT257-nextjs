import Link from 'next/link';

async function getNotices(){
  const res=await fetch('http://localhost:3000/api/notices');

  if(!res.ok) return [];

  return res.json();
}

export default async function Home() {
  const notices = await getNotices();
  return (
    <div className="space-y-6">
      <section className="rounded-lg bg-white p-6">
        <h2 className="mb-2 text-2xl font-semibold">Welcome</h2>
        <p className="text-slate-600">
          Find the latest updates and important information from the college.
        </p>
      </section>

      <section className="rounded-lg bg-white p-6">
        <h2 className="mb-4 text-2xl font-semibold">Latest Notices</h2>
        {notices.length === 0 ? (
          <p className="text-slate-600">No notices available right now.</p>
        ) : (
          <ul>
            {notices.map((n) => (
              <li className="border-b pb-3" key={n.id}>
                <Link className="text-blue-700 hover:underline" href={`/notices/${n.id}`}>
                  {n.subject}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}