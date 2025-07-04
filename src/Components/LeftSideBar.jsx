import {
  FiHome,
  FiGrid,
  FiUsers,
  FiSettings,
  FiInfo,
  FiMinus
} from 'react-icons/fi';
import { HiClipboardList } from "react-icons/hi";
import { AiOutlinePlus } from 'react-icons/ai';

export default function LeftSideBar() {
  return (
    <aside className="w-full h-full bg-white flex flex-col justify-between p-6 rounded-tr-3xl rounded-br-3xl">

      <div>
        <div className="mb-10 flex items-center space-x-2">
          <div className="bg-black w-6 h-6 rounded-full" />
          <h1 className="text-xl font-bold">logip</h1>
        </div>

        <nav>
          <ul className="space-y-6 text-gray-500 text-sm font-medium">
            <li className="flex items-center gap-3">
              <FiHome size={18} />
              <span>Home</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center gap-3">
                <FiGrid size={18} />
                Projects
              </span>
              <span className="bg-gray-100 rounded-full p-1">
                <AiOutlinePlus size={12} />
              </span>
            </li>
            <li className="flex items-center justify-between text-black font-semibold">
              <span className="flex items-center gap-3">
                <HiClipboardList size={18} />
                Tasks
              </span>
              <span className="bg-gray-100 rounded-full p-1">
                <AiOutlinePlus size={12} />
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiUsers size={18} />
              <span>Team</span>
            </li>
            <li className="flex items-center gap-3">
              <FiSettings size={18} />
              <span>Settings</span>
            </li>
          </ul>
        </nav>


        <div className="mt-10 bg-blue-50 p-5 rounded-2xl text-center">
          <h2 className="font-semibold text-sm text-gray-900">Upgrade to Pro</h2>
          <p className="text-xs text-gray-500 mt-1">Get 1 month free and unlock</p>
          <button className="mt-3 px-4 py-1.5 text-sm rounded-full bg-blue-500 text-white shadow-sm hover:bg-blue-600">
            Upgrade
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <FiInfo size={16} />
          <span>Help & information</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMinus size={16} />
          <span>Log out</span>
        </div>
      </div>
    </aside>
  );
}
