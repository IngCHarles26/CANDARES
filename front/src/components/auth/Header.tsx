import { useSelector } from "react-redux";
import { images } from "../../assets/images/images";
import { TypeStore } from "../../redux/store";

function Header() {
  const header = useSelector((st:TypeStore)=>st.header)

  return (
    <header 
      className="bg-indigo-600 flex justify-between items-center p-2 h-20
      md:h-32 md:p-5">
      <div 
        className="flex items-center gap-3 h-full">
        <img src={images.logo} alt="logo-candares" className="h-full" />
        <h1 className="text-2xl  text-white md:text-5xl">CAND
          <span className="font-extrabold">ARES</span>
        </h1>
      </div>

      <div>
        <p className="text-white text-2xl font-bold md:text-4xl">{header}</p>
      </div>
    </header>
  );
}

export default Header;