import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageTitleUpdater from "./Components/TitleUpdater/PageTitleUpdater";

const Layout = () => {
  const location = useLocation();
  const isChat = location.pathname === "/c";

  return (
    <div className="overflow-x-hidden w-full">
      <PageTitleUpdater />
      {!isChat && <Header />}
      <Outlet />
      {!isChat && <Footer />}
    </div>
  );
};

export default Layout;
