import ImageMagnifier from "../../common/ImageMagnifier";
import Separator from "../../common/Separator";
import { Head, Paragraph, Tip } from "../../common/TipsBuilder";
import Map from "../../../assets/img/jp/Japan_telephone_code_areas.svg";

function AreaCodesJP() {
  return (
    <Tip>
      <Head>
        <h1>Area Codes</h1>
        <Separator />
      </Head>
      <Paragraph>
        The leading 0 is omitted when calling from outside Japan. Cell phones use the dialing codes of 070, 080 or 090.
        IP-based phone services use the 050 dialing code. Area codes ending with a 0 are often not regional, most
        notably 0120.
      </Paragraph>
      <ImageMagnifier src={Map} alt="Map of Japan with area codes" style={{ backgroundColor: "var(--purple-200)" }} />
    </Tip>
  );
}

export default AreaCodesJP;
