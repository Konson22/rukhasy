import { Link } from "react-router-dom";
import { FiChevronDown, FiUser } from "react-icons/fi";


export default function Appbar() {
  return (
    <nav className="flex items-center bg-sky-500 text-white px-[5%]">
      <div className="text-2xl font-bold mr-8">Admin System</div>
      <div className="flex-1">
        <ul className="flex">
          {linksData.map(link => (
            <li className="" key={link.text}>
              <Link className="block px-5 py-4 hover:bg-green-500 h-full" to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <div className="flex items-center px-4">
          <span className="text-2xl border rounded-full p-1">
            <FiUser />
          </span>
          <span className="block mx-2">Konson</span>
          <FiChevronDown />
        </div>
      </div>
    </nav>
  )
}

const linksData = [
  {text:'Dashboard', path:'/'},
  {text:'Students', path:'/'},
  {text:'Finance', path:'/'},
  {text:'Staffs', path:'/'},
]
