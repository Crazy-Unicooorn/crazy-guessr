import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/lt/flagmap.png";
import coat from "../../assets/img/lt/coat.svg";

function Lithuania() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Lithuania shaped flag"
        title="Lithuania (Lietuva)"
        coat={coat}
        coatAlt="Coat of Arms of Lithuania"
      />
      <CountrySummary
        capital="Vilnius (Vilniaus miestas)"
        largestCities="Vilnius, Kaunas, Klaipėda"
        lang="Lithuanian"
        currencies="€ EUR"
        iso="lt"
        tld="lt"
        callingCode="370"
        drivingSide="R"
      />
    </>
  );
}

export default Lithuania;
