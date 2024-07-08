import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/lv/flagmap.png";
import coat from "../../assets/img/lv/coat.svg";

function Latvia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Latvia shaped flag"
        title="Latvia (Latvijas Republika)"
        coat={coat}
        coatAlt="Coat of Arms of Latvia"
      />
      <CountrySummary
        capital="Riga"
        largestCities="Riga, Daugavpils, Liepāja, Jelgava, Jūrmala"
        lang="Latvian"
        currencies="€ EUR"
        iso="lv"
        tld="lv"
        callingCode="371"
        drivingSide="R"
      />
    </>
  );
}

export default Latvia;
