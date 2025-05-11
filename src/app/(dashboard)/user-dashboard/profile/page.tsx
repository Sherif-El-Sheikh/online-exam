import { getProfileData } from "@/lib/actions/profile/profile-data.action";
import { ProfileInfo } from "../../(shared)/_components/profile-info";

export default async function Page() {
  const user = await getProfileData();
  return (
      <ProfileInfo user={user} />
  );
}
