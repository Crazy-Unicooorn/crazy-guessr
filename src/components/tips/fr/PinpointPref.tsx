import Separator from "../../common/Separator";
import { Head, Tip } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import mapFR from "../../../assets/img/fr/location_map.png";
import mapPrefs from "../../../assets/img/fr/carte_des_prefectures.png";
import generatePinpointableCards, { CityData } from "../../common/PinpointableCards";
import ImageMagnifier from "../../common/ImageMagnifier";

function PinpointPref() {
  const prefData: CityData[] = [
    { cityName: "Bourg-en-Bresse", top: 50.431, left: 69.798 },
    { cityName: "Laon", top: 18.444, left: 59.643 },
    { cityName: "Moulins", top: 47.003, left: 57.801 },
    { cityName: "Digne-les-Bains", top: 70.548, left: 76.174 },
    { cityName: "Gap", top: 66.108, left: 75.176 },
    { cityName: "Nice", top: 74.27, left: 82.736 },
    { cityName: "Privas", top: 64.429, left: 65.818 },
    { cityName: "Charleville-Mézières", top: 16.453, left: 66.582 },
    { cityName: "Foix", top: 81.283, left: 46.879 },
    { cityName: "Troyes", top: 30.487, left: 62.519 },
    { cityName: "Carcassonne", top: 78.897, left: 51.591 },
    { cityName: "Rodez", top: 68.095, left: 53.001 },
    { cityName: "Marseille", top: 78.127, left: 70.737 },
    { cityName: "Caen", top: 22.074, left: 34.364 },
    { cityName: "Aurillac", top: 62.616, left: 52.15 },
    { cityName: "Angoulême", top: 55.72, left: 37.718 },
    { cityName: "La Rochelle", top: 50.862, left: 29.422 },
    { cityName: "Bourges", top: 42.061, left: 51.871 },
    { cityName: "Tulle", top: 59.373, left: 47.925 },
    { cityName: "Ajaccio", top: 91.185, left: 92.002 },
    { cityName: "Bastia", top: 83.81, left: 96.515 },
    { cityName: "Dijon", top: 39.587, left: 68.476 },
    { cityName: "Saint-Brieuc", top: 28.442, left: 19.239 },
    { cityName: "Guéret", top: 50.757, left: 48.534 },
    { cityName: "Périgueux", top: 60.151, left: 41.254 },
    { cityName: "Besançon", top: 40.55, left: 74.819 },
    { cityName: "Valence", top: 70.37, left: 42.344 },
    { cityName: "Évreux", top: 23.587, left: 44.003 },
    { cityName: "Chartres", top: 29.079, left: 46.129 },
    { cityName: "Quimper", top: 33.365, left: 10.782 },
    { cityName: "Nîmes", top: 72.981, left: 64.304 },
    { cityName: "Toulouse", top: 75.196, left: 45.847 },
    { cityName: "Auch", top: 74.807, left: 40.434 },
    { cityName: "Bordeaux", top: 63.45, left: 33.041 },
    { cityName: "Montpellier", top: 75.134, left: 61.248 },
    { cityName: "Rennes", top: 32.246, left: 26.071 },
    { cityName: "Châteauroux", top: 44.669, left: 47.407 },
    { cityName: "Tours", top: 39.116, left: 41.065 },
    { cityName: "Grenoble", top: 60.124, left: 72.952 },
    { cityName: "Lons-le-Saunier", top: 45.958, left: 71.86 },
    { cityName: "Mont-de-Marsan", top: 72.474, left: 33.541 },
    { cityName: "Blois", top: 37.209, left: 45.109 },
    { cityName: "Saint-Étienne", top: 57.772, left: 64.492 },
    { cityName: "Le Puy-en-Velay", top: 61.492, left: 61.297 },
    { cityName: "Nantes", top: 40.788, left: 26.874 },
    { cityName: "Orléans", top: 34.265, left: 48.761 },
    { cityName: "Cahors", top: 67.167, left: 45.826 },
    { cityName: "Agen", top: 69.495, left: 40.624 },
    { cityName: "Mende", top: 66.492, left: 58.864 },
    { cityName: "Angers", top: 38.354, left: 33.193 },
    { cityName: "Saint-Lô", top: 22.72, left: 29.8 },
    { cityName: "Châlons-en-Champagne", top: 24.222, left: 64.332 },
    { cityName: "Chaumont", top: 32.278, left: 69.232 },
    { cityName: "Laval", top: 32.64, left: 31.835 },
    { cityName: "Nancy", top: 26.735, left: 75.846 },
    { cityName: "Bar-le-Duc", top: 25.984, left: 69.413 },
    { cityName: "Vannes", top: 36.619, left: 19.23 },
    { cityName: "Metz", top: 22.669, left: 75.803 },
    { cityName: "Nevers", top: 42.929, left: 56.688 },
    { cityName: "Lille", top: 8.267, left: 56.06 },
    { cityName: "Beauvais", top: 19.675, left: 49.921 },
    { cityName: "Alençon", top: 29.241, left: 37.291 },
    { cityName: "Arras", top: 11.532, left: 54.304 },
    { cityName: "Clermont-Ferrand", top: 54.479, left: 56.246 },
    { cityName: "Pau", top: 78.087, left: 34.367 },
    { cityName: "Tarbes", top: 78.735, left: 37.18 },
    { cityName: "Perpignan", top: 83.833, left: 55.03 },
    { cityName: "Strasbourg", top: 27.873, left: 85.774 },
    { cityName: "Colmar", top: 32.561, left: 83.259 },
    { cityName: "Lyon", top: 54.677, left: 67.351 },
    { cityName: "Vesoul", top: 36.931, left: 75.666 },
    { cityName: "Mâcon", top: 49.46, left: 67.291 },
    { cityName: "Le Mans", top: 33.294, left: 37.955 },
    { cityName: "Chambéry", top: 56.511, left: 74.182 },
    { cityName: "Annecy", top: 53.341, left: 75.503 },
    { cityName: "Paris", top: 25.175, left: 51.596 },
    { cityName: "Rouen", top: 19.59, left: 43.687 },
    { cityName: "Melun", top: 28.193, left: 53.539 },
    { cityName: "Versailles", top: 25.669, left: 50.216 },
    { cityName: "Niort", top: 49.286, left: 33.783 },
    { cityName: "Amiens", top: 15.315, left: 51.252 },
    { cityName: "Albi", top: 72.114, left: 50.29 },
    { cityName: "Montauban", top: 71.265, left: 45.285 },
    { cityName: "Toulon", top: 79.762, left: 74.244 },
    { cityName: "Avignon", top: 71.918, left: 67.141 },
    { cityName: "La Roche-sur-Yon", top: 46.003, left: 27.672 },
    { cityName: "Poitiers", top: 46.847, left: 38.831 },
    { cityName: "Limoges", top: 53.958, left: 44.694 },
    { cityName: "Épinal", top: 31.68, left: 77.542 },
    { cityName: "Auxerre", top: 35.262, left: 59.284 },
    { cityName: "Belfort", top: 36.786, left: 80.144 },
    { cityName: "Évry (Courcouronnes)", top: 27.392, left: 52.085 },
    { cityName: "Nanterre", top: 24.852, left: 50.656 },
    { cityName: "Bobigny", top: 24.669, left: 52.143 },
    { cityName: "Créteil", top: 25.926, left: 52.235 },
    { cityName: "Pontoise", top: 23.325, left: 50.005 },
  ];

  const cards = generatePinpointableCards(prefData, mapFR);

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Préfectures</h1>
        <Separator />
        <TrainingModal cards={cards} displayFrontOnFrontSideOnly />
        {/* <MapButton url="https://www.geoguessr.com/maps/604657abb3894900011da5bc" /> */}
      </Head>
      <ImageMagnifier src={mapPrefs} alt="Map of France with Préfectures written" />
    </Tip>
  );
}

export default PinpointPref;
