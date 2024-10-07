import {
  ActionFunction,
  Form,
  Link,
  redirect,
  useNavigation,
} from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { customFetch } from "../lib/Customfetch";
// import { toast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/auth/local/register", data);
    toast({ description: "ثبت نام با موفقیت انجام شد" });
    return redirect("/login");
  } catch (error) {
    console.log(error);

    const errorMsg =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : "ثبت نام با شکست مواجه شد";

    toast({ description: errorMsg });
    console.log(errorMsg);

    return null;
  }
};

function Register() {
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
              <Label htmlFor="usernamr">نام کاربری</Label>
              <Input name="username" id="username" />
            </div>
            <div>
              <Label htmlFor="email">ایمیل</Label>
              <Input name="email" id="username" />
            </div>
            <div>
              <Label htmlFor="password">رمز عبور</Label>
              <Input id="password" name="password" />
            </div>

            <Button type="submit" className="w-full mt-4">
              {isSubmmiting ? "در حال ارسال" : "ثبت نام"}
            </Button>
            <p className="text-center mt-4">
              آیا حساب کاربری دارید؟
              <Button type="button" asChild variant="link">
                <Link to="/login">ورود</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
