import { Link } from "react-router-dom"; 

export default function DesktopMenu({ menu }) {
  return (
    <li className="group/link" key={menu.name}>
      <Link
        to={menu.link} 
        className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"
      >
        {menu.name}
      </Link>
    </li>
  );
}
