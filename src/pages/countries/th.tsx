import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/th/flagmap.png";
import coat from "../../assets/img/th/coat.svg";

function Thailand() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Thailand shaped flag"
        title="Thailand (ประเทศไทย)"
        coat={coat}
        coatAlt="Coat of Arms of Thailand"
      />
      <CountrySummary
        capital="Bangkok (กรุงเทพมหานคร)"
        largestCities="Bangkok (กรุงเทพมหานคร), Nonthaburi (นนทบุรี), Pak Kret (ปากเกร็ด), Hat Yai (หาดใหญ่), Nakhon Ratchasima (นครราชสีมา)"
        lang="Thai"
        currencies="฿ THB"
        iso="th"
        tld="th | .ไทย"
        callingCode="66"
        drivingSide="L"
      />
    </>
  );
}

export default Thailand;
