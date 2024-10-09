import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("#fefefe");

  return (
    <>
      <div
        className="h-screen w-full duration-500 transition-all flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col gap-4 items-center">
          <button
            className="w-40 h-12 bg-black text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="w-40 h-12 bg-purple-900 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all"
            onClick={() => setColor("#581c87")}
          >
            Purple
          </button>
          <button
            className="w-40 h-12 bg-blue-800 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all"
            onClick={() => setColor("#1e40af")}
          >
            Blue
          </button>
          <button
            className="w-40 h-12 bg-red-700 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all"
            onClick={() => setColor("#b91c1c")}
          >
            Red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
