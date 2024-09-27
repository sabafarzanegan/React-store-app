import { Button } from "@/components/ui/button";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error) && error.status === 404) {
  }
  return (
    <>
      {isRouteErrorResponse(error) && error.status === 404 ? (
        <main className="flex flex-col items-center justify-center gap-y-4 mt-32 ">
          <h1 className="text-xl font-semibold ">این صفحه یافت نشد!</h1>
          <Button>
            <Link to="/">بازگشت به خانه</Link>
          </Button>
        </main>
      ) : (
        <div className="flex flex-col items-center justify-center gap-y-4 mt-32">
          <h1 className="text-xl font-semibold ">خطایی به وجود آمد.</h1>
          <Button>
            <Link to="/">بازگشت به صفحه اصلی</Link>
          </Button>
        </div>
      )}
    </>
  );
}

export default Error;
