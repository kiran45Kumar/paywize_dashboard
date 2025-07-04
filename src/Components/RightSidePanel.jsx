
import React from 'react';
import { FiPhone, FiVideo, FiMoreHorizontal, FiDownload, FiSmile, FiMic, FiPaperclip } from 'react-icons/fi';

const RightSidebar = () => {
  return (
    <aside className="w-full max-w-sm bg-white p-6 rounded-3xl flex flex-col">
  
      <div className="bg-gray-100 p-6 rounded-3xl text-center mb-6">
        <div className="relative inline-block">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Megan Norton"
            className="w-20 h-20 rounded-full object-cover"
          />
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </div>
        <h3 className="mt-3 font-semibold text-lg">Megan Norton</h3>
        <p className="text-gray-400 text-sm">@megnorton</p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-white p-3 rounded-full shadow text-gray-700"><FiPhone size={18} /></button>
          <button className="bg-white p-3 rounded-full shadow text-gray-700"><FiVideo size={18} /></button>
          <button className="bg-white p-3 rounded-full shadow text-gray-700"><FiMoreHorizontal size={18} /></button>
        </div>
      </div>

      <h4 className="text-center text-lg font-medium mb-4 border-t pt-4">Activity</h4>
      <div className="space-y-6 overflow-y-auto flex-1">
  
        <div className="flex gap-3">
          <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Floyd Miles" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="flex justify-between text-sm">
              <p className="font-medium">Floyd Miles</p>
              <span className="text-gray-400">10:15 AM</span>
            </div>
            <p className="text-gray-500 text-sm">Commented on <span className="text-blue-600">Stark Project</span></p>
            <div className="bg-blue-100 text-gray-700 text-sm p-3 rounded-xl mt-2 relative">
              Hi! Next week we'll start a new project. I'll tell you all the details later
              <span className="absolute bottom-2 right-2">👍</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Guy Hawkins" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="flex justify-between text-sm">
              <p className="font-medium">Guy Hawkins</p>
              <span className="text-gray-400">10:15 AM</span>
            </div>
            <p className="text-gray-500 text-sm">Added a file to <span className="text-blue-600">7Heros Project</span></p>
            <div className="bg-blue-50 text-gray-800 p-3 mt-2 rounded-xl flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">Homepage.fig</p>
                <p className="text-xs text-gray-500">13.4 Mb</p>
              </div>
              <FiDownload className="text-blue-500" size={18} />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <img src="https://randomuser.me/api/portraits/women/47.jpg" alt="Kristin Watson" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="flex justify-between text-sm">
              <p className="font-medium">Kristin Watson</p>
              <span className="text-gray-400">10:15 AM</span>
            </div>
            <p className="text-gray-500 text-sm">Commented on <span className="text-blue-600">7Heros Project</span></p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3">
        <FiPaperclip className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Write a message"
          className="flex-1 bg-transparent outline-none text-sm"
        />
        <FiSmile className="text-gray-400" size={18} />
        <FiMic className="text-gray-400" size={18} />
      </div>
    </aside>
  );
};

export default RightSidebar;