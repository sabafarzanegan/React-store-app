import Header from "@/components/main/Header";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <div className="container  mx-auto px-6">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
