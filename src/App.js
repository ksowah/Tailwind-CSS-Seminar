import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import Divider from "./components/Divider";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

function App() {
  return (
    <div className="">
      {/* <div className="flex flex-col items-center w-full py-[2rem] scroll-shadow">
        <p className="font-bold text-[1.6rem] ">Chapter One</p>

        <p className="font-medium text-[1.2rem] ">Grids</p>
        <div className="grid grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <Divider />

        <p className="font-medium text-[1.2rem] ">Flex Box</p>
        <div className="flex flex-wrap gap-4 px-20">
          <Card />
          <Card />
        </div>

        <Divider />

        <p className="font-medium text-[1.2rem] ">Dynamic spacing with grid</p>
        <div class="grid grid-cols-4 gap-4 my-[1rem] ">
          <Sidebar />
          <MainContent />
        </div>

        <Divider />
        <p className="font-medium text-[1.2rem] ">Custom Grid Column Sizing</p>
        <div class="grid grid-cols-[100px,2fr,1fr] gap-4">
          <div class="bg-gray-100 p-2">Fixed</div>
          <div class="bg-gray-200 p-2">Flexible</div>
          <div class="bg-gray-300 p-2">Flexible</div>
        </div>

        <Divider />

        <p className="font-medium text-[1.2rem] ">Aspect Ratio</p>
        <div className="w-full max-w-md mx-auto">
          <Video />
        </div>
      </div> */}

      <Divider />

      {/* <div className="flex flex-col items-center w-full py-[2rem] scroll-shadow">
        <p className="font-bold text-[1.6rem] ">Chapter Two</p>

        <p className="font-medium text-[1.2rem] ">Dynamic Breakpoints</p>
        <div className="grid tablet:grid-cols-2 desktop:grid-cols-3 ultrawide:grid-cols-4 gap-4">
          <div className="w-[8rem] bg-blue-500">Item 1</div>
          <div className="w-[8rem] bg-green-500">Item 2</div>
          <div className="w-[8rem] bg-red-500">Item 3</div>
          <div className="w-[8rem] bg-yellow-500">Item 4</div>
        </div>

        <Divider />
        <h1 className="text-fluid-lg font-bold">Welcome to Fluid Layouts</h1>
        <div className="bg-blue-500 p-fluid">
          This section has fluid padding.
        </div>

        <Boxes />

        <Divider />

        <Dashboard />

        <Divider />
      </div> */}

      <Divider />

      <div className="flex flex-col items-center w-full py-[2rem] scroll-shadow">
        <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-blue-500 to-purple-700">
          <div className="relative w-80 p-6 bg-white/30 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Glassmorphism
            </h2>
            <p className="text-white/80 mb-4">
              This card uses a frosted-glass effect achieved with Tailwind CSS.
            </p>
            <button className="px-4 py-2 bg-white/20 text-white rounded-md border border-white/10 hover:bg-white/30 transition">
              Click Me
            </button>
          </div>
        </div>
      </div>

      <div className="h-[6rem] " />
    </div>
  );
}

export default App;
