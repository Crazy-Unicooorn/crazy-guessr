import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import Footer from "../../components/common/Footer";
import flag from "../../assets/img/aq/flag.png";

function Antarctica() {
  return (
    <>
      <PageHeader flagmap={flag} flagAlt="Flag of Antarctica" title="Antarctica" coat="" coatAlt="" />
      <CountrySummary tld="aq" />
      <Footer />
    </>
  );
}

export default Antarctica;
