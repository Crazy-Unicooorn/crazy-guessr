import PageHeader, { CountrySummary } from "../../components/common/PageBuilder";
import flagmap from "../../assets/img/vn/flagmap.png";
import coat from "../../assets/img/vn/coat.svg";

function Vietnam() {
  return (
    <>
      <PageHeader
        flagmap={flagmap}
        flagAlt="Vietnam shaped flag"
        title="Vietnam (Việt Nam)"
        coat={coat}
        coatAlt="Coat of Arms of Vietnam"
      />
      <CountrySummary
        capital="Hanoi (Hà Nội)"
        largestCities="Ho Chi Minh City (Thành phố Hồ Chí Minh), Hanoi (Hà Nội), Hai Phong (Hải Phòng), Da Nang (Đà Nẵng), Can Tho (Cần Thơ)"
        lang="Vietnamese"
        currencies="₫ VND"
        iso="vn"
        tld="vn"
        callingCode="84"
        drivingSide="R"
      />
    </>
  );
}

export default Vietnam;
