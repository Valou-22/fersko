import { useState } from "react";
import { episodes } from "./utils/series";

function App() {
  const [indexEp, setIndexEp] = useState(0);

  return (
    <div className="h-screen flex w-full justify-center items-center flex-col gap-10">
      <h1 className="text-white font-bold text-4xl">Série pour les bg</h1>
      <form>
        <select
          onChange={(e) => setIndexEp(e.target.selectedIndex)}
          name=""
          id=""
        >
          {episodes.map((episode, index) => (
            <option key={index} value={index}>
              Episode {index + 1}
            </option>
          ))}
        </select>
      </form>
      <video key={indexEp} width="640" height="360" controls>
        <source src={episodes[indexEp]} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de cette vidéo.
      </video>
    </div>
  );
}

export default App;
