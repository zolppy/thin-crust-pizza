import NavList from "@/app/components/nav/NavList";
import NavItem from "@/app/components/nav/NavItem";
import { NavItemEnum } from "@/utils/enums/navItem";

const Nav = () => {
    return (
        <nav className="h-[52px] hidden bg-black opacity-60 fixed w-full top-0 md:flex items-center lg:hover:opacity-100 z-10">
            <NavList>
                <NavItem to={NavItemEnum.Home}>home</NavItem>
                <NavItem to={NavItemEnum.Menu}>menu</NavItem>
                <NavItem to={NavItemEnum.About}>about</NavItem>
                <NavItem to={NavItemEnum.Contact}>contact</NavItem>
            </NavList>
        </nav>
    );
};

Nav.displayName = "Nav";

export default Nav;
