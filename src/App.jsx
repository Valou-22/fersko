import { useState, useEffect } from "react";
import { emilyInParis } from "./utils/series";

function App() {
  const [indexEp, setIndexEp] = useState(() => {
    const savedEpisode = localStorage.getItem("episode");
    return savedEpisode !== null ? parseInt(savedEpisode) : 0;
  });

  const [indexSeas, setIndexSeas] = useState(() => {
    const savedSeason = localStorage.getItem("saison");
    return savedSeason !== null ? parseInt(savedSeason) : 0;
  });

  useEffect(() => {
    localStorage.setItem("episode", indexEp);
  }, [indexEp]);

  useEffect(() => {
    localStorage.setItem("saison", indexSeas);
  }, [indexSeas]);

  const seasons = emilyInParis.seasons;

  console.log(`Saison : ${indexSeas + 1}, Épisode : ${indexEp + 1}`);

  return (
    <div className="h-screen flex w-full justify-center items-center flex-col gap-10">
      <h1 className="text-white font-bold text-4xl">Série pour les bg</h1>
      <form className="flex gap-5">
        <select
          onChange={(e) => {
            setIndexSeas(e.target.selectedIndex);
            setIndexEp(0); // Réinitialiser l'épisode à 0 lorsqu'une nouvelle saison est sélectionnée
          }}
          value={indexSeas}
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
          value={indexEp}
        >
          {seasons[indexSeas].episodes.map((episode, index) => (
            <option key={index} value={index}>
              Épisode {index + 1}
            </option>
          ))}
        </select>
      </form>
      <video key={`${indexSeas}-${indexEp}`} width="640" height="360" controls>
        <source
          // src={`/fersko/séries/Emily in Paris/s${indexSeas + 1}e${
          //   indexEp + 1
          // }.mp4`}
          src={seasons[indexSeas].episodes[indexEp]}
          type="video/mp4"
        />
        Votre navigateur ne supporte pas la lecture de cette vidéo.
      </video>
    </div>
  );
}

export default App;