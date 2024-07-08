import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/hr/flagmap.png";
import coat from "../../assets/img/hr/coat.svg";

function Croatia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Croatia shaped flag"
        title="Croatia (Hrvatska)"
        coat={coat}
        coatAlt="Coat of Arms of Croatia"
      />
      <CountrySummary
        capital="Zagreb"
        largestCities="Zagreb, Split, Rijeka, Osijek, Zadar"
        lang="Croatian"
        currencies="€ EUR"
        iso="hr"
        tld="hr"
        callingCode="385"
        drivingSide="R"
      />
    </>
  );
}

export default Croatia;
