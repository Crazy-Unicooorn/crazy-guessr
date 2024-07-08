import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/mk/flagmap.png";
import coat from "../../assets/img/mk/coat.svg";

function NorthMacedonia() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="North Macedonia shaped flag"
        title="North Macedonia (Република Северна Македонија)"
        coat={coat}
        coatAlt="Coat of Arms of North Macedonia"
      />
      <CountrySummary
        capital="Skopje (Скопје)"
        largestCities="Skopje, Bitola, Kumanovo, Prilep, Tetovo, Ohrid"
        lang="Macedonian, Albanian"
        currencies="den MKD"
        iso="mk"
        tld="mk"
        callingCode="389"
        drivingSide="R"
      />
    </>
  );
}

export default NorthMacedonia;
