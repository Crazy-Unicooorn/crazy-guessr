import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/cw/flagmap.png";
import coat from "../../assets/img/cw/coat.svg";

function Curaçao() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Curaçao shaped flag"
        title="Curaçao (Kòrsou)"
        coat={coat}
        coatAlt="Coat of Arms of Curaçao"
      />
      <CountrySummary
        capital="Willemstad (Punda)"
        largestCities="Willemstad, Sint Michiel Liber, Barber, Dorp Soto, Lagun"
        lang="Dutch, Papiamento, English"
        currencies="ƒ ANG"
        iso="CW"
        tld="cw"
        callingCode="599"
        drivingSide="R"
      />
    </>
  );
}

export default Curaçao;
