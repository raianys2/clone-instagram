import MenuItem from "./MenuItem";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { TiCompass } from "react-icons/ti";
import { ImFilm } from "react-icons/im";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { BsList } from "react-icons/bs";

import "./style.css";
import "../../style/global.css";
import ImgJpProfile from '../../assets/jp_loureiro.jpeg'
import LogoEscrito from "../../assets/Instagram_logo.png";
import { FaInstagram } from "react-icons/fa6";
import { IconContext } from "react-icons";
import Logo from "./Logo";

export default function LeftContent() {
  return (
    <div className="LeftContent">
      <div className="MenuLogo" id="logo">
        <Logo
          urlImg={LogoEscrito}
        />
        <FaInstagram />
      </div>

      <div className="box-menu">
        <div className="Menu">
          <ul>
            <IconContext.Provider value={{ size: "26px" }}>
              <MenuItem icon={<GoHomeFill />} text="Home" />
              <MenuItem icon={<FiSearch />} text="Search" />
              <MenuItem icon={<TiCompass />} text="Explore" />
              <MenuItem icon={<ImFilm />} text="Reels" />
              <MenuItem icon={<RiMessengerLine />} text="Messages" />
              <MenuItem icon={<AiOutlineHeart />} text="Notifications" />
              <MenuItem icon={<FiPlusSquare />} text="Create" />
            </IconContext.Provider>

            <li className="imgprofile">
             <img src={ImgJpProfile} alt="imgprofile" />
             <p>Profile</p>
             </li>


          </ul>
        </div>

        <div className="more">
          <IconContext.Provider value={{ size: "26px" }}>
            <MenuItem icon={<BsList />} text="More" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
