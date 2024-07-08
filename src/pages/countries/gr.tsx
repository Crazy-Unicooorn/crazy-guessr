import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/gr/flagmap.png";
import coat from "../../assets/img/gr/coat.svg";

function Greece() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Greece shaped flag"
        title="Greece (Ελληνική Δημοκρατία)"
        coat={coat}
        coatAlt="Coat of Arms of Greece"
      />
      <CountrySummary
        capital="Athens (Αθήνα, Athína)"
        largestCities="Athens, Thessaloniki, Patras, Heraklion, Larissa"
        lang="Greek"
        currencies="€ EUR"
        iso="gr"
        tld="gr | .ελ"
        callingCode="30"
        drivingSide="R"
      />
    </>
  );
}

export default Greece;
