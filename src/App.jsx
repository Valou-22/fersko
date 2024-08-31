import { useState } from "react";
import { emilyInParis } from "./utils/series";

function App() {
  const [indexEp, setIndexEp] = useState(0);
  const [indexSeas, setIndexSeas] = useState(0);

  setIndexEp(localStorage.getItem("episode"));
  setIndexSeas(localStorage.getItem("saison"));

  const seasons = emilyInParis.seasons;

  console.log(`saison : ${indexSeas + 1} episode : ${indexEp + 1}`);

  return (
    <div className="h-screen flex w-full justify-center items-center flex-col gap-10">
      <h1 className="text-white font-bold text-4xl">Série pour les bg</h1>
      <form className="flex gap-5">
        <select
          onChange={(e) => {
            setIndexSeas(e.target.selectedIndex);
            localStorage.setItem("saison", indexSeas);
            localStorage.setItem("episode", 0);
            setIndexEp(0);
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
            localStorage.setItem("episode", indexEp);
          }}
          value={indexEp}
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
