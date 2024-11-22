import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
import Divider from "./components/Divider";
import Glass from "./components/Glass";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";

function App() {
  return (
    <div className="">
      <div className="flex flex-col items-center w-full py-[2rem] scroll-shadow">
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
      </div>

      <Divider />

      <div className="flex flex-col items-center w-full py-[2rem] scroll-shadow">
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
      </div>

      <Divider />

      <div className="flex flex-col items-center w-full py-[2rem] scroll-shadow space-y-[1rem] ">
        <p className="font-bold text-[1.6rem] ">Chapter Three</p>
        <Glass />

        <p className="font-medium text-[1.2rem] my-[1rem] ">
          Transitions annd animations
        </p>
        <div className="p-6 bg-gray-200 rounded-lg transition-all duration-500 ease-in-out hover:bg-gray-300 hover:rotate-3 hover:shadow-xl">
          Hover over this box
        </div>

        <button className="px-6 py-3 bg-blue-500 text-white rounded-md animate-glow">
          Glowing Button
        </button>

        <p className="font-medium text-[1.2rem] my-[1rem] ">Interactivity</p>

        <input
          class="border-2 border-gray-300 focus:border-blue-500 rounded py-2 px-3"
          type="text"
          placeholder="Focus me"
        />

        <p className="font-medium text-[1.2rem] my-[1rem] ">Pseudo Elements</p>
        
        <button class="relative inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 before:content-['→'] ">
          Hover Me
        </button>
        <button class="relative inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 after:content-['→'] ">
          Hover Me
        </button>

        <h1 class="text-2xl font-bold relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mt-2">
          Section Title
        </h1>
      </div>

      <div className="h-[6rem] " />
    </div>
  );
}

export default App;
