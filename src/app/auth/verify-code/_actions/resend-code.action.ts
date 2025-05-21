"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";

export async function resendCodeAction(email: string) {
  try {
    const res = await fetch(`${process.env.API}/auth/forgotPassword`, {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        ...JSON_HEADER,
      },
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Code resent:", data.message);
    } else {
      console.error("Failed to resend code:", data.message);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}
