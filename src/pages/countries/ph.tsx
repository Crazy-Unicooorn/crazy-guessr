import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ph/flagmap.png";
import coat from "../../assets/img/ph/coat.svg";

function Philippines() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Philippines shaped flag"
        title="Philippines (Pilipinas)"
        coat={coat}
        coatAlt="Coat of Arms of Philippines"
      />
      <CountrySummary
        capital="Manila (Maynilà)"
        largestCities="Quezon City (Lungsod Quezon), Manila (Maynilà), Caloocan (Kalookan), Davao City (Dabaw), Budta (Cotabato City)"
        lang="Filipino, English"
        currencies="₱ PHP"
        iso="ph"
        tld="ph"
        callingCode="63"
        drivingSide="R"
      />
    </>
  );
}

export default Philippines;
