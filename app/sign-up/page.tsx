"use client";

/**
 * TODO (Production Checklist):
 * 1. Replace fetch("") with env variable — process.env.NEXT_PUBLIC_API_URL
 * 2. Remove console.log(formData) before deploying
 * 3. Replace console.error with a toast notification or global error state
 * 4. Add phone number regex in schema to reject non-numeric characters
 * 5. Add password strength regex (uppercase, number, special char)
 * 6. Add cross-field DOB validation — reject future dates & enforce minimum age (e.g. 13+)
 * 7. Redirect to dashboard or email verification page on successful registration
 * 8. Add "Already have an account? Sign in" link in CardFooter
 */

// ─── React Core ───────────────────────────────────────────────────────────────
import { useState } from "react";

// ─── Third-Party: Form & Validation ───────────────────────────────────────────
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ─── Schema & Types ────────────────────────────────────────────────────────────
import { registrationSchema, RegistrationFormData } from "./schema";
import { signUpUser } from "./actions";

// ─── Component ─────────────────────────────────────────────────────────────────
export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthDay: undefined,
      birthMonth: undefined,
      birthYear: undefined,
      gender: "",
      mobileNumber: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibilityToggle = () => setShowPassword((prev) => !prev);

  const onRegistrationSubmit: SubmitHandler<RegistrationFormData> = async (
    formData,
  ) => {
    console.log(formData);

    const result = await signUpUser(formData);

    if (!result.success) {
      alert(result.error);
      return;
    }
    alert("Account created successfully!");
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4">
        <Card className="w-full max-w-md ">
          <CardHeader>
            <CardTitle>Sign up to your account</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(onRegistrationSubmit)} noValidate>
            <CardContent>
              <FieldGroup className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Field className="space-y-1.5">
                    <FieldLabel
                      htmlFor="firstName"
                      className="text-sm font-medium"
                    >
                      First name
                    </FieldLabel>
                    <div>
                      <Input
                        id="firstName"
                        type="text"
                        className="h-11"
                        maxLength={20}
                        {...register("firstName")}
                      />
                    </div>
                    {errors?.firstName?.message && (
                      <FieldError errors={[errors?.firstName]} />
                    )}
                  </Field>

                  <Field className="space-y-1.5">
                    <FieldLabel
                      htmlFor="lastName"
                      className="text-sm font-medium"
                    >
                      Last name
                    </FieldLabel>
                    <div>
                      <Input
                        id="lastName"
                        type="text"
                        className="h-11"
                        maxLength={20}
                        {...register("lastName")}
                      />
                    </div>
                    {errors?.lastName?.message && (
                      <FieldError errors={[errors?.lastName]} />
                    )}
                  </Field>
                </div>

                <Field className="space-y-1.5">
                  <FieldLabel htmlFor="email" className="text-sm font-medium">
                    Email
                  </FieldLabel>
                  <div>
                    <Input
                      id="email"
                      type="email"
                      className="h-11"
                      maxLength={254}
                      {...register("email")}
                    />
                  </div>
                  {errors?.email?.message && (
                    <FieldError errors={[errors?.email]} />
                  )}
                </Field>

                <Field className="space-y-1.5">
                  <FieldLabel className="text-sm font-medium">
                    Date of birth
                  </FieldLabel>
                  <div className="grid grid-cols-3 gap-3">
                    <Controller
                      name="birthDay"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full h-11!">
                            <SelectValue placeholder="Day" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Day</SelectLabel>
                              {[
                                "1",
                                "2",
                                "3",
                                "4",
                                "5",
                                "6",
                                "7",
                                "8",
                                "9",
                                "10",
                                "11",
                                "12",
                                "13",
                                "14",
                                "15",
                                "16",
                                "17",
                                "18",
                                "19",
                                "20",
                                "21",
                                "22",
                                "23",
                                "24",
                                "25",
                                "26",
                                "27",
                                "28",
                                "29",
                                "30",
                                "31",
                              ].map((day) => (
                                <SelectItem key={day} value={day}>
                                  {day}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />

                    <Controller
                      name="birthMonth"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full h-11!">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Month</SelectLabel>
                              {[
                                "january",
                                "february",
                                "march",
                                "april",
                                "may",
                                "june",
                                "july",
                                "august",
                                "september",
                                "october",
                                "november",
                                "december",
                              ].map((month) => (
                                <SelectItem
                                  key={month}
                                  value={month}
                                  className="capitalize"
                                >
                                  {month}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />

                    <Controller
                      name="birthYear"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full h-11!">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Year</SelectLabel>
                              {[
                                "1970",
                                "1971",
                                "1972",
                                "1973",
                                "1974",
                                "1975",
                                "1976",
                                "1977",
                                "1978",
                                "1979",
                                "1980",
                                "1981",
                                "1982",
                                "1983",
                                "1984",
                                "1985",
                                "1986",
                                "1987",
                                "1988",
                                "1989",
                                "1990",
                                "1991",
                                "1992",
                                "1993",
                                "1994",
                                "1995",
                                "1996",
                                "1997",
                                "1998",
                                "1999",
                                "2000",
                                "2001",
                                "2002",
                                "2003",
                                "2004",
                                "2005",
                                "2006",
                                "2007",
                                "2008",
                                "2009",
                                "2010",
                                "2011",
                                "2012",
                                "2013",
                                "2014",
                                "2015",
                                "2016",
                                "2017",
                                "2018",
                                "2019",
                                "2020",
                                "2021",
                                "2022",
                                "2023",
                                "2024",
                                "2025",
                                "2026",
                              ].map((year) => (
                                <SelectItem key={year} value={year}>
                                  {year}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  {errors?.birthYear?.message && (
                    <FieldError errors={[errors?.birthYear]} />
                  )}
                </Field>

                <Field className="space-y-1.5">
                  <FieldLabel htmlFor="gender" className="text-sm font-medium">
                    Gender
                  </FieldLabel>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="grid grid-cols-3 gap-3"
                      >
                        {["male", "female", "other"].map((gender) => (
                          <label
                            key={gender}
                            htmlFor={`gender-${gender}`}
                            className="flex items-center justify-between border px-4 py-3 rounded-md cursor-pointer"
                          >
                            <span className="text-sm font-medium capitalize">
                              {gender}
                            </span>
                            <RadioGroupItem
                              value={gender}
                              id={`gender-${gender}`}
                            />
                          </label>
                        ))}
                      </RadioGroup>
                    )}
                  />
                  {errors?.gender?.message && (
                    <FieldError errors={[errors?.gender]} />
                  )}
                </Field>

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
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      className="h-11 pr-10"
                      maxLength={15}
                      {...register("password")}
                    />
                    <button
                      type="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      aria-pressed={showPassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={handlePasswordVisibilityToggle}
                    >
                      <HugeiconsIcon
                        icon={showPassword ? ViewIcon : ViewOffSlashIcon}
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
                {isSubmitting ? "Signing up..." : "Sign up"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
