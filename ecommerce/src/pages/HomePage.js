import React from "react"; 
import InBetweenBanner2 from "../components/InBetweenBanner2";
import Mainbanner from "../components/Mainbanner";
import Topcategories from "../components/Topcategories";

export default function HomePage() {
  return (
    <> 
      <Topcategories/>
      <InBetweenBanner2 />
      <Mainbanner />
    </>
  );
}
