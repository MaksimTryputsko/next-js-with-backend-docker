import { basicFetch } from "@/api/basicFetch";
import { CreateUser } from "@/compoents/CreateUser";

interface User {
  id: string;
  name: string;
  email: string;
}

export default async function Home() {
  const users = await basicFetch<User[]>("http://localhost:4000/users");
  return (
    <main className="flex items-center w-100 h-100">
      <div>
        <ul className="list-none md:list-disc">
          {users.map((user) => (
            <li key={user.id} className="text-3xl font-bold underline">
              {user.name}
            </li>
          ))}
        </ul>
        <CreateUser />
      </div>
    </main>
  );
}
