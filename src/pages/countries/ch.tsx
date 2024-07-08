import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ch/flagmap.png";
import coat from "../../assets/img/ch/coat.svg";

function Switzerland() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Switzerland shaped flag"
        title="Switzerland (Schweiz)"
        coat={coat}
        coatAlt="Coat of Arms of Switzerland"
      />
      <CountrySummary
        capital="Bern (de facto)"
        largestCities="Zurich, Geneva, Basel, Lausanne, Bern, Winterthur, Lucerne"
        lang="German, French, Italian, Romansh"
        currencies="CHF"
        iso="ch"
        tld="ch"
        callingCode="41"
        drivingSide="R"
      />
    </>
  );
}

export default Switzerland;
