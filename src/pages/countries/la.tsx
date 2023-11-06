import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/la/flagmap.png";
import coat from "../../assets/img/la/coat.svg";

function Laos() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Laos shaped flag"
        title="Laos (ສປປລາວ)"
        coat={coat}
        coatAlt="Coat of Arms of Laos"
      />
      <CountrySummary
        capital="Vientiane (ວຽງຈັນ)"
        largestCities="Vientiane (ວຽງຈັນ), Pakse (ປາກເຊ), Savannakhet (ສະຫວັນນະເຂດ)"
        lang="Lao"
        currencies="₭LAK"
        iso="la"
        tld="la"
        callingCode="856"
        drivingSide="R"
      />
    </>
  );
}

export default Laos;
