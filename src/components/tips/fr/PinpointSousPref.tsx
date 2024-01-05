import Separator from "../../common/Separator";
import { Head, Paragraph, Tip } from "../../common/TipsBuilder";
import TrainingModal from "../../common/TrainingModal";
import mapFR from "../../../assets/img/fr/location_map.png";
import generatePinpointableCards, { CityData } from "../../common/PinpointableCards";
// import ImageMagnifier from "../../common/ImageMagnifier";

function PinpointSousPref() {
  const prefData: CityData[] = [
    { cityName: "Belley", top: 54.675, left: 72.709 },
    { cityName: "Gex", top: 49.206, left: 75.049 },
    { cityName: "Nantua", top: 50.921, left: 72.191 },
    { cityName: "Château-Thierry", top: 23.368, left: 58.247 },
    { cityName: "Saint-Quentin", top: 15.727, left: 57.508 },
    { cityName: "Soissons", top: 20.18, left: 57.737 },
    { cityName: "Vervins", top: 15.849, left: 61.456 },
    { cityName: "Montluçon", top: 49.143, left: 53.18 },
    { cityName: "Vichy", top: 51.172, left: 58.391 },
    { cityName: "Barcelonnette", top: 67.746, left: 78.817 },
    { cityName: "Castellane", top: 72.881, left: 77.936 },
    { cityName: "Forcalquier", top: 71.817, left: 73.289 },
    { cityName: "Briançon", top: 62.897, left: 78.703 },
    { cityName: "Grasse", top: 74.685, left: 80.54 },
    { cityName: "Largentière", top: 66.251, left: 63.887 },
    { cityName: "Tournon-sur-Rhône", top: 61.265, left: 67.296 },
    { cityName: "Rethel", top: 18.955, left: 64.351 },
    { cityName: "Sedan", top: 17.124, left: 67.976 },
    { cityName: "Vouziers", top: 20.019, left: 66.463 },
    { cityName: "Pamiers", top: 79.844, left: 46.904 },
    { cityName: "Saint-Girons", top: 81.098, left: 43.961 },
    { cityName: "Bar-sur-Aube", top: 31.114, left: 66.496 },
    { cityName: "Nogent-sur-Seine", top: 28.632, left: 58.877 },
    { cityName: "Limoux", top: 80.41, left: 50.751 },
    { cityName: "Narbonne", top: 79.193, left: 55.719 },
    { cityName: "Millau", top: 70.497, left: 56.188 },
    { cityName: "Villefranche-de-Rouergue", top: 68.071, left: 49.583 },
    { cityName: "Aix-en-Provence", top: 75.926, left: 71.174 },
    { cityName: "Arles", top: 74.505, left: 66.004 },
    { cityName: "Istres", top: 76.056, left: 68.284 },
    { cityName: "Bayeux", top: 21.156, left: 32.254 },
    { cityName: "Lisieux", top: 22.423, left: 38.136 },
    { cityName: "Vire Normandie", top: 25.347, left: 31.081 },
    { cityName: "Mauriac", top: 59.82, left: 51.479 },
    { cityName: "Saint-Flour", top: 61.585, left: 56.283 },
    { cityName: "Cognac", top: 55.278, left: 34.626 },
    { cityName: "Confolens", top: 52.244, left: 40.97 },
    { cityName: "Jonzac", top: 57.651, left: 33.964 },
    { cityName: "Rochefort", top: 52.934, left: 30.589 },
    { cityName: "Saintes", top: 54.807, left: 32.693 },
    { cityName: "Saint-Jean-d'Angély", top: 52.913, left: 33.411 },
    { cityName: "Saint-Amand-Montrond", top: 45.497, left: 52.563 },
    { cityName: "Vierzon", top: 40.743, left: 49.8 },
    { cityName: "Brive-la-Gaillarde", top: 60.392, left: 46.412 },
    { cityName: "Ussel", top: 56.685, left: 51.324 },
    { cityName: "Sartène", top: 94.087, left: 93.504 },
    { cityName: "Calvi", top: 85.069, left: 92.131 },
    { cityName: "Corte", top: 87.566, left: 94.624 },
    { cityName: "Beaune", top: 42.627, left: 67.335 },
    { cityName: "Montbard", top: 36.923, left: 64.158 },
    { cityName: "Dinan", top: 28.995, left: 23.732 },
    { cityName: "Guingamp", top: 27.976, left: 16.765 },
    { cityName: "Lannion", top: 26.357, left: 14.84 },
    { cityName: "Aubusson", top: 52.799, left: 50.427 },
    { cityName: "Bergerac", top: 63.323, left: 39.759 },
    { cityName: "Nontron", top: 56.862, left: 40.897 },
    { cityName: "Sarlat-la-Canéda", top: 62.952, left: 44.409 },
    { cityName: "Montbéliard", top: 38.003, left: 79.736 },
    { cityName: "Pontarlier", top: 43.751, left: 76.929 },
    { cityName: "Die", top: 64.251, left: 70.698 },
    { cityName: "Nyons", top: 67.992, left: 69.244 },
    { cityName: "Bernay", top: 22.966, left: 40.496 },
    { cityName: "Les Andelys", top: 21.471, left: 45.643 },
    { cityName: "Châteaudun", top: 32.659, left: 45.176 },
    { cityName: "Dreux", top: 26.32, left: 45.352 },
    { cityName: "Nogent-le-Rotrou", top: 30.27, left: 41.909 },
    { cityName: "Brest", top: 29.619, left: 8.31 },
    { cityName: "Châteaulin", top: 31.46, left: 10.823 },
    { cityName: "Morlaix", top: 27.833, left: 12.482 },
    { cityName: "Alès", top: 70.217, left: 62.537 },
    { cityName: "Le Vigan", top: 71.503, left: 59.529 },
    { cityName: "Muret", top: 76.569, left: 45.1 },
    { cityName: "Condom", top: 71.833, left: 39.066 },
    { cityName: "Mirande", top: 76.05, left: 39.267 },
    { cityName: "Arcachon", top: 65.156, left: 29.311 },
    { cityName: "Blaye", top: 60.688, left: 32.518 },
    { cityName: "Langon", top: 66.161, left: 35.13 },
    { cityName: "Lesparre-Médoc", top: 58.981, left: 30.774 },
    { cityName: "Libourne", top: 62.712, left: 35.165 },
    { cityName: "Béziers", top: 77.683, left: 57.064 },
    { cityName: "Lodève", top: 73.984, left: 57.718 },
    { cityName: "Fougères", top: 29.984, left: 29.114 },
    { cityName: "Redon", top: 36.653, left: 23.514 },
    { cityName: "Saint-Malo", top: 27.169, left: 23.994 },
    { cityName: "Issoudun", top: 43.352, left: 49.325 },
    { cityName: "La Châtre", top: 46.836, left: 49.286 },
    { cityName: "Le Blanc", top: 46.347, left: 43.435 },
    { cityName: "Chinon", top: 41.267, left: 38.245 },
    { cityName: "Loches", top: 41.632, left: 43.008 },
    { cityName: "La Tour-du-Pin", top: 56.516, left: 71.171 },
    { cityName: "Vienne", top: 56.899, left: 67.562 },
    { cityName: "Dole", top: 41.979, left: 71.454 },
    { cityName: "Saint-Claude", top: 48.693, left: 73.819 },
    { cityName: "Dax", top: 74.22, left: 30.055 },
    { cityName: "Romorantin-Lanthenay", top: 39.444, left: 47.739 },
    { cityName: "Vendôme", top: 35.307, left: 43.453 },
    { cityName: "Montbrison", top: 56.119, left: 62.438 },
    { cityName: "Roanne", top: 52.037, left: 62.456 },
    { cityName: "Brioude", top: 59.103, left: 58.128 },
    { cityName: "Yssingeaux", top: 60.545, left: 62.808 },
    { cityName: "Châteaubriant", top: 36.029, left: 27.999 },
    { cityName: "Saint-Nazaire", top: 40.251, left: 22.697 },
    { cityName: "Montargis", top: 33.362, left: 54.003 },
    { cityName: "Pithiviers", top: 31.696, left: 50.962 },
    { cityName: "Figeac", top: 65.632, left: 49.568 },
    { cityName: "Gourdon", top: 64.407, left: 45.461 },
    { cityName: "Marmande", top: 66.667, left: 37.755 },
    { cityName: "Nérac", top: 70.132, left: 38.857 },
    { cityName: "Villeneuve-sur-Lot", top: 67.553, left: 41.166 },
    { cityName: "Florac Trois Rivières", top: 68.312, left: 59.488 },
    { cityName: "Cholet", top: 42.296, left: 31.141 },
    { cityName: "Saumur", top: 40.389, left: 36.215 },
    { cityName: "Segré-en-Anjou Bleu", top: 36.312, left: 31.197 },
    { cityName: "Avranches", top: 26.815, left: 28.121 },
    { cityName: "Cherbourg-en-Cotentin", top: 17.725, left: 26.424 },
    { cityName: "Coutances", top: 23.378, left: 27.562 },
  ];

  const cards = generatePinpointableCards(prefData, mapFR);

  return (
    <Tip>
      <Head>
        <h1 className="singleline-text">Sous-préfectures</h1>
        <Separator />
        <TrainingModal cards={cards} displayFrontOnFrontSideOnly />
        {/* <MapButton url="https://www.geoguessr.com/maps/604657abb3894900011da5bc" /> */}
      </Head>
      <Paragraph>
        <b>Sous-préfectures</b> are the second level of administrative divisions in France, below the prefectures. There
        are 233 sous-préfectures in France. Although they are not necessarily the most populated cities in their
        respective départements, they are well indicated both on the map and on the street signs.
      </Paragraph>
      {/* <ImageMagnifier src={mapSousPrefs} alt="Map of France with sous-préfectures written" /> */}
    </Tip>
  );
}

export default PinpointSousPref;
