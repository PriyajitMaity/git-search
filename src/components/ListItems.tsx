import { FC } from "react";

interface User {
  id: number;
  avatar_url: string;
  login: string;
  type: string;
}
interface Items {
  user: User;
}

const ListItems: FC<Items> = ({ user }) => {
  return (
    <div>
      <table className="w-full">
        <thead className="border-zinc-400 border-b-[1px] text-base p-8">
          <tr className="text-left">
            <th>Avatar</th>
            <th>Login</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody className=" text-base m-8">
          <tr className="mt-10 border-zinc-400 border-b-[1px]" key={user.id}>
            <td>
              <img className="h-[50px] w-[50px] rounded-full" src={user.avatar_url} alt={user.login} />
            </td>
            <td>{user.login}</td>
            <td>{user.type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListItems;
