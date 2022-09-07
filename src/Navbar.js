import {NavigationBar, Logo, NavLink, NavMenu
} from './Style'

const Navbar = () => {
  return  (
    <NavigationBar>
    <Logo>Blog Site</Logo>
    <NavMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">New Blog</NavLink>
    </NavMenu>
    </NavigationBar>
    );
};

export default Navbar;