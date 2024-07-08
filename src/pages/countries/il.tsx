import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/il/flagmap.png";
import coat from "../../assets/img/il/coat.svg";

function Israel() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Israel shaped flag"
        title="Israel (ישראל)"
        coat={coat}
        coatAlt="Coat of Arms of Israel"
      />
      <CountrySummary
        capital="Jerusalem (יְרוּשָׁלַיִם)"
        largestCities="Jerusalem, Tel Aviv, Haifa, Rishon LeZion, Petah Tikva"
        lang="Hebrew, Arabic, English"
        currencies="₪ ILS"
        iso="il"
        tld="il"
        callingCode="972"
        drivingSide="R"
      />
    </>
  );
}

export default Israel;
