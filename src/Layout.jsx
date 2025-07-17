import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PageTitleUpdater from "./Components/TitleUpdater/PageTitleUpdater";

const Layout = () => {

  return (
    <div className="overflow-x-hidden w-full">
      <PageTitleUpdater />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
