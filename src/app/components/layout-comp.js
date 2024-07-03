// src/app/components/Layout.js
import Navbar from './navbar.js';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
