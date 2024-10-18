import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center bg-blue-300">
      <Link href="/" className="inline-block m-3">Home</Link>
      <Link href="/about" className="inline-block m-3">About</Link>
      <Link href="/skills" className="inline-block m-3">Skills</Link>
      <Link href="/education" className="inline-block m-3">Education</Link>
      <Link href="/contact" className="inline-block m-3">Contact</Link>
    </nav>
  );
};

export default Navbar;
