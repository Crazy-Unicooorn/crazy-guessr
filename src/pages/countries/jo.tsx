import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/jo/flagmap.png";
import coat from "../../assets/img/jo/coat.svg";

function Jordan() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Jordan shaped flag"
        title="Jordan (الأردن)"
        coat={coat}
        coatAlt="Coat of Arms of Jordan"
      />
      <CountrySummary
        capital="Amman (عمان)"
        largestCities="Amman, Zarqa, Irbid, Russeifa, Al Quwaysimah"
        lang="Arabic"
        currencies="JOD"
        iso="jo"
        tld="jo | .الاردن"
        callingCode="962"
        drivingSide="R"
      />
    </>
  );
}

export default Jordan;
