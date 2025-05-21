"use server";

import { JSON_HEADER } from "@/lib/constants/api.constants";
import { getAuthToken } from "@/lib/utils/auth-token";

export async function updateLastname(lastName: string) {
  const { token } = await getAuthToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/editProfile`,
    {
      method: "PUT",
      body: JSON.stringify({ lastName: lastName }),
      headers: {
        token: token,
        ...JSON_HEADER,
      },
    },
  );

  const data = await res.json(); // No types?
  const user = data.user;

  return user;
}
