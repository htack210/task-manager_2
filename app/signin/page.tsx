"use client";
import React from "react";
import { SignIn } from "@clerk/nextjs";

function page() {
  return (
    <div>
      <SignIn routing="hash" fallbackRedirectUrl={"/"} />
    </div>
  );
}

export default page;
