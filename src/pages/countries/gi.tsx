import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/gi/flagmap.png";
import coat from "../../assets/img/gi/coat.svg";

function Gibraltar() {
  return (
    <>
      <CountryHeader
        flagmap={flagmap}
        flagAlt="Gibraltar shaped flag"
        title="Gibraltar"
        coat={coat}
        coatAlt="Coat of Arms of Gibraltar"
      />
      <CountrySummary lang="English, Spanish" currencies="£ GIP" iso="gi" tld="gi" callingCode="350" drivingSide="R" />
    </>
  );
}

export default Gibraltar;
