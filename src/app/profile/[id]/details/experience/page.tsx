import { NextPage } from "next";
import DetailsExperienceView from "@/view/details/experience/DetailsExperienceView";
interface pageProps {
  params: { id: number };
}

const DetailsExperience: NextPage<pageProps> = ({ params }) => {
  return <DetailsExperienceView id={params.id} />;
};

export default DetailsExperience;
