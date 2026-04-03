"use client";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { signUpUser } from "@/utils/helper";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signUpUser(data);
      router.push("/sign-in");
    } catch (err) {
      const error = err as Error;
      alert(error.message);
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
          <div className="w-full h-full flex flex-col gap-7 lg:gap-7">
            <div className="flex w-full flex-col items-center justify-center gap-3">
              <h1 className="font-bold text-xl md:text-2xl lg:text-[32px] text-(--primary-text-color) text-center">
                Create an Account
              </h1>
            </div>
            <form
              className="w-full  grow flex flex-col gap-6 lg:gap-4.5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full">
                <Input
                  name="name"
                  label="Name"
                  placeHolder="Enter your name"
                  type="text"
                  showError={!!errors.name}
                  errorMessage={errors.name?.message}
                  control={control}
                  rules={{ required: "Name is required" }}
                  isRequiredField
                />
              </div>
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
                <Input
                  name="password"
                  label="Password"
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

              <div className="w-full max-w-105 mx-auto pt-2 md:pt-4 lg:pt-6 pb-5">
                <Button
                  type="submit"
                  className="w-full bg-(--auth-pages-bg) rounded-lg text-white px-5 py-2.5 font-bold cursor-pointer text-sm md:text-base xl:text-xl"
                >
                  {false ? "Signing Up...." : "Sign Up"}
                </Button>
                <div className="flex items-center justify-center gap-2 pt-6">
                  <span className="text-sm lg:text-base text-(--secondary-text-color) font-medium">
                    Already have an account?
                  </span>
                  <Link
                    href={"/sign-in"}
                    className="text-sm lg:text-base text-blue-500 font-bold underline hover:text-blue-700"
                  >
                    Sign In
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

export default SignUp;
