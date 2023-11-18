import ImageMagnifier from "../../common/ImageMagnifier";
import Separator from "../../common/Separator";
import { Head, Paragraph, Tip } from "../../common/TipsBuilder";
import img1 from "../../../assets/img/fr/city_name_patterns/pattern1.png";
import img2 from "../../../assets/img/fr/city_name_patterns/pattern2.png";
import img3 from "../../../assets/img/fr/city_name_patterns/pattern3.png";
import img4 from "../../../assets/img/fr/city_name_patterns/pattern4.png";

function CityNamePatterns() {
  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">City Names Patterns</h1>
        <Separator />
      </Head>
      <Paragraph>
        Some patterns in city names can help you region guess. Below are some useful I have found.
        <br />
        &quot;$&quot; filters cities ending with the pattern, &quot;^&quot; filters cities starting with the pattern. So
        &quot;ac$&quot; will match &quot;Bellac&quot;, &quot;Bergerac&quot;,&quot;Nérac&quot;...
        <br />
        You can try any pattern on this website:{" "}
        <a href="http://ssz.fr/places/#//" target="_blank" rel="noreferrer">
          http://ssz.fr/places/#//
        </a>
      </Paragraph>
      <ImageMagnifier src={img1} alt="" />
      <ImageMagnifier src={img2} alt="" />
      <ImageMagnifier src={img3} alt="" />
      <ImageMagnifier src={img4} alt="" />
    </Tip>
  );
}

export default CityNamePatterns;
