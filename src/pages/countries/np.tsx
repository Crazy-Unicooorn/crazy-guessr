import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/np/flagmap.png";
import coat from "../../assets/img/np/coat.svg";

function Nepal() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Nepal shaped flag"
        title="Nepal (नेपाल)"
        coat={coat}
        coatAlt="Coat of Arms of Nepal"
      />
      <CountrySummary
        capital="Kathmandu (काठमाडौं)"
        largestCities="Kathmandu (काठमाडौं), Pokhara (पोखरा), Lalitpur (ललितपुर), Biratnagar (विराटनगर), Bharatpur (भरतपुर)"
        lang="Nepali"
        currencies="रू NPR"
        iso="np"
        tld="np"
        callingCode="977"
        drivingSide="L"
      />
    </>
  );
}

export default Nepal;
