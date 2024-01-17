import logo from "../assets/logos/logo.svg";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center max-w-screen py-3 bg-[#0E0C15]">
      <div>
        <img src={logo} alt="" width={150} />
      </div>

      <nav>
        <ul className="flex gap-8 text-slate-400 font-thin">
          {["About", "Service", "Academy", "Contact"].map((item, index) => (
            <li className="text-base">{item}</li>
          ))}
        </ul>
      </nav>

      <button className="bg-white rounded-lg text-black px-5 py-3">
        Request A Call Back
      </button>
    </header>
  );
}
