import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/pe/flagmap.png";
import coat from "../../assets/img/pe/coat.svg";

function Peru() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Peru shaped flag"
        title="Peru"
        coat={coat}
        coatAlt="Coat of Arms of Peru"
      />
      <CountrySummary
        capital="Lima"
        largestCities="Lima, Arequipa, Callao, Trujillo, Chiclayo"
        lang="Spanish, Quechua, Aymara"
        currencies="S/ PEN"
        iso="pe"
        tld="pe"
        callingCode="51"
        drivingSide="R"
      />
    </>
  );
}

export default Peru;
