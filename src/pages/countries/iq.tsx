import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/iq/flagmap.png";
import coat from "../../assets/img/iq/coat.svg";

function Iraq() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Iraq shaped flag"
        title="Iraq (العراق)"
        coat={coat}
        coatAlt="Coat of Arms of Iraq"
      />
      <CountrySummary
        capital="Baghdad (بغداد)"
        largestCities="Baghdad (بغداد), Basra (البصرة), Mosul (الموصل), Erbil (هه‌ولێر), Najaf (النجف)"
        lang="Arabic, Kurdish"
        currencies="ع.د IQD"
        iso="iq"
        tld="iq"
        callingCode="964"
        drivingSide="R"
      />
    </>
  );
}

export default Iraq;
