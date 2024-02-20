import { Metadata } from "next";
import { HeaderAbout, OurTeam } from "../components";
export const metadata: Metadata = {
  title: "About",
  description: "Website courses by create mohammed elsayed 👩‍💻",
};
export default function page() {
  return (
    <div>
      <div className="container pt-[100px] mx-auto px-3">
        <HeaderAbout />
        <OurTeam />
      </div>
    </div>
  );
}
