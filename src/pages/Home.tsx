import HomeMap from "../components/common/HomeMap";
import WorldFlags from "../components/tips/world/Flags";
import InternetDomains from "../components/tips/world/InternetDomains";
import LocalCountryNames from "../components/tips/world/LocalCountryNames";

function Home() {
  return (
    <>
      <HomeMap />
      <WorldFlags />
      <InternetDomains />
      <LocalCountryNames />
    </>
  );
}

export default Home;
