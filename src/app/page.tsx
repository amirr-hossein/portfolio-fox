import { Hero } from "@/components";
import { Montserrat } from "next/font/google";

const anton = Montserrat({
  weight: "600",
  subsets:["cyrillic"]
});
export default function Home() {
  return (
    <>
      <Hero/>
    </>
  );
}
