import { styled } from "styled-components";
import ImageMagnifier from "../../common/ImageMagnifier";
import Separator from "../../common/Separator";
import { Tip, Head, MapButton, Card, Paragraph } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import requiresFrontLicense2 from "../../../assets/img/us/FrontLicensePlates.png";
import licensePlatesMap from "../../../assets/img/us/license-plates.png";

// License plates
import Alabama from "../../../assets/img/us/plates/Alabama.png";
import Minnesota from "../../../assets/img/us/plates/Minnesota.jpg";
import Mississippi1 from "../../../assets/img/us/plates/Mississippi1.jpg";
import Mississippi2 from "../../../assets/img/us/plates/Mississippi.png";
import Missouri1 from "../../../assets/img/us/plates/Missouri1.jpg";
import Missouri2 from "../../../assets/img/us/plates/Missouri2.png";
import Nevada from "../../../assets/img/us/plates/Nevada.jpg";
import Oklahoma from "../../../assets/img/us/plates/Oklahoma.jpg";
import Iowa1 from "../../../assets/img/us/plates/Iowa.jpg";
import Iowa2 from "../../../assets/img/us/plates/Iowa2.jpg";
import NewMexico from "../../../assets/img/us/plates/NewMexico.jpg";
import NewMexico1 from "../../../assets/img/us/plates/NewMexico1.jpg";
import NewMexico2 from "../../../assets/img/us/plates/NewMexico2.jpg";
import NewMexico3 from "../../../assets/img/us/plates/NewMexico3.jpg";
import NorthDakota from "../../../assets/img/us/plates/NorthDakota.jpg";
import Pennsylvania from "../../../assets/img/us/plates/Pennsylvania.jpg";
import Texas1 from "../../../assets/img/us/plates/Texas.png";
import Texas2 from "../../../assets/img/us/plates/Texas2.jpg";
import Florida from "../../../assets/img/us/plates/Florida.jpg";
import California from "../../../assets/img/us/plates/California1.jpg";
import NY from "../../../assets/img/us/plates/NewYork1.jpg";
import Arizona from "../../../assets/img/us/plates/Arizona.jpg";
import Washington from "../../../assets/img/us/plates/Washington.jpg";
import Hawaii from "../../../assets/img/us/plates/Hawaii.jpg";

// Blurred
import Alabama1 from "../../../assets/img/us/plates/blurred/alabama1.jpg";
import Alabama2 from "../../../assets/img/us/plates/blurred/alabama2.jpg";
import Alabama3 from "../../../assets/img/us/plates/blurred/alabama3.jpg";
import Minnesota1 from "../../../assets/img/us/plates/blurred/Minnesota1.jpg";
import MississippiBlurred1 from "../../../assets/img/us/plates/blurred/Mississippi1.jpg";
import MississippiBlurred2 from "../../../assets/img/us/plates/blurred/Mississippi2.jpg";
import MississippiBlurred3 from "../../../assets/img/us/plates/blurred/Mississippi3.jpg";
import MississippiBlurred4 from "../../../assets/img/us/plates/blurred/Mississippi4.jpg";
import MississippiBlurred5 from "../../../assets/img/us/plates/blurred/Mississippi5.jpg";
import MississippiBlurred6 from "../../../assets/img/us/plates/blurred/Mississippi6.jpg";
import MissouriBlurred1 from "../../../assets/img/us/plates/blurred/Missouri1.jpg";
import MissouriBlurred2 from "../../../assets/img/us/plates/blurred/Missouri2.jpg";
import Nevada1 from "../../../assets/img/us/plates/blurred/Nevada1.jpg";
import Nevada2 from "../../../assets/img/us/plates/blurred/Nevada2.jpg";
import Nevada3 from "../../../assets/img/us/plates/blurred/Nevada3.jpg";
import Nevada4 from "../../../assets/img/us/plates/blurred/Nevada4.jpg";
import Nevada5 from "../../../assets/img/us/plates/blurred/Nevada5.jpg";
import Oklahoma1 from "../../../assets/img/us/plates/blurred/Oklahoma1.jpg";
import Oklahoma2 from "../../../assets/img/us/plates/blurred/Oklahoma2.jpg";
import Oklahoma3 from "../../../assets/img/us/plates/blurred/Oklahoma3.jpg";
import Oklahoma4 from "../../../assets/img/us/plates/blurred/Oklahoma4.jpg";
import IowaBlurred1 from "../../../assets/img/us/plates/blurred/Iowa1.jpg";
import IowaBlurred2 from "../../../assets/img/us/plates/blurred/Iowa2.jpg";
import IowaBlurred3 from "../../../assets/img/us/plates/blurred/Iowa3.jpg";
import NewMexicoBlurredA from "../../../assets/img/us/plates/blurred/NewMexicoA.jpg";
import NewMexicoBlurredB from "../../../assets/img/us/plates/blurred/NewMexicoB.jpg";
import NewMexicoBlurredC from "../../../assets/img/us/plates/blurred/NewMexicoC.jpg";
import NewMexicoBlurredD from "../../../assets/img/us/plates/blurred/NewMexicoD.jpg";
import NewMexicoBlurred1A from "../../../assets/img/us/plates/blurred/NewMexico1A.jpg";
import NewMexicoBlurred1B from "../../../assets/img/us/plates/blurred/NewMexico1B.jpg";
import NewMexicoBlurred2A from "../../../assets/img/us/plates/blurred/NewMexico2A.jpg";
import NewMexicoBlurred2B from "../../../assets/img/us/plates/blurred/NewMexico2B.jpg";
import NewMexicoBlurred2C from "../../../assets/img/us/plates/blurred/NewMexico2C.jpg";
import NewMexicoBlurred2D from "../../../assets/img/us/plates/blurred/NewMexico2D.jpg";
import NewMexicoBlurred3A from "../../../assets/img/us/plates/blurred/NewMexico3A.jpg";
import NewMexicoBlurred3B from "../../../assets/img/us/plates/blurred/NewMexico3B.jpg";
import NorthDakotaBlurred1 from "../../../assets/img/us/plates/blurred/NorthDakota.jpg";
import NorthDakotaBlurred2 from "../../../assets/img/us/plates/blurred/NorthDakota2.jpg";
import NorthDakotaBlurred3 from "../../../assets/img/us/plates/blurred/NorthDakota3.jpg";
import NorthDakotaBlurred4 from "../../../assets/img/us/plates/blurred/NorthDakota4.jpg";
import NorthDakotaBlurred5 from "../../../assets/img/us/plates/blurred/NorthDakota5.jpg";
import PennsylvaniaBlurred1 from "../../../assets/img/us/plates/blurred/Pennsylvania1.jpg";
import PennsylvaniaBlurred2 from "../../../assets/img/us/plates/blurred/Pennsylvania2.jpg";
import PennsylvaniaBlurred3 from "../../../assets/img/us/plates/blurred/Pennsylvania3.jpg";
import PennsylvaniaBlurred4 from "../../../assets/img/us/plates/blurred/Pennsylvania4.jpg";
import PennsylvaniaBlurred5 from "../../../assets/img/us/plates/blurred/Pennsylvania5.jpg";
import TexasBlurred1 from "../../../assets/img/us/plates/blurred/Texas1.jpg";
import TexasBlurred2 from "../../../assets/img/us/plates/blurred/Texas2.jpg";
import TexasBlurred3 from "../../../assets/img/us/plates/blurred/Texas3.jpg";
import TexasBlurred4 from "../../../assets/img/us/plates/blurred/Texas4.jpg";
import TexasBlurred5 from "../../../assets/img/us/plates/blurred/Texas5.jpg";
import FloridaBlurred1 from "../../../assets/img/us/plates/blurred/Florida1.jpg";
import FloridaBlurred2 from "../../../assets/img/us/plates/blurred/Florida2.jpg";
import FloridaBlurred3 from "../../../assets/img/us/plates/blurred/Florida3.jpg";
import FloridaBlurred4 from "../../../assets/img/us/plates/blurred/Florida4.jpg";
import FloridaBlurred5 from "../../../assets/img/us/plates/blurred/Florida5.jpg";
import CaliforniaBlurred1 from "../../../assets/img/us/plates/blurred/California1.jpg";
import CaliforniaBlurred2 from "../../../assets/img/us/plates/blurred/California2.jpg";
import CaliforniaBlurred3 from "../../../assets/img/us/plates/blurred/California3.jpg";
import CaliforniaBlurred4 from "../../../assets/img/us/plates/blurred/California4.jpg";
import CaliforniaBlurred5 from "../../../assets/img/us/plates/blurred/California5.jpg";
import NewYorkBlurred1 from "../../../assets/img/us/plates/blurred/NewYork1.jpg";
import NewYorkBlurred2 from "../../../assets/img/us/plates/blurred/NewYork2.jpg";
import NewYorkBlurred3 from "../../../assets/img/us/plates/blurred/NewYork3.jpg";
import NewYorkBlurred4 from "../../../assets/img/us/plates/blurred/NewYork4.jpg";
import NewYorkBlurred5 from "../../../assets/img/us/plates/blurred/NewYork5.jpg";
import ArizonaBlurred1 from "../../../assets/img/us/plates/blurred/Arizona1.jpg";
import ArizonaBlurred2 from "../../../assets/img/us/plates/blurred/Arizona2.jpg";
import ArizonaBlurred3 from "../../../assets/img/us/plates/blurred/Arizona3.jpg";
import ArizonaBlurred4 from "../../../assets/img/us/plates/blurred/Arizona4.jpg";
import ArizonaBlurred5 from "../../../assets/img/us/plates/blurred/Arizona5.jpg";
import WashingtonBlurred1 from "../../../assets/img/us/plates/blurred/Washington1.jpg";
import WashingtonBlurred2 from "../../../assets/img/us/plates/blurred/Washington2.jpg";
import WashingtonBlurred3 from "../../../assets/img/us/plates/blurred/Washington3.jpg";
import WashingtonBlurred4 from "../../../assets/img/us/plates/blurred/Washington4.jpg";
import WashingtonBlurred5 from "../../../assets/img/us/plates/blurred/Washington5.jpg";
import HawaiiBlurred1 from "../../../assets/img/us/plates/blurred/Hawaii1.jpg";
import HawaiiBlurred2 from "../../../assets/img/us/plates/blurred/Hawaii2.jpg";
import HawaiiBlurred3 from "../../../assets/img/us/plates/blurred/Hawaii3.jpg";
import HawaiiBlurred4 from "../../../assets/img/us/plates/blurred/Hawaii4.jpg";
import HawaiiBlurred5 from "../../../assets/img/us/plates/blurred/Hawaii5.jpg";

function TrainingRequirements() {
  const data: Card[] = [
    { front: "Alabama", back: "No" },
    { front: "Alaska", back: "No" },
    { front: "Arizona", back: "No" },
    { front: "Arkansas", back: "No" },
    { front: "California", back: "Yes" },
    { front: "Colorado", back: "Yes" },
    { front: "Connecticut", back: "Yes" },
    { front: "Delaware", back: "No" },
    { front: "Florida", back: "No" },
    { front: "Georgia", back: "No" },
    { front: "Hawaii", back: "Yes" },
    { front: "Idaho", back: "Yes" },
    { front: "Illinois", back: "Yes" },
    { front: "Indiana", back: "No" },
    { front: "Iowa", back: "Yes" },
    { front: "Kansas", back: "No" },
    { front: "Kentucky", back: "No" },
    { front: "Louisiana", back: "No" },
    { front: "Maine", back: "Yes" },
    { front: "Maryland", back: "Yes" },
    { front: "Massachusetts", back: "Yes, with exceptions" },
    { front: "Michigan", back: "No" },
    { front: "Minnesota", back: "Yes" },
    { front: "Mississippi", back: "No" },
    { front: "Missouri", back: "Yes" },
    { front: "Montana", back: "Yes, with exceptions" },
    { front: "Nebraska", back: "Yes, with exceptions" },
    { front: "Nevada", back: "Yes, with exceptions" },
    { front: "New Hampshire", back: "Yes" },
    { front: "New Jersey", back: "Yes" },
    { front: "New Mexico", back: "No" },
    { front: "New York", back: "Yes" },
    { front: "North Carolina", back: "No" },
    { front: "North Dakota", back: "Yes" },
    { front: "Ohio", back: "No" },
    { front: "Oklahoma", back: "No" },
    { front: "Oregon", back: "Yes" },
    { front: "Pennsylvania", back: "No" },
    { front: "Rhode Island", back: "Yes" },
    { front: "South Carolina", back: "No" },
    { front: "South Dakota", back: "Yes, with exceptions" },
    { front: "Tennessee", back: "No" },
    { front: "Texas", back: "Yes" },
    { front: "Utah", back: "Yes" },
    { front: "Vermont", back: "Yes" },
    { front: "Virginia", back: "Yes" },
    { front: "Washington", back: "Yes" },
    { front: "West Virginia", back: "No" },
    { front: "Wisconsin", back: "Yes" },
    { front: "Wyoming", back: "Yes, with exceptions" },
    { front: "Washington D.C.", back: "Yes" },
    { front: "Puerto Rico", back: "No" },
    { front: "Guam", back: "Yes" },
    { front: "U.S. Virgin Islands", back: "Yes" },
    { front: "American Samoa", back: "Yes" },
    { front: "Northern Mariana Islands", back: "Yes" },
  ];

  const cards: Card[] = data.map((card) => {
    return {
      ...card,
      front: (
        <div style={{ lineHeight: "3rem" }}>
          Does <mark style={{ padding: "0 0.25rem", borderRadius: "0.25rem" }}>{card.front}</mark> require front license
          plates?
        </div>
      ),
    };
  });

  return <TrainingModal cards={cards} />;
}

function LicensePlate() {
  const StyleBack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-height: 8rem;
    height: 100%;
    width: 100%;
  `;
  const styleImage = { maxHeight: "100%", minHeight: "0", maxWidth: "100%", minWidth: "0", borderRadius: "0.5rem" };

  function img(src: string) {
    return <img src={src} alt="A blurred license plate" style={styleImage} />;
  }

  const cards: Card[] = [
    {
      front: img(Alabama1),
      back: <StyleBack>{img(Alabama)} Alabama</StyleBack>,
    },
    {
      front: img(Alabama2),
      back: <StyleBack>{img(Alabama)} Alabama</StyleBack>,
    },
    {
      front: img(Alabama3),
      back: <StyleBack>{img(Alabama)} Alabama</StyleBack>,
    },
    // { front: "Alaska", back: "No" },
    {
      front: img(ArizonaBlurred1),
      back: <StyleBack>{img(Arizona)} Arizona</StyleBack>,
    },
    {
      front: img(ArizonaBlurred2),
      back: <StyleBack>{img(Arizona)} Arizona</StyleBack>,
    },
    {
      front: img(ArizonaBlurred3),
      back: <StyleBack>{img(Arizona)} Arizona</StyleBack>,
    },
    {
      front: img(ArizonaBlurred4),
      back: <StyleBack>{img(Arizona)} Arizona</StyleBack>,
    },
    {
      front: img(ArizonaBlurred5),
      back: <StyleBack>{img(Arizona)} Arizona</StyleBack>,
    },
    // { front: "Arkansas", back: "Yes" },
    {
      front: img(CaliforniaBlurred1),
      back: <StyleBack>{img(California)} California</StyleBack>,
    },
    {
      front: img(CaliforniaBlurred2),
      back: <StyleBack>{img(California)} California</StyleBack>,
    },
    {
      front: img(CaliforniaBlurred3),
      back: <StyleBack>{img(California)} California</StyleBack>,
    },
    {
      front: img(CaliforniaBlurred4),
      back: <StyleBack>{img(California)} California</StyleBack>,
    },
    {
      front: img(CaliforniaBlurred5),
      back: <StyleBack>{img(California)} California</StyleBack>,
    },
    // { front: "Colorado", back: "Yes" },
    // { front: "Connecticut", back: "Yes" },
    // { front: "Delaware", back: "Yes" },
    {
      front: img(FloridaBlurred1),
      back: <StyleBack>{img(Florida)} Florida</StyleBack>,
    },
    {
      front: img(FloridaBlurred2),
      back: <StyleBack>{img(Florida)} Florida</StyleBack>,
    },
    {
      front: img(FloridaBlurred3),
      back: <StyleBack>{img(Florida)} Florida</StyleBack>,
    },
    {
      front: img(FloridaBlurred4),
      back: <StyleBack>{img(Florida)} Florida</StyleBack>,
    },
    {
      front: img(FloridaBlurred5),
      back: <StyleBack>{img(Florida)} Florida</StyleBack>,
    },
    // { front: "Georgia", back: "Yes" },
    {
      front: img(HawaiiBlurred1),
      back: <StyleBack>{img(Hawaii)} Hawaii</StyleBack>,
    },
    {
      front: img(HawaiiBlurred2),
      back: <StyleBack>{img(Hawaii)} Hawaii</StyleBack>,
    },
    {
      front: img(HawaiiBlurred3),
      back: <StyleBack>{img(Hawaii)} Hawaii</StyleBack>,
    },
    {
      front: img(HawaiiBlurred4),
      back: <StyleBack>{img(Hawaii)} Hawaii</StyleBack>,
    },
    {
      front: img(HawaiiBlurred5),
      back: <StyleBack>{img(Hawaii)} Hawaii</StyleBack>,
    },
    // { front: "Idaho", back: "No" },
    // { front: "Illinois", back: "Yes" },
    // { front: "Indiana", back: "Yes" },
    {
      front: img(IowaBlurred1),
      back: <StyleBack>{img(Iowa1)} Iowa</StyleBack>,
    },
    {
      front: img(IowaBlurred2),
      back: <StyleBack>{img(Iowa2)} Iowa</StyleBack>,
    },
    {
      front: img(IowaBlurred3),
      back: <StyleBack>{img(Iowa2)} Iowa</StyleBack>,
    },
    // { front: "Kansas", back: "Yes" },
    // { front: "Kentucky", back: "Yes" },
    // { front: "Louisiana", back: "Yes" },
    // { front: "Maine", back: "Yes" },
    // { front: "Maryland", back: "Yes" },
    // { front: "Massachusetts", back: "Yes" },
    // { front: "Michigan", back: "Yes" },
    {
      front: img(Minnesota1),
      back: <StyleBack>{img(Minnesota)} Minnesota</StyleBack>,
    },
    {
      front: img(MississippiBlurred1),
      back: <StyleBack>{img(Mississippi1)} Mississippi</StyleBack>,
    },
    {
      front: img(MississippiBlurred2),
      back: <StyleBack>{img(Mississippi2)} Mississippi</StyleBack>,
    },
    {
      front: img(MississippiBlurred3),
      back: <StyleBack>{img(Mississippi2)} Mississippi</StyleBack>,
    },
    {
      front: img(MississippiBlurred4),
      back: <StyleBack>{img(Mississippi2)} Mississippi</StyleBack>,
    },
    {
      front: img(MississippiBlurred5),
      back: <StyleBack>{img(Mississippi2)} Mississippi</StyleBack>,
    },
    {
      front: img(MississippiBlurred6),
      back: <StyleBack>{img(Mississippi2)} Mississippi</StyleBack>,
    },
    {
      front: img(MissouriBlurred1),
      back: <StyleBack>{img(Missouri1)} Missouri</StyleBack>,
    },
    {
      front: img(MissouriBlurred2),
      back: <StyleBack>{img(Missouri2)} Missouri</StyleBack>,
    },
    // { front: "Montana", back: "No" },
    // { front: "Nebraska", back: "Yes" },
    {
      front: img(Nevada1),
      back: <StyleBack>{img(Nevada)} Nevada</StyleBack>,
    },
    {
      front: img(Nevada2),
      back: <StyleBack>{img(Nevada)} Nevada</StyleBack>,
    },
    {
      front: img(Nevada3),
      back: <StyleBack>{img(Nevada)} Nevada</StyleBack>,
    },
    {
      front: img(Nevada4),
      back: <StyleBack>{img(Nevada)} Nevada</StyleBack>,
    },
    {
      front: img(Nevada5),
      back: <StyleBack>{img(Nevada)} Nevada</StyleBack>,
    },
    // { front: "New Hampshire", back: "Yes" },
    // { front: "New Jersey", back: "Yes" },
    {
      front: img(NewMexicoBlurredA),
      back: <StyleBack> {img(NewMexico)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurredB),
      back: <StyleBack> {img(NewMexico)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurredC),
      back: <StyleBack> {img(NewMexico)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurredD),
      back: <StyleBack> {img(NewMexico)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurred1A),
      back: <StyleBack> {img(NewMexico1)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurred1B),
      back: <StyleBack> {img(NewMexico1)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurred2A),
      back: <StyleBack> {img(NewMexico2)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurred2B),
      back: <StyleBack> {img(NewMexico2)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurred2C),
      back: <StyleBack> {img(NewMexico2)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurred2D),
      back: <StyleBack> {img(NewMexico2)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurred3A),
      back: <StyleBack> {img(NewMexico3)} New Mexico</StyleBack>,
    },
    {
      front: img(NewMexicoBlurred3B),
      back: <StyleBack> {img(NewMexico3)} New Mexico</StyleBack>,
    },
    {
      front: img(NewYorkBlurred1),
      back: <StyleBack> {img(NY)} New York</StyleBack>,
    },
    {
      front: img(NewYorkBlurred2),
      back: <StyleBack> {img(NY)} New York</StyleBack>,
    },
    {
      front: img(NewYorkBlurred3),
      back: <StyleBack> {img(NY)} New York</StyleBack>,
    },
    {
      front: img(NewYorkBlurred4),
      back: <StyleBack> {img(NY)} New York</StyleBack>,
    },
    {
      front: img(NewYorkBlurred5),
      back: <StyleBack> {img(NY)} New York</StyleBack>,
    },
    // { front: "North Carolina", back: "Yes" },
    {
      front: img(NorthDakotaBlurred1),
      back: <StyleBack> {img(NorthDakota)} North Dakota</StyleBack>,
    },
    {
      front: img(NorthDakotaBlurred2),
      back: <StyleBack> {img(NorthDakota)} North Dakota</StyleBack>,
    },
    {
      front: img(NorthDakotaBlurred3),
      back: <StyleBack> {img(NorthDakota)} North Dakota</StyleBack>,
    },
    {
      front: img(NorthDakotaBlurred4),
      back: <StyleBack> {img(NorthDakota)} North Dakota</StyleBack>,
    },
    {
      front: img(NorthDakotaBlurred5),
      back: <StyleBack> {img(NorthDakota)} North Dakota</StyleBack>,
    },
    // { front: "Ohio", back: "Yes" },
    {
      front: img(Oklahoma1),
      back: <StyleBack>{img(Oklahoma)} Oklahoma</StyleBack>,
    },
    {
      front: img(Oklahoma2),
      back: <StyleBack>{img(Oklahoma)} Oklahoma</StyleBack>,
    },
    {
      front: img(Oklahoma3),
      back: <StyleBack>{img(Oklahoma)} Oklahoma</StyleBack>,
    },
    {
      front: img(Oklahoma4),
      back: <StyleBack>{img(Oklahoma)} Oklahoma</StyleBack>,
    },
    // { front: "Oregon", back: "Yes" },
    {
      front: img(PennsylvaniaBlurred1),
      back: <StyleBack>{img(Pennsylvania)} Pennsylvania</StyleBack>,
    },
    {
      front: img(PennsylvaniaBlurred2),
      back: <StyleBack>{img(Pennsylvania)} Pennsylvania</StyleBack>,
    },
    {
      front: img(PennsylvaniaBlurred3),
      back: <StyleBack>{img(Pennsylvania)} Pennsylvania</StyleBack>,
    },
    {
      front: img(PennsylvaniaBlurred4),
      back: <StyleBack>{img(Pennsylvania)} Pennsylvania</StyleBack>,
    },
    {
      front: img(PennsylvaniaBlurred5),
      back: <StyleBack>{img(Pennsylvania)} Pennsylvania</StyleBack>,
    },
    // { front: "Pennsylvania", back: "Yes" },
    // { front: "Rhode Island", back: "Yes" },
    // { front: "South Carolina", back: "Yes" },
    // { front: "South Dakota", back: "Yes" },
    // { front: "Tennessee", back: "Yes" },
    {
      front: img(TexasBlurred1),
      back: <StyleBack>{img(Texas2)} Texas</StyleBack>,
    },
    {
      front: img(TexasBlurred2),
      back: <StyleBack>{img(Texas1)} Texas</StyleBack>,
    },
    {
      front: img(TexasBlurred3),
      back: <StyleBack>{img(Texas2)} Texas</StyleBack>,
    },
    {
      front: img(TexasBlurred4),
      back: <StyleBack>{img(Texas1)} Texas</StyleBack>,
    },
    {
      front: img(TexasBlurred5),
      back: <StyleBack>{img(Texas1)} Texas</StyleBack>,
    },
    // { front: "Utah", back: "Yes" },
    // { front: "Vermont", back: "Yes" },
    // { front: "Virginia", back: "Yes" },
    // { front: "Washington", back: "Yes" },
    {
      front: img(WashingtonBlurred1),
      back: <StyleBack>{img(Washington)} Washington</StyleBack>,
    },
    {
      front: img(WashingtonBlurred2),
      back: <StyleBack>{img(Washington)} Washington</StyleBack>,
    },
    {
      front: img(WashingtonBlurred3),
      back: <StyleBack>{img(Washington)} Washington</StyleBack>,
    },
    {
      front: img(WashingtonBlurred4),
      back: <StyleBack>{img(Washington)} Washington</StyleBack>,
    },
    {
      front: img(WashingtonBlurred5),
      back: <StyleBack>{img(Washington)} Washington</StyleBack>,
    },
    // { front: "West Virginia", back: "Yes" },
    // { front: "Wisconsin", back: "Yes" },
    // { front: "Wyoming", back: "No" },
    // { front: "Washington D.C.", back: "Yes" },
    // { front: "Puerto Rico", back: "Yes" },
  ];

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Blurred License Plates</h1>
        <Separator />
        <TrainingModal cards={cards} />
        <MapButton url="https://www.geoguessr.com/maps/605d6b90bc033e0001685f75" />
      </Head>
      <Paragraph>
        The license plates, even blurred, can help to guess the state. Be careful though, each state can have multiple
        license plates, as laws evolve; and each license plate can be found in other states, as cars are moving objects.
        As a security, try to find multiple plates and always check the surroundings to confirm the state.
      </Paragraph>
      <ImageMagnifier src={licensePlatesMap} alt="Map of license plates in each U.S. state" />
      <Paragraph>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ flexGrow: "1" }}>
            In general, southern states do not require front license plates, while northern states do. However, there
            are exceptions which are useful to know.
          </p>
          <TrainingRequirements />
        </div>
      </Paragraph>
      <ImageMagnifier
        src={requiresFrontLicense2}
        alt="Map of U.S. showing states that require front license plates"
        style={{ maxWidth: "80rem" }}
      />
    </Tip>
  );
}

export default LicensePlate;
