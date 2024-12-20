import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {TrendingUp} from "lucide-react"

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
     
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      
      {isOpen && (
        <div
          className="fixed gap-[100px] inset-0 bg-white text-black flex flex-col items-center justify-center z-50"
          style={{ height: "100vh", width: "100vw" }}
          
        >
          <div className="flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold leading-none">Prince Trades</h3>
              <p></p>
          </div>
          <ul className="space-y-6 text-center">
            
            {Menus.map(({ name, link }) => (
              <li key={name}>
                <Link
                  to={link}
                  className="text-xl"
                  onClick={toggleDrawer}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
