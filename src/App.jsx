import { useState } from "react";
import { emilyInParis } from "./utils/series";

function App() {
  const [indexEp, setIndexEp] = useState(0);
  const [indexSeas, setIndexSeas] = useState(0);

  const seasons = emilyInParis.seasons;

  console.log(`saison : ${indexSeas + 1} episode : ${indexEp + 1}`);

  return (
    <div className="h-screen flex w-full justify-center items-center flex-col gap-10">
      <h1 className="text-white font-bold text-4xl">Série pour les bg</h1>
      <form>
        <select
          onChange={(e) => {
            setIndexSeas(e.target.selectedIndex);
            setIndexEp(0); // Réinitialiser l'épisode au changement de saison
          }}
        >
          {seasons.map((season, index) => (
            <option key={index} value={index}>
              Saison {index + 1}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => {
            setIndexEp(e.target.selectedIndex);
          }}
          name=""
          id=""
        >
          {seasons[indexSeas].episodes.map((episode, index) => (
            <option key={index} value={index}>
              Episode {index + 1}
            </option>
          ))}
        </select>
      </form>
      <video key={`${indexSeas}-${indexEp}`} width="640" height="360" controls>
        <source src={seasons[indexSeas].episodes[indexEp]} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de cette vidéo.
      </video>
    </div>
  );
}

export default App;
