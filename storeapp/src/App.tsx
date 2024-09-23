import { Button } from "./components/ui/button";
import { useAppSelector } from "./Hook";
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
  const { name } = useAppSelector((state) => state.userState);

  return (
    <>
      <h1 className="text-xl text-red-400">app</h1>
      <Button>submit</Button>
    </>
  );
}

export default App;
