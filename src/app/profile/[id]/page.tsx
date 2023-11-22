import ProfileView from "@/view/profile/ProfileView";
import { NextPage } from "next";

interface pageProps {
  params: { id: number };
}

const Profile: NextPage<pageProps> = ({ params }) => {
  return <ProfileView id={params.id} />;
};

export default Profile;
