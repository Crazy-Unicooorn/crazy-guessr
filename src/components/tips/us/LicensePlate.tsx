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

import Alabama1 from "../../../assets/img/us/plates/blurred/alabama1.jpg";
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

function LicensePlate() {
  const StyleBack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 6rem;
    max-height: 100%;
  `;
  const styleImage = { maxHeight: "100%", borderRadius: "0.5rem" };
  const cards: Card[] = [
    {
      front: <img src={Alabama1} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Alabama} alt="A license plate" style={styleImage} />
          Alabama
        </StyleBack>
      ),
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
      front: <img src={IowaBlurred1} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Iowa1} alt="A license plate" style={styleImage} />
          Iowa
        </StyleBack>
      ),
    },
    {
      front: <img src={IowaBlurred2} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Iowa2} alt="A license plate" style={styleImage} />
          Iowa
        </StyleBack>
      ),
    },
    {
      front: <img src={IowaBlurred3} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Iowa2} alt="A license plate" style={styleImage} />
          Iowa
        </StyleBack>
      ),
    },
    // { front: "Kansas", back: "Yes" },
    // { front: "Kentucky", back: "Yes" },
    // { front: "Louisiana", back: "Yes" },
    // { front: "Maine", back: "Yes" },
    // { front: "Maryland", back: "Yes" },
    // { front: "Massachusetts", back: "Yes" },
    // { front: "Michigan", back: "Yes" },
    {
      front: <img src={Minnesota1} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Minnesota} alt="A license plate" style={styleImage} />
          Minnesota
        </StyleBack>
      ),
    },
    {
      front: <img src={MississippiBlurred1} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Mississippi1} alt="A license plate" style={styleImage} />
          Mississippi
        </StyleBack>
      ),
    },
    {
      front: <img src={MississippiBlurred2} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Mississippi2} alt="A license plate" style={styleImage} />
          Mississippi
        </StyleBack>
      ),
    },
    {
      front: <img src={MissouriBlurred1} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Missouri1} alt="A license plate" style={styleImage} />
          Missouri
        </StyleBack>
      ),
    },
    {
      front: <img src={MissouriBlurred2} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Missouri2} alt="A license plate" style={styleImage} />
          Missouri
        </StyleBack>
      ),
    },
    // { front: "Montana", back: "No" },
    // { front: "Nebraska", back: "Yes" },
    {
      front: <img src={Nevada1} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Nevada} alt="A license plate" style={styleImage} />
          Nevada
        </StyleBack>
      ),
    },
    {
      front: <img src={Nevada2} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Nevada} alt="A license plate" style={styleImage} />
          Nevada
        </StyleBack>
      ),
    },
    {
      front: <img src={Nevada3} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Nevada} alt="A license plate" style={styleImage} />
          Nevada
        </StyleBack>
      ),
    },
    {
      front: <img src={Nevada4} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Nevada} alt="A license plate" style={styleImage} />
          Nevada
        </StyleBack>
      ),
    },
    // { front: "New Hampshire", back: "Yes" },
    // { front: "New Jersey", back: "Yes" },
    // { front: "New Mexico", back: "Yes" },
    // { front: "New York", back: "Yes" },
    // { front: "North Carolina", back: "Yes" },
    // { front: "North Dakota", back: "Yes" },
    // { front: "Ohio", back: "Yes" },
    {
      front: <img src={Oklahoma1} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Oklahoma} alt="A license plate" style={styleImage} />
          Oklahoma
        </StyleBack>
      ),
    },
    {
      front: <img src={Oklahoma2} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Oklahoma} alt="A license plate" style={styleImage} />
          Oklahoma
        </StyleBack>
      ),
    },
    {
      front: <img src={Oklahoma3} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Oklahoma} alt="A license plate" style={styleImage} />
          Oklahoma
        </StyleBack>
      ),
    },
    {
      front: <img src={Oklahoma4} alt="A blurred license plate" style={styleImage} />,
      back: (
        <StyleBack>
          <img src={Oklahoma} alt="A license plate" style={styleImage} />
          Oklahoma
        </StyleBack>
      ),
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
