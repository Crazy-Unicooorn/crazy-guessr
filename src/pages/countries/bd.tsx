import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/bd/flagmap.png";
import coat from "../../assets/img/bd/coat.svg";

function Bangladesh() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Bangladesh shaped flag"
        title="Bangladesh (বাংলাদেশ)"
        coat={coat}
        coatAlt="Coat of Arms of Bangladesh"
      />
      <CountrySummary
        capital="Dhaka (ঢাকা)"
        largestCities="Dhaka, Chittagong, Khulna, Rajshahi, Sylhet"
        lang="Bengali"
        currencies="৳BDT"
        iso="BD"
        tld="bd and .বাংলা"
        callingCode="880"
        drivingSide="R"
      />
    </>
  );
}

export default Bangladesh;
