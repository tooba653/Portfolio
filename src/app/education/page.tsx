import Navbar from "../components/Navbar"; 

export default function Education() {
    return (
        <div>
            <h4 className="bg-pink-500 font-bold text-center">Simple Resume</h4>
            <Navbar />
            <h3 className="text-center font-bold text-red-600 p-4 text-lg bg-gray-300">EDUCATION</h3>
            <div className="border-4 border-solid border-black m-20 p-6 w-[600px] leading-relaxed">
                <h4>
                    1. Matriculation in Science from Board of Seconadary Education Karachi with 88% <br />
                    2. Intermediate in commerce from Board of Intermediate Education Karachi with 70.14% <br />
                    3. Bachelors in Education from Metropolitan University Karachi.(ongoing).
                </h4>
            </div>
        </div>
    );
}
