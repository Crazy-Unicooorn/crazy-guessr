import InternetDomainsImg from "../../../assets/img/world/world_countries_iso.gif";
import TrainingModal from "../../common/TrainingModal";
import Separator from "../../common/Separator";
import Button from "../../common/Button";
import LocationIcon from "../../../assets/icons/general/location";
import { Card, Head, Tip } from "../../common/TipsBuilder";

function InternetDomains() {
  const InternetDomain: Card[] = [
    { front: ".ad", back: "Andorra" },
    { front: ".ad", back: "Andorra" },
    { front: ".ae", back: "United Arab Emirates" },
    { front: ".af", back: "Afghanistan" },
    { front: ".al", back: "Albania" },
    { front: ".aq", back: "Antarctica" },
    { front: ".ar", back: "Argentina" },
    { front: ".as", back: "American Samoa" },
    { front: ".at", back: "Austria" },
    { front: ".au", back: "Australia" },
    { front: ".bd", back: "Bangladesh" },
    { front: ".be", back: "Belgium" },
    { front: ".bg", back: "Bulgaria" },
    { front: ".bm", back: "Bermuda" },
    { front: ".bo", back: "Bolivia" },
    { front: ".br", back: "Brazil" },
    { front: ".bt", back: "Bhutan" },
    { front: ".bw", back: "Botswana" },
    { front: ".by", back: "Belarus" },
    { front: ".ca", back: "Canada" },
    { front: ".ch", back: "Switzerland" },
    { front: ".cl", back: "Chile" },
    { front: ".cn", back: "China" },
    { front: ".co", back: "Colombia" },
    { front: ".cr", back: "Costa Rica" },
    { front: ".cw", back: "Curaçao" },
    { front: ".cz", back: "Czech Republic" },
    { front: ".de", back: "Germany" },
    { front: ".dk", back: "Denmark" },
    { front: ".do", back: "Dominican Republic" },
    { front: ".ec", back: "Ecuador" },
    { front: ".ee", back: "Estonia" },
    { front: ".eg", back: "Egypt" },
    { front: ".es", back: "Spain" },
    { front: ".fi", back: "Finland" },
    { front: ".fk", back: "Falkland Islands" },
    { front: ".fo", back: "Faroe Islands" },
    { front: ".fr", back: "France" },
    { front: ".gb", back: "United Kingdom" },
    { front: ".uk", back: "United Kingdom" },
    { front: ".co.uk", back: "United Kingdom" },
    { front: ".gh", back: "Ghana" },
    { front: ".gi", back: "Gibraltar" },
    { front: ".gl", back: "Greenland" },
    { front: ".gr", back: "Greece" },
    { front: ".gs", back: "South Georgia and the South Sandwich Islands" },
    { front: ".gt", back: "Guatemala" },
    { front: ".gu", back: "Guam" },
    { front: ".hk", back: "Hong Kong" },
    { front: ".hr", back: "Croatia" },
    { front: ".hu", back: "Hungary" },
    { front: ".id", back: "Indonesia" },
    { front: ".ie", back: "Ireland" },
    { front: ".il", back: "Israel" },
    { front: ".im", back: "Isle of Man" },
    { front: ".in", back: "India" },
    { front: ".io", back: "British Indian Ocean Territory" },
    { front: ".iq", back: "Iraq" },
    { front: ".is", back: "Iceland" },
    { front: ".it", back: "Italy" },
    { front: ".je", back: "Jersey" },
    { front: ".jo", back: "Jordan" },
    { front: ".jp", back: "Japan" },
    { front: ".ke", back: "Kenya" },
    { front: ".kg", back: "Kyrgyzstan" },
    { front: ".kh", back: "Cambodia" },
    { front: ".kr", back: "South Korea" },
    { front: ".la", back: "Laos" },
    { front: ".lb", back: "Lebanon" },
    { front: ".lk", back: "Sri Lanka" },
    { front: ".ls", back: "Lesotho" },
    { front: ".lt", back: "Lithuania" },
    { front: ".lu", back: "Luxembourg" },
    { front: ".lv", back: "Latvia" },
    { front: ".mc", back: "Monaco" },
    { front: ".mg", back: "Madagascar" },
    { front: ".me", back: "Montenegro" },
    { front: ".mk", back: "North Macedonia" },
    { front: ".ml", back: "Mali" },
    { front: ".mn", back: "Mongolia" },
    { front: ".mo", back: "Macao" },
    { front: ".mp", back: "Northern Mariana Islands" },
    { front: ".mq", back: "Martinique" },
    { front: ".mt", back: "Malta" },
    { front: ".mx", back: "Mexico" },
    { front: ".my", back: "Malaysia" },
    { front: ".na", back: "Namibia" },
    { front: ".ng", back: "Nigeria" },
    { front: ".nl", back: "Netherlands" },
    { front: ".no", back: "Norway" },
    { front: ".np", back: "Nepal" },
    { front: ".nz", back: "New Zealand" },
    { front: ".pa", back: "Panama" },
    { front: ".pe", back: "Peru" },
    { front: ".ph", back: "Philippines" },
    { front: ".pk", back: "Pakistan" },
    { front: ".pl", back: "Poland" },
    { front: ".pm", back: "Saint Pierre and Miquelon" },
    { front: ".pn", back: "Pitcairn" },
    { front: ".pr", back: "Puerto Rico" },
    { front: ".pt", back: "Portugal" },
    { front: ".qa", back: "Qatar" },
    { front: ".re", back: "Reunion" },
    { front: ".ro", back: "Romania" },
    { front: ".rs", back: "Serbia" },
    { front: ".ru", back: "Russia" },
    { front: ".rw", back: "Rwanda" },
    { front: ".se", back: "Sweden" },
    { front: ".sg", back: "Singapore" },
    { front: ".si", back: "Slovenia" },
    { front: ".sk", back: "Slovakia" },
    { front: ".sm", back: "San Marino" },
    { front: ".sn", back: "Senegal" },
    { front: ".sy", back: "Syria" },
    { front: ".sz", back: "Eswatini / Swaziland" },
    { front: ".th", back: "Thailand" },
    { front: ".tn", back: "Tunisia" },
    { front: ".tr", back: "Turkey" },
    { front: ".tw", back: "Taiwan" },
    { front: ".tz", back: "Tanzania" },
    { front: ".ua", back: "Ukraine" },
    { front: ".ug", back: "Uganda" },
    { front: ".us", back: "United States" },
    { front: ".uy", back: "Uruguay" },
    { front: ".vi", back: "U.S. Virgin Islands" },
    { front: ".vn", back: "Vietnam" },
    { front: ".vu", back: "Vanuatu" },
    { front: ".xv", back: "Svalbard" },
    { front: ".za", back: "South Africa" },
  ];

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Internet Domains</h1>
        <Separator />
        <TrainingModal cards={InternetDomain} />
        <Button
          text="GeoGuessr Map"
          hasLink
          externalLink="https://www.geoguessr.com/maps/604657abb3894900011da5bc"
          backgroundColor="var(--pastel-green)"
          hasIconRight
          iconRight={<LocationIcon size={24} />}
          collapseText
          boop={{
            y: -4,
            timing: 200,
            springConfig: { tension: 300, friction: 10 },
          }}
          // style={{ zIndex: -1 }}
        />
      </Head>
      <img src={InternetDomainsImg} alt="World map of Internet domains" className="tipimg" />
    </Tip>
  );
}

export default InternetDomains;
