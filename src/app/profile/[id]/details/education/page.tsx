import { NextPage } from "next";
import DetailsEducationView from "@/view/details/education/DetailsEducationView";
interface pageProps {
  params: { id: number };
}

const DetailsEducation: NextPage<pageProps> = ({ params }) => {
  return <DetailsEducationView id={params.id} />;
};

export default DetailsEducation;
