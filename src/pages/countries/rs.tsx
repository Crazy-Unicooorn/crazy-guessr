import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/rs/flagmap.png";
import coat from "../../assets/img/rs/coat.svg";

function Serbia() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Serbia shaped flag"
        title="Serbia (Србија)"
        coat={coat}
        coatAlt="Coat of Arms of Serbia"
      />
      <CountrySummary
        capital="Belgrade (Београд)"
        largestCities="Belgrade (Београд), Novi Sad (Нови Сад), Niš (Ниш), Kragujevac (Крагујевац), Subotica (Суботица)"
        lang="Serbian"
        currencies="RSD"
        iso="rs"
        tld="rs | .срб"
        callingCode="381"
        drivingSide="R"
      />
    </>
  );
}

export default Serbia;
