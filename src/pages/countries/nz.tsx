import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/nz/flagmap.png";
import coat from "../../assets/img/nz/coat.svg";

function NewZealand() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="New Zealand shaped flag"
        title="New Zealand (Aotearoa)"
        coat={coat}
        coatAlt="Coat of Arms of New Zealand"
      />
      <CountrySummary
        capital="Wellington (Te Whanganui-a-Tara)"
        largestCities="Auckland (Tāmaki Makaurau), Wellington (Te Whanganui-a-Tara), Christchurch (Ōtautahi), Hamilton (Kirikiriroa)"
        lang="English, Māori"
        currencies="$ NZD"
        iso="nz"
        tld="nz"
        callingCode="64"
        drivingSide="L"
      />
    </>
  );
}

export default NewZealand;
