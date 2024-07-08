import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/pl/flagmap.png";
import coat from "../../assets/img/pl/coat.png";

function Poland() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Poland shaped flag"
        title="Poland (Polska)"
        coat={coat}
        coatAlt="Coat of Arms of Poland"
      />
      <CountrySummary
        capital="Warsaw (Warszawa)"
        largestCities="Warsaw (Warszawa), Kraków, Łódź, Wrocław, Poznań"
        lang="Polish"
        currencies="zł PLN"
        iso="pl"
        tld="pl"
        callingCode="48"
        drivingSide="R"
      />
    </>
  );
}

export default Poland;
