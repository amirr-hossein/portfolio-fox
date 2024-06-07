import Image from "next/image";
import Fox from "@/../public/img/FOX.png"
const Navbar = () => {
  return <>
    <div className="">
        <Image src={Fox} alt="logo for navbar" placeholder="blur" sizes="100%"/>
    </div>
  </>;
};
export default Navbar;
