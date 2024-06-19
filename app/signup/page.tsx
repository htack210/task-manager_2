"use client";
import React from "react";
import { SignUp, useUser } from "@clerk/nextjs";

function page() {
  const { user } = useUser();
  if (!user) {
    return (
      <div className="flex items-center justify-center h-full">
        <SignUp routing="hash" fallbackRedirectUrl={"/signin"} />
      </div>
    );
  }
}

export default page;
