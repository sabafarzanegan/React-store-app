import Header from "@/components/main/Header";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <div className="container mx-auto px-2">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
