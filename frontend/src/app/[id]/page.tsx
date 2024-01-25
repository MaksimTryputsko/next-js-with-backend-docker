import { basicFetch } from "@/api/basicFetch";

interface User {
  id: string;
  name: string;
  email: string;
}

export default async function SingleUser({
  params,
}: {
  params: { id: string };
}) {
  const user = await basicFetch<User>(
    `http://localhost:4000/users/${params.id}`
  );
  return (
    <main className="flex items-center w-100 h-100">
      <div>
        <p>
          <span>{user.id}</span>
          {user.name}
        </p>
      </div>
    </main>
  );
}
