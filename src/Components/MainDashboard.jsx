import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import {
  AiOutlineClockCircle,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineTerminal } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptions } from "react-icons/sl";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const MainDashboard = () => {
  const chartData = {
    labels: ["01", "02", "03", "04", "05", "06", "07"],
    datasets: [
      {
        label: "This Month",
        data: [7, 6.5, 7, 5, 8, 9, 10],
        borderColor: "#3b82f6",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Last Month",
        data: [6, 5.5, 6, 4.5, 6, 7, 8],
        borderColor: "#f97316",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 2,
          callback: (val) => `${val}h`,
        },
      },
    },
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">Hello, Margaret</h1>
          <p className="text-gray-500">
            Track team progress here. You almost reach a goal!
          </p>
        </div>
        <p className="text-sm text-gray-500">16 May, 2023</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10 border-y">
        <div className="p-4 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <FiThumbsUp /> Finished
          </p>
          <p className="text-xl font-bold">
            18 <span className="text-green-500 text-sm">+8 tasks</span>
          </p>
        </div>
        <div className="p-4 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <AiOutlineClockCircle /> Tracked
          </p>
          <div className="flex justify-center">
            <p className="text-xl font-bold flex items-center gap-1">
              31h
              <span className="text-red-500 text-sm flex items-center gap-1">
                <AiOutlineArrowDown />6 hours
              </span>
            </p>
          </div>
        </div>
        <div className="p-4 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <BsGraphUpArrow /> Efficiency
          </p>
          <div className="flex justify-center">
            <p className="text-xl font-bold flex items-center gap-1">
              93%{" "}
              <span className="text-green-500 text-sm flex items-center gap-1">
                <AiOutlineArrowUp /> 12%
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Performance</h2>
          <button className=" bg-gray-200 border-0 rounded-2xl flex items-center gap-1 text-sm border rounded px-3 py-1">
            01–07 May <IoIosArrowDown />
          </button>
        </div>
        <div className="h-64">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">Current Tasks</h2>
            <span className=" text-gray-500">|</span>
            <span className="text-sm text-gray-500">Done 30%</span>
          </div>
          <button className="px-4 py-1 flex border items-center border-gray-200 text-sm text-gray-600 rounded-full hover:bg-gray-50">
            Week <IoIosArrowDown />
          </button>
        </div>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <GoGraph />
              </span>

              <p className="font-medium">Product Review for UI8 Market</p>
            </div>
            <div className="flex justify-end items-center gap-10">
              <p className="text-xs text-gray-500">In progress</p>
              <div className="text-sm text-gray-500">4h</div>
              <SlOptions />
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                <RiSearch2Line />
              </span>

              <p className="font-medium">UX Research for Product</p>
            </div>
            <div className="flex justify-end items-center gap-10">
              <p className="text-xs text-gray-500">Onhold</p>
              <div className="text-sm text-gray-500">8h</div>
              <SlOptions />
            </div>
          </li>
          <li className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <HiOutlineTerminal />
              </span>

              <p className="font-medium">App design and development</p>
            </div>
            <div className="flex justify-evenly items-center gap-10">
              <p className="text-xs text-gray-500">Done</p>
              <div className="text-sm text-gray-500">32h</div>
              <SlOptions />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainDashboard;
