import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from "./pages";
import { Loader as LandingLoader } from "./pages/Landing";
import { Loader as ProductLoader } from "./pages/Products";
import { Loader as Singleproduct } from "./pages/SingleProduct";
import { Loader as getOrder } from "./pages/Orders";
import { action as registerUser } from "./pages/Register";
import { action as Loginuser } from "./pages/Login";
import { action as checkoutAction } from "./pages/Checkout";
import { store } from "./Store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: LandingLoader,
        },
        { path: "products", element: <Products />, loader: ProductLoader },
        {
          path: "products/:id",
          element: <SingleProduct />,
          loader: Singleproduct,
        },
        { path: "cart", element: <Cart /> },
        { path: "about", element: <About /> },
        { path: "landing", element: <Landing /> },
        { path: "Error", element: <Error /> },
        {
          path: "checkout",
          element: <Checkout />,
          action: checkoutAction(store),
        },
        { path: "orders", element: <Orders />, loader: getOrder(store) },
      ],
    },
    { path: "/login", element: <Login />, action: Loginuser(store) },
    { path: "/register", element: <Register />, action: registerUser },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
