import Navbar from "./Navbar";

const Layout = ({ children, logo }) => {
  return (
    <div>
      <Navbar logo={logo} />
      {children}
    </div>
  );
};

export default Layout;
