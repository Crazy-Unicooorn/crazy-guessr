import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/kg/flagmap.png";
import coat from "../../assets/img/kg/coat.png";

function Kyrgyzstan() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Kyrgyzstan shaped flag"
        title="Kyrgyzstan (Кыргызстан)"
        coat={coat}
        coatAlt="Coat of Arms of Kyrgyzstan"
      />
      <CountrySummary
        capital="Bishkek (Бишкек)"
        largestCities="Bishkek, Osh, Jalal-Abad, Karakol, Tokmok"
        lang="Kyrgyz, Russian"
        currencies="KGS"
        iso="kg"
        tld="kg"
        callingCode="996"
        drivingSide="R"
      />
    </>
  );
}

export default Kyrgyzstan;
