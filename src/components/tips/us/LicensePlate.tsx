import { styled } from "styled-components";
import ImageMagnifier from "../../common/ImageMagnifier";
import Separator from "../../common/Separator";
import { Tip, Head, MapButton, Card, Paragraph } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import requiresFrontLicense2 from "../../../assets/img/us/requiresFrontLicensePlate2.png";
import licensePlatesMap from "../../../assets/img/us/license-plates.png";
import Alabama from "../../../assets/img/us/plates/Alabama.png";
import Minnesota from "../../../assets/img/us/plates/Minnesota.jpg";
import Mississippi1 from "../../../assets/img/us/plates/Mississippi1.jpg";
import Mississippi2 from "../../../assets/img/us/plates/Mississippi2.jpg";
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

import Alabama1 from "../../../assets/img/us/plates/blurred/alabama1.jpg";
import Alabama2 from "../../../assets/img/us/plates/blurred/alabama2.jpg";
import Alabama3 from "../../../assets/img/us/plates/blurred/alabama3.jpg";
import Minnesota1 from "../../../assets/img/us/plates/blurred/Minnesota1.jpg";
import MississippiBlurred1 from "../../../assets/img/us/plates/blurred/Mississippi1.jpg";
import MississippiBlurred2 from "../../../assets/img/us/plates/blurred/Mississippi2.jpg";
import MissouriBlurred1 from "../../../assets/img/us/plates/blurred/Missouri1.jpg";
import MissouriBlurred2 from "../../../assets/img/us/plates/blurred/Missouri2.jpg";
import Nevada1 from "../../../assets/img/us/plates/blurred/Nevada1.jpg";
import Nevada2 from "../../../assets/img/us/plates/blurred/Nevada2.jpg";
import Nevada3 from "../../../assets/img/us/plates/blurred/Nevada3.jpg";
import Nevada4 from "../../../assets/img/us/plates/blurred/Nevada4.jpg";
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

function LicensePlate() {
  const StyleBack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    max-height: 8rem;
    height: 100%;
  `;
  const styleImage = { height: "100%", borderRadius: "0.5rem" };

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
    // { front: "Arizona", back: "Yes" },
    // { front: "Arkansas", back: "Yes" },
    // { front: "California", back: "Yes" },
    // { front: "Colorado", back: "Yes" },
    // { front: "Connecticut", back: "Yes" },
    // { front: "Delaware", back: "Yes" },
    // { front: "Florida", back: "Yes" },
    // { front: "Georgia", back: "Yes" },
    // { front: "Hawaii", back: "No" },
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
    // { front: "New York", back: "Yes" },
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
    // { front: "Pennsylvania", back: "Yes" },
    // { front: "Rhode Island", back: "Yes" },
    // { front: "South Carolina", back: "Yes" },
    // { front: "South Dakota", back: "Yes" },
    // { front: "Tennessee", back: "Yes" },
    // { front: "Texas", back: "Yes" },
    // { front: "Utah", back: "Yes" },
    // { front: "Vermont", back: "Yes" },
    // { front: "Virginia", back: "Yes" },
    // { front: "Washington", back: "Yes" },
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
        In general, southern states do not require front license plates, while northern states do. However, there are
        exceptions which are useful to know.
      </Paragraph>
      <ImageMagnifier src={requiresFrontLicense2} alt="Map of U.S. states that require front license plates" />
    </Tip>
  );
}

export default LicensePlate;
