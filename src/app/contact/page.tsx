import Navbar from "../components/Navbar"; // Adjust the import path

export default function Contact() {
    return (
        <div>
            <h4 className="bg-pink-500 font-bold text-center">Simple Resume</h4>
            <Navbar />

            <h3 className="text-center font-bold text-red-600 p-4 text-lg bg-gray-300">CONTACT US</h3>
            <div className="border-4 border-solid border-black m-20 p-6 w-[300px] leading-relaxed">
                <h4>Email: yameentooba653@gmail.com</h4>
                <h4>Phone Numbers: 03452168078 | 03211230384</h4>
            </div>
        </div>
    );
}
