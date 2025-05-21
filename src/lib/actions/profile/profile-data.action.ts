"use server";

import { getAuthToken } from "@/lib/utils/auth-token";

export async function getProfileData() {
  const { token } = await getAuthToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/profileData`,
    {
      headers: {
        token: token,
      },
      cache: "no-store",
    },
  );

  const data = await res.json(); // No types?

  const user = data.user;

  if (user.email === process.env.DEV_ADMIN_EMAIL) {
    user.role = "admin";
  }

  return user;
}
