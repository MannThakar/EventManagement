"use client";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signInUser } from "@/utils/helper";
import { useRouter } from "next/navigation";
const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await signInUser(data.email, data.password);
      router.push("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-(--auth-pages-bg) w-screen h-screen top-0 left-0 relative">
      <div className="absolute w-full h-full top-0 left-0 z-10">
        <Image
          src="/svg/01_AUTH_VECTOR.svg"
          alt="Auth Bg Vector"
          className="w-full h-full object-cover"
          fill
        />
      </div>

      <div className="w-full h-full absolute z-50 flex flex-col items-center justify-center top-0 left-0 p-4">
        <div className="max-w-157.5 bg-(--main-primary-color) p-6 py-10 md:p-10 lg:p-12 xl:p-14 rounded-2xl w-full overflow-hidden">
          <div className="w-full h-full flex flex-col gap-7 lg:gap-8">
            <div className="flex w-full flex-col items-center justify-center gap-3">
              <h1 className="font-bold text-xl md:text-2xl lg:text-[32px] text-(--primary-text-color) text-center">
                Sign In to Account
              </h1>
              <p className="font-medium text-sm md:text-base xl:text-lg text-(--primary-text-color) text-center">
                Please enter your email and password to continue
              </p>
            </div>
            <form
              className="w-full  grow flex flex-col gap-4 lg:gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full">
                <Input
                  name="email"
                  label="Email Address"
                  placeHolder="Enter your email address"
                  type="text"
                  showError={!!errors.email}
                  errorMessage={errors.email?.message}
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  isRequiredField
                />
              </div>

              <div className="w-full">
                <div className="pb-1.5 w-full flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="inline-block text-sm  text-(--primary-text-color) font-normal lg:text-base xl:text-lg"
                  >
                    Password
                  </label>
                </div>
                <div className="w-full">
                  <Input
                    name="password"
                    placeHolder="Enter your password"
                    type="password"
                    showError={!!errors.password}
                    errorMessage={errors.password?.message}
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    }}
                    isRequiredField
                    viewPasswordBtn
                  />
                </div>
                <div className="pt-5 w-full flex items-center justify-between">
                  <Button
                    type="button"
                    className="text-(--secondary-text-color)"
                  ></Button>
                </div>
              </div>

              <div className="w-full max-w-105 mx-auto pt-2 md:pt-4 lg:pt-2">
                <Button
                  type="submit"
                  className="w-full bg-(--auth-pages-bg) rounded-lg text-white px-5 py-3 font-bold cursor-pointer text-sm md:text-base xl:text-xl"
                >
                  {false ? "Signing In...." : "Sign In"}
                </Button>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 pt-5 lg:pt-10">
                  <span className="text-sm lg:text-base text-(--secondary-text-color) font-medium">
                    Don’t have an account?
                  </span>
                  <Link
                    href={"/sign-up"}
                    className="text-sm lg:text-base text-blue-500 font-bold underline hover:text-blue-700"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
