import Separator from "../../common/Separator";
import { Card, Head, MapButton, Tip } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import StateMap from "../../../assets/img/my/malaysia-map-provinces.jpg";
import ImageMagnifier from "../../common/ImageMagnifier";

const PATH_TO_MY_STATE_FLAGS = "src/assets/img/my/StateFlags/";

const myStateFlags = {
  Johor: `${PATH_TO_MY_STATE_FLAGS}Johor.png`,
  Kedah: `${PATH_TO_MY_STATE_FLAGS}Kedah.png`,
  Kelantan: `${PATH_TO_MY_STATE_FLAGS}Kelantan.png`,
  "Kuala Lumpur": `${PATH_TO_MY_STATE_FLAGS}Kuala_Lumpur.png`,
  Labuan: `${PATH_TO_MY_STATE_FLAGS}Labuan.png`,
  Malacca: `${PATH_TO_MY_STATE_FLAGS}Malacca.png`,
  "Negeri Sembilan": `${PATH_TO_MY_STATE_FLAGS}Negeri_Sembilan.png`,
  Pahang: `${PATH_TO_MY_STATE_FLAGS}Pahang.png`,
  Penang: `${PATH_TO_MY_STATE_FLAGS}Penang.png`,
  Perak: `${PATH_TO_MY_STATE_FLAGS}Perak.png`,
  Perlis: `${PATH_TO_MY_STATE_FLAGS}Perlis.png`,
  Putrajaya: `${PATH_TO_MY_STATE_FLAGS}Putrajaya.png`,
  Sabah: `${PATH_TO_MY_STATE_FLAGS}Sabah.png`,
  Sarawak: `${PATH_TO_MY_STATE_FLAGS}Sarawak.png`,
  Selangor: `${PATH_TO_MY_STATE_FLAGS}Selangor.png`,
  Terengganu: `${PATH_TO_MY_STATE_FLAGS}Terengganu.png`,
  "Federal Territories": `${PATH_TO_MY_STATE_FLAGS}the_Federal_Territories_of_Malaysia.png`,
};

function MalaysiaStateFlags() {
  const imageStyle = { borderRadius: "0.5rem", maxHeight: "100%" };
  const imageAlt = "Flag of a state or Federal territory in Malaysia";

  const Cards: Card[] = Object.entries(myStateFlags).map(([state, path]) => ({
    front: <img src={path} alt={imageAlt} style={imageStyle} />,
    back: state,
  }));

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Flags of States and Federal Territories</h1>
        <Separator />
        <TrainingModal cards={Cards} />
        <MapButton url="https://www.geoguessr.com/maps/6339b2f6b9369bcb03114ec2" />
      </Head>
      <ImageMagnifier src={StateMap} alt="Map of Malaysian States" />
    </Tip>
  );
}

export default MalaysiaStateFlags;
