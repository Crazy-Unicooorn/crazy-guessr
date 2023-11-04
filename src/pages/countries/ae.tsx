import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import Footer from "../../components/common/Footer";
import flamap from "../../assets/img/ae/flagmap.png";
import coat from "../../assets/img/ae/coat.svg";

function UnitedArabEmirates() {
  return (
    <>
      <PageHeader
        flagmap={flamap}
        flagAlt="U.A.E. shaped flag"
        title="United Arab Emirates"
        coat={coat}
        coatAlt="Coat of Arms of U.A.E."
      />
      <CountrySummary
        capital="Abu Dhabi"
        largestCities="Dubai"
        lang="Arabic"
        currencies="UAE dirham (AED)"
        iso="AE"
        tld="ae"
        callingCode={971}
        drivingSide="R"
      />
      <Footer />
    </>
  );
}

export default UnitedArabEmirates;
