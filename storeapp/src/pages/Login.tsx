import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/lib/Customfetch";
import { ReduxStore } from "../Store";
import {
  ActionFunction,
  Form,
  Link,
  redirect,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "@/features/user/userSlice";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      store.dispatch(loginUser({ username, jwt }));
      toast({ description: "ورود شما با موفقیت انجام شد" });
      return redirect("/");
    } catch (error) {
      console.log(error);
      toast({ description: "ورود شما با شکست مواجه" });
      return null;
    }
  };

function Login() {
  const { state } = useNavigation();
  const isSubmmiting = state === "submitting";
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-[400px] ">
        <CardHeader>
          <CardTitle className="text-center">ثبت نام</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post" className="space-y-4">
            <div>
              <Label htmlFor="email">ایمیل</Label>
              <Input name="identifier" id="email" />
            </div>
            <div>
              <Label htmlFor="password">رمز عبور</Label>
              <Input id="password" name="password" />
            </div>

            <Button type="submit" className="w-full mt-4">
              {isSubmmiting ? "در حال ارسال" : "ورود"}
            </Button>
            <p className="text-center mt-4">
              آیا حساب کاربری ندارید؟
              <Button type="button" asChild variant="link">
                <Link to="/register">ثبت نام</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Login;
