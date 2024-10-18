import Navbar from "../components/Navbar"; 

export default function Skills() {
    return (
        <div>
            <h4 className="bg-pink-500 font-bold text-center">Simple Resume</h4>
            <Navbar /> 
            <h3 className="text-center font-bold text-red-600 p-4 text-lg bg-gray-300">SKILLS</h3>
            <div className="border-4 border-solid border-black m-20 p-6 w-[300px] leading-relaxed">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    );
}
