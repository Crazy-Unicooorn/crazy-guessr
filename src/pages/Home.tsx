import HomeMap from "../components/HomeMap";
import WorldCallingCodes from "../components/tips/world/CallingCode";
import WorldFlags from "../components/tips/world/Flags";
import InternetDomains from "../components/tips/world/InternetDomains";
import LocalCountryNames from "../components/tips/world/LocalCountryNames";

function Home() {
  return (
    <>
      <HomeMap />
      {/* <Currencies /> */}
      <WorldFlags />
      <InternetDomains />
      <WorldCallingCodes />
      <LocalCountryNames />
    </>
  );
}

export default Home;
