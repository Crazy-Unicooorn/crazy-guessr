import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/st/flagmap.svg";
import coat from "../../assets/img/st/coat.svg";

function SaoTomeAndPrincipe() {
  return (
    <>
      <CountryHeader
        title="São Tomé and Príncipe"
        flagmap={flagmap}
        flagAlt="Flag map of São Tomé and Príncipe"
        coat={coat}
        coatAlt="National Emblem of São Tomé and Príncipe"
      />
      <CountrySummary
        callingCode={239}
        capital="São Tomé"
        currencies="Db STN"
        drivingSide="R"
        iso="ST"
        lang="Portuguese"
        largestCities="São Tomé, Santo António, Neves, Santana, Trindade"
        tld="st"
      />
    </>
  );
}

export default SaoTomeAndPrincipe;
