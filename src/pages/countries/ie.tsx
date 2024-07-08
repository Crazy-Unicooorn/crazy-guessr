import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/ie/flagmap.png";
import coat from "../../assets/img/ie/coat.svg";

function Ireland() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Ireland shaped flag"
        title="Ireland (Éire)"
        coat={coat}
        coatAlt="Coat of Arms of Ireland"
      />
      <CountrySummary
        capital="Dublin"
        largestCities="Dublin, Cork, Limerick, Galway, Waterford"
        lang="Irish, English"
        currencies="€ EUR"
        iso="ie"
        tld="ie"
        callingCode="353"
        drivingSide="L"
      />
    </>
  );
}

export default Ireland;
