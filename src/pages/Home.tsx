import HomeMap from "../components/common/HomeMap";
import InternetDomains from "../components/tips/world/InternetDomains";
import LocalCountryNames from "../components/tips/world/LocalCountryNames";

function Home() {
  return (
    <>
      <HomeMap />
      <InternetDomains />
      <LocalCountryNames />
    </>
  );
}

export default Home;
