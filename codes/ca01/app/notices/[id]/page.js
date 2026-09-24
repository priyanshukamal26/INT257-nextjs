import Link from 'next/link';

export const revalidate = 60;

async function getNotice(id) {
  const res = await fetch(`http://localhost:3000/api/notices/${id}`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function NoticePage({ params }) {
  const { id } = await params;
  const notice = await getNotice(id);

  if (!notice) {
    return <div className="rounded-lg bg-white p-6">Notice not found</div>;
  }

  return (
    <div className="rounded-lg bg-white p-6">
      <h2 className="mb-4 text-2xl font-semibold">Subject: {notice.subject}</h2>
      <p className="text-slate-700">Details: {notice.body}</p>
      <Link className="mt-6 inline-block text-blue-700 hover:underline" href="/">
        Back to notices
      </Link>
    </div>
  );
}