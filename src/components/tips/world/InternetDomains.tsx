import InternetDomainsImg from "../../../assets/img/world/world_countries_iso.gif";
import TrainingModal from "../../common/TrainingModal";
import Separator from "../../common/Separator";
import Button from "../../common/Button";
import LocationIcon from "../../../assets/icons/general/location";
import { Card, Head, Tip } from "../../common/TipsBuilder";
import generateRandomCard from "../../common/Logic/GenerateRandomCard";

function InternetDomainsCard() {
  const internetDomains: Card = {
    ".ad": "Andorra",
    ".ae": "United Arab Emirates",
    ".af": "Afghanistan",
    ".al": "Albania",
    ".aq": "Antarctica",
    ".ar": "Argentina",
    ".as": "American Samoa",
    ".at": "Austria",
    ".au": "Australia",
    ".bd": "Bangladesh",
    ".be": "Belgium",
    ".bg": "Bulgaria",
    ".bm": "Bermuda",
    ".bo": "Bolivia",
    ".br": "Brazil",
    ".bt": "Bhutan",
    ".bw": "Botswana",
    ".by": "Belarus",
    ".ca": "Canada",
    ".ch": "Switzerland",
    ".cl": "Chile",
    ".cn": "China",
    ".co": "Colombia",
    ".cr": "Costa Rica",
    ".cw": "Curaçao",
    ".cz": "Czech Republic",
    ".de": "Germany",
    ".dk": "Denmark",
    ".do": "Dominican Republic",
    ".ec": "Ecuador",
    ".ee": "Estonia",
    ".eg": "Egypt",
    ".es": "Spain",
    ".fi": "Finland",
    ".fk": "Falkland Islands",
    ".fo": "Faroe Islands",
    ".fr": "France",
    ".gb": "United Kingdom",
    ".uk": "United Kingdom",
    ".co.uk": "United Kingdom",
    ".gh": "Ghana",
    ".gi": "Gibraltar",
    ".gl": "Greenland",
    ".gr": "Greece",
    ".gs": "South Georgia and the South Sandwich Islands",
    ".gt": "Guatemala",
    ".gu": "Guam",
    ".hk": "Hong Kong",
    ".hr": "Croatia",
    ".hu": "Hungary",
    ".id": "Indonesia",
    ".ie": "Ireland",
    ".il": "Israel",
    ".im": "Isle of Man",
    ".in": "India",
    ".io": "British Indian Ocean Territory",
    ".iq": "Iraq",
    ".is": "Iceland",
    ".it": "Italy",
    ".je": "Jersey",
    ".jo": "Jordan",
    ".jp": "Japan",
    ".ke": "Kenya",
    ".kg": "Kyrgyzstan",
    ".kh": "Cambodia",
    ".kr": "South Korea",
    ".la": "Laos",
    ".lb": "Lebanon",
    ".lk": "Sri Lanka",
    ".ls": "Lesotho",
    ".lt": "Lithuania",
    ".lu": "Luxembourg",
    ".lv": "Latvia",
    ".mc": "Monaco",
    ".mg": "Madagascar",
    ".me": "Montenegro",
    ".mk": "North Macedonia",
    ".ml": "Mali",
    ".mn": "Mongolia",
    ".mo": "Macao",
    ".mp": "Northern Mariana Islands",
    ".mq": "Martinique",
    ".mt": "Malta",
    ".mx": "Mexico",
    ".my": "Malaysia",
    ".na": "Namibia",
    ".ng": "Nigeria",
    ".nl": "Netherlands",
    ".no": "Norway",
    ".np": "Nepal",
    ".nz": "New Zealand",
    ".pa": "Panama",
    ".pe": "Peru",
    ".ph": "Philippines",
    ".pk": "Pakistan",
    ".pl": "Poland",
    ".pm": "Saint Pierre and Miquelon",
    ".pn": "Pitcairn",
    ".pr": "Puerto Rico",
    ".pt": "Portugal",
    ".qa": "Qatar",
    ".re": "Reunion",
    ".ro": "Romania",
    ".rs": "Serbia",
    ".ru": "Russia",
    ".rw": "Rwanda",
    ".se": "Sweden",
    ".sg": "Singapore",
    ".si": "Slovenia",
    ".sk": "Slovakia",
    ".sm": "San Marino",
    ".sn": "Senegal",
    ".sy": "Syria",
    ".sz": "Eswatini / Swaziland",
    ".th": "Thailand",
    ".tn": "Tunisia",
    ".tr": "Turkey",
    ".tw": "Taiwan",
    ".tz": "Tanzania",
    ".ua": "Ukraine",
    ".ug": "Uganda",
    ".us": "United States",
    ".uy": "Uruguay",
    ".vi": "U.S. Virgin Islands",
    ".vn": "Vietnam",
    ".vu": "Vanuatu",
    ".xv": "Svalbard",
    ".za": "South Africa",
  };

  return generateRandomCard(internetDomains);
}

function InternetDomains() {
  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Internet Domains</h1>
        <Separator />
        <TrainingModal cardSource={InternetDomainsCard} />
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
