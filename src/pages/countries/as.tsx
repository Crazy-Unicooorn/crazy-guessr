import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import Footer from "../../components/common/Footer";
import flagmap from "../../assets/img/as/flagmap.png";
import coat from "../../assets/img/as/coat.svg";

function AmericanSamoa() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="American Samoa shaped flag"
        title="American Samoa"
        coat={coat}
        coatAlt="Coat of Arms of American Samoa"
      />
      <CountrySummary
        capital="Pago Pago"
        largestCities="Tafuna"
        lang="Samoan & English"
        currencies="$USD"
        iso="AS"
        tld="as"
        callingCode="1-684"
        drivingSide="R"
      />
      <Footer />
    </>
  );
}

export default AmericanSamoa;
