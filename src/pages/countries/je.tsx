import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/je/flagmap.png";
import coat from "../../assets/img/je/coat.svg";

function Jersey() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Jersey shaped flag"
        title="Jersey (Jèrriais)"
        coat={coat}
        coatAlt="Coat of Arms of Jersey"
      />
      <CountrySummary
        capital="St Helier (Saint Hélyi)"
        largestCities="St Helier, St Saviour, Le Hocq, St Lawrence, St Clement"
        lang="English, Norman, French"
        currencies="£ GBP, £ JEP"
        iso="je"
        tld="je"
        callingCode="44"
        drivingSide="L"
      />
    </>
  );
}

export default Jersey;
