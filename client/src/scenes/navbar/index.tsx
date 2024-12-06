import PixIcon from "@mui/icons-material/Pix";
import { NavLink } from "react-router-dom";
type Props = {};

const Navbar = (_props: Props) => {
  return (
    <div className="text-gray-300 flex justify-between items-center gap-2 fixed z-10 px-[40px] py-4 w-full bg-opacity-30 bg-black">
      <div className="flex gap-2">
        <PixIcon/>
        <p className="text-[16px]">FinanceTracker</p>
      </div>
      <div className="flex items-center gap-2">
        <NavLink className={({isActive})=>(isActive ? 'text-gray-200 text-[16px]' : "text-gray-500")} to={"/"}>Dashboard</NavLink>
        <NavLink className={({isActive})=>(isActive ? 'text-gray-200 text-[16px]' : "text-gray-500")} to={"/prediction"}>Prediction</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
