import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/by/flagmap.png";
import coat from "../../assets/img/by/coat.svg";

function Belarus() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Belarus shaped flag"
        title="Belarus (Беларусь)"
        coat={coat}
        coatAlt="Coat of Arms of Belarus"
      />
      <CountrySummary
        capital="Minsk (Мінск)"
        largestCities="Minsk, Gomel, Mogilev, Vitebsk, Grodno, Brest"
        lang="Belarusian, Russian"
        currencies="Br BYN"
        iso="by"
        tld="by & .бел"
        callingCode="375"
        drivingSide="R"
      />
    </>
  );
}

export default Belarus;
