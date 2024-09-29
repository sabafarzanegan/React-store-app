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
        { path: "products/:id", element: <SingleProduct /> },
        { path: "cart", element: <Cart /> },
        { path: "about", element: <About /> },
        { path: "landing", element: <Landing /> },
        { path: "Error", element: <Error /> },
        { path: "checkout", element: <Checkout /> },
        { path: "orders", element: <Orders /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
