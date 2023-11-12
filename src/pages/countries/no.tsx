import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/no/flagmap.png";
import coat from "../../assets/img/no/coat.svg";

function Norway() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Norway shaped flag"
        title="Norway (Norge)"
        coat={coat}
        coatAlt="Coat of Arms of Norway"
      />
      <CountrySummary
        capital="Oslo"
        largestCities="Oslo, Bergen, Trondheim, Stavanger, Drammen"
        lang="Norwegian"
        currencies="kr NOK"
        iso="no"
        tld="no"
        callingCode="47"
        drivingSide="R"
      />
    </>
  );
}

export default Norway;
