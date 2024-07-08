import CountryHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flag from "../../assets/img/aq/flag.png";

function Antarctica() {
  return (
    <>
      <CountryHeader flagmap={flag} flagAlt="Flag of Antarctica" title="Antarctica" coat="" coatAlt="" />
      <CountrySummary tld="aq" />
    </>
  );
}

export default Antarctica;
