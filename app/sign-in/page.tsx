// TODO:
// 1. Add toast notifications (e.g., sonner) for API success/error feedback instead of console.log/error
// 2. Extract onSubmit API call into a dedicated auth service (e.g., services/auth.service.ts)
// 3. Add rate limiting / debounce on form submit to prevent multiple rapid submissions
// 4. Replace empty fetch URL ("") with an env variable (e.g., process.env.NEXT_PUBLIC_API_URL)
// 5. Store returned auth token (JWT/session) in httpOnly cookie or secure storage after successful sign-in
// 6. Add "Forgot password?" and "Don't have an account? Sign up" links in CardFooter
// 7. Consider adding phone number formatting/masking (e.g., react-phone-number-input)

"use client";

// ─── React Core ───────────────────────────────────────────────────────────────
import { useState } from "react";

// ─── Third-Party: Form & Validation ───────────────────────────────────────────
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// ─── Third-Party: Icons ────────────────────────────────────────────────────────
import { HugeiconsIcon } from "@hugeicons/react";
import { ViewIcon, ViewOffSlashIcon } from "@hugeicons/core-free-icons";

// ─── UI Components ─────────────────────────────────────────────────────────────
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// ─── Schema & Types ────────────────────────────────────────────────────────────
const signInSchema = z.object({
  mobileNumber: z
    .string()
    .trim()
    .min(10, "Please enter a valid 10-digit phone number."),
  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long.")
    .max(15, "Password cannot exceed 15 characters."),
});

type SignInFormValues = z.infer<typeof signInSchema>;

// ─── Component ─────────────────────────────────────────────────────────────────
export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      mobileNumber: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  const handleSignIn: SubmitHandler<SignInFormValues> = async (formValues) => {
    console.log(formValues);

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to sign in.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4">
        <Card className="w-full max-w-md ">
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(handleSignIn)} noValidate>
            <CardContent>
              <FieldGroup className="space-y-4">
                <Field className="space-y-1.5">
                  <FieldLabel
                    htmlFor="mobileNumber"
                    className="text-sm font-medium"
                  >
                    Mobile number
                  </FieldLabel>
                  <div>
                    <Input
                      id="mobileNumber"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      className="h-11"
                      maxLength={15}
                      {...register("mobileNumber")}
                    />
                  </div>

                  {errors?.mobileNumber?.message && (
                    <FieldError errors={[errors?.mobileNumber]} />
                  )}
                </Field>

                <Field className="space-y-1.5">
                  <FieldLabel
                    htmlFor="password"
                    className="text-sm font-medium"
                  >
                    Password
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      id="password"
                      type={isPasswordVisible ? "text" : "password"}
                      autoComplete="current-password"
                      className="h-11 pr-10"
                      maxLength={15}
                      {...register("password")}
                    />
                    <button
                      type="button"
                      aria-label={
                        isPasswordVisible ? "Hide password" : "Show password"
                      }
                      aria-pressed={isPasswordVisible}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      <HugeiconsIcon
                        icon={isPasswordVisible ? ViewIcon : ViewOffSlashIcon}
                        size={20}
                        color="currentColor"
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>

                  {errors?.password?.message && (
                    <FieldError errors={[errors?.password]} />
                  )}
                </Field>
              </FieldGroup>
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full h-11"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
