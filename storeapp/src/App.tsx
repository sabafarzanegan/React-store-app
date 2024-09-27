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
        },
        { path: "products", element: <Products /> },
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
