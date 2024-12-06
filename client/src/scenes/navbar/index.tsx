import PixIcon from "@mui/icons-material/Pix";
import { Link, NavLink } from "react-router-dom";
type Props = {};

const Navbar = (_props: Props) => {
  return (
    <div className="text-gray-300 flex justify-between items-center gap-2">
      <div className="flex gap-2">
        <PixIcon/>
        <p className="text-[16px]">FinanceTracker</p>
      </div>
      <div className="flex gap-2">
        <NavLink className={({isActive})=>(isActive ? 'text-gray-200' : "text-gray-500")} to={"/"}>Dashboard</NavLink>
        <NavLink className={({isActive})=>(isActive ? 'text-gray-200' : "text-gray-500")} to={"/prediction"}>Prediction</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
