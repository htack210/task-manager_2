"use client";
import React from "react";
import { SignUp, useUser } from "@clerk/nextjs";

function page() {
  const { user } = useUser();
  if (!user) {
    return (
      <div>
        <SignUp routing="hash" fallbackRedirectUrl={"/signin"} />
      </div>
    );
  }
}

export default page;
