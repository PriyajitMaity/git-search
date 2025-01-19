import { useEffect,useState } from "react";
import ListItems from "./components/ListItems";
import Navbar from "./components/Navbar";
import axios from "axios";

interface User{
  id: number;
  avatar_url: string;
  login: string;
  type: string;
}

const App = () => {
  const [user, setUser] =useState<User | null>(null);
  const [userName, setUserName] = useState<string>("");



  const fetchData =async() =>{
    try {
      const { data } = await axios.get(`https://api.github.com/users/${userName}`);
      // console.log(data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() =>{
    fetchData();
  }, [])


  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="bg- h-2xl w-2xl bg-white m-14 p-8">
        <div>
          <h1 className="font-serif text-zinc-900 text-[30px] space-x-2 ">Search from the Github</h1>
          <div className="flex my-4">
            <span className="flex border-zinc-400 border-[1px] w-1/2 h-[50px] rounded-lg  active:border-blue-500">
              <input
                type="text"
                className="w-full rounded-lg px-4"
                placeholder="Search from github"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </span>
            <button className="rounded-lg bg-blue-500 w-[110px] mx-4 text-xl text-white"
              onClick={fetchData}
            >
              submit
            </button>
          </div>
        </div>
        <div className="my-12 ">
          {
            user ? <ListItems user ={user} /> : <span className="text-2xl font-bold">Not Found</span>
          }
          
        </div>
      </div>
    </div>
  );
};
export default App;
