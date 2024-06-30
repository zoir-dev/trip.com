import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { useTranslations } from "next-intl"
import { Link } from "@/navigation"
// import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(5, { message: "Password must be at least 5 characters" }),
})

export function Auth({ type }: { type?: 'login' | 'registration' | 'reset' }) {
  const t = useTranslations("auth")

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <div className="flex items-center justify-center w-full h-[80vh] px-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            {t(`Sign In`)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
              {forms.filter(({ name }) => {
                switch (type) {
                  case 'login':
                    return !name.includes('username')
                  case 'reset':
                    return name.includes('email')
                  default:
                    return true
                }
              }).map(({ name, type, placeholder }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{placeholder}</FormLabel>
                      <FormControl>
                        <Input type={type ?? 'text'} placeholder={t(placeholder)} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="submit" className="w-full">{t("Submit")}</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="pb-4 -mt-4 flex flex-col gap-2 justify-start items-start">
          <p className="text-sm text-muted-foreground">
            {t(type === 'registration' ? "Already have an account" : "Don't have an account")}
            {type === 'registration' ?
              <Link href='/login' className="font-medium text-primary pl-1 hover:underline">
                {t("Sign In")}
              </Link>
              :
              <Link href='/registration' className="font-medium text-primary pl-1 hover:underline">
                {t("Sign Up")}
              </Link>
            }
          </p>
          {type === 'login' && <p className="text-sm text-muted-foreground">
            {t("Forgot password?")}
            <Link href='/reset' className="font-medium pl-1 text-primary hover:underline">
              {t("Reset")}
            </Link>
          </p>}
        </CardFooter>
      </Card>
    </div>
  )
}

const forms: { name: "username" | "email" | "password"; placeholder: string, type?: 'email' | 'password' }[] = [
  {
    name: 'username',
    placeholder: 'Username'
  },
  {
    name: 'email',
    placeholder: 'Email',
    type: 'email'
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password'
  }
]
