import Navbar from "./components/Navbar"; 

export default function HomePage() {
  return (
    <div>
      <h4 className="bg-pink-500 font-bold text-center">Simple Resume</h4>
      <Navbar />

      <h3 className="text-center font-bold text-red-600 p-4 bg-gray-300">Home Page</h3>
      <h1 className="pl-40 text-center font-bold text-blue-900 text-7xl">===WELCOME TO MY PORTFOLIO===</h1>
    </div>
  );
}
