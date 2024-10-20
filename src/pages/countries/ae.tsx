import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flamap from "../../assets/img/ae/flagmap.png";
import coat from "../../assets/img/ae/coat.svg";

function UnitedArabEmirates() {
  return (
    <>
      <CountryHeader
        flagmap={flamap}
        flagAlt="U.A.E. shaped flag"
        title="United Arab Emirates (الإمارات العربية المتحدة)"
        coat={coat}
        coatAlt="Coat of Arms of U.A.E."
      />
      <CountrySummary
        capital="Abu Dhabi (أبو ظبي)"
        largestCities="Dubai"
        lang="Arabic"
        currencies="UAE dirham (AED)"
        iso="AE"
        tld="ae"
        callingCode={971}
        drivingSide="R"
      />
    </>
  );
}

export default UnitedArabEmirates;
