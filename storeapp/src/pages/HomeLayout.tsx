import Header from "@/components/main/Header";
import Loading from "@/components/main/Loading";
import { Outlet, useNavigation } from "react-router-dom";

function HomeLayout() {
  const navigate = useNavigation();
  const isPageLoading = navigate.state;

  return (
    <>
      <div className="mx-auto px-6">
        <Header />
        {isPageLoading === "loading" ? <Loading /> : <Outlet />}
      </div>
    </>
  );
}

export default HomeLayout;
