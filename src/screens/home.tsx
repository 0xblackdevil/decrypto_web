import "../App.css";
import heroImg from "../assets/home/hero-image.png";
// import union from "../assets/union.svg";

export default function Home() {
  return (
    <div>
      <div className="max-h-3/5 border-2 border-[#26242C] flex flex-col items-center text-center pt-281">
        <h1 className="w-2/3 text-5xl  tracking-wide font-base">
          Unlocking Blockchain's Potential <br />
          for Industry Transformation
        </h1>
        <p className="w-3/5 text-lg  tracking-wide mt-5 font-light">
          Unlock the power of blockchain to revolutionize your industry. Explore
          <br />
          limitless possibilities for innovation and growth.
        </p>
        <button className="bg-white py-2 px-5 rounded-lg text-black mt-5">
          Get Start
        </button>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}
