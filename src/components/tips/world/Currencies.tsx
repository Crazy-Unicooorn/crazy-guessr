import Separator from "../../common/Separator";
import { Tip, Head, Paragraph, Card } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";

function Currencies() {
  const worldCurrencies: Card[] = [];

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">World Currencies</h1>
        <Separator />
        <TrainingModal cards={worldCurrencies} />
      </Head>
      <Paragraph>test</Paragraph>
      {/* <ImageMagnifier src={} alt="World map of country names in their own languages" /> */}
    </Tip>
  );
}

export default Currencies;
