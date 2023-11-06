import LicensePlate from "../../components/tips/us/LicensePlate";
import flagmap from "../../assets/img/us/flagmap.png";
import coat from "../../assets/img/us/coat.svg";
import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";

function UnitedStates() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="U.S. shaped flag"
        title="United States of America"
        coat={coat}
        coatAlt="Coat of Arms of the United States"
      />
      <CountrySummary
        capital="Washington, D.C."
        largestCities="New York City"
        lang="None at the federal level"
        currencies="$USD"
        iso="US"
        tld="us"
        callingCode={1}
        drivingSide="R"
      />
      <LicensePlate />
    </>
  );
}

export default UnitedStates;
