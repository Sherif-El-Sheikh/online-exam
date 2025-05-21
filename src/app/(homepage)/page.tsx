import { redirect } from "next/navigation";

export default function Home() {
  // It's better to utility the redirects in the `next.config.mjs` in this case,
  // so that the redirections happens before the request even reaches the route.
  // Note: You should redirect to the dashboard not the login page.
  redirect("/dashboard/user-dashboard");
}
