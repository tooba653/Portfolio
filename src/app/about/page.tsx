import Navbar from "../components/Navbar";  

export default function About() {
    return (
        <div>
           
            <h4 className="bg-pink-500 font-bold text-center">Simple Resume</h4>
            <Navbar />
            
         
            <h3 className="text-center font-bold text-red-600 p-4 text-lg bg-gray-300">ABOUT ME</h3>
            <div className="border-4 border-solid border-black m-20 p-6 w-[300px] leading-relaxed">
                <h4>Name:Tooba</h4>
                <h4>Father's name:Muhammad Yameen</h4>
                <h4>Nationality: Pakistani</h4>
                <h4>Date of birth: 1-Aug-2003</h4>
                <h4>Religion: Islam</h4>
            </div>
        </div>
    );
}
