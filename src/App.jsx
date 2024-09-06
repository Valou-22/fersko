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
    <div className="m-3 mb-3">
      <img
        className="object-cover h-20 opacity-80 w-full border-opacity-50 rounded"
        src="logo.png"
        alt=""
      />
      <h1 className="text-white font-bold text-2xl md:text-4xl uppercase">
        Emily in Paris
      </h1>
      <p className="text-xl md:text-2xl uppercase text-gray-600 font-bold">
        Saison {indexSeas + 1}{" "}
      </p>
      <div className="flex flex-wrap justify-start mb-5">
        <div className="flex undefined bg-white rounded uppercase font-bold text-base items-center justify-center outline outline-gray-500 outline-1 mr-2 my-2 sm:ml-2 transition-all duration-200 opacity-100">
          <img
            className="object-cover rounded h-8 w-11"
            src="https://cdn.statically.io/gh/Anime-Sama/IMG/img/autres/flag_fr.png"
            alt=""
          />
          <p className="absolute">VF</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-start bg-slate-900 bg-opacity-70 rounded">
        <form className="flex gap-5">
          <select
            className="scrollBarStyled bg-black outline outline-sky-700 outline-1 hover:opacity-80 rounded uppercase font-semibold text-sm sm:text-base text-white items-center cursor-pointer py-1 pl-3 pr-7 sm:pr-10 mx-1 m-2 transition-all duration-200"
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
            className="scrollBarStyled bg-black outline outline-sky-700 outline-1 hover:opacity-80 rounded uppercase font-semibold text-sm sm:text-base text-white items-center cursor-pointer py-1 pl-3 pr-7 sm:pr-10 mx-1 m-2 transition-all duration-200"
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
      </div>
      <div className="flex flex-wrap justify-center items-center mt-2 bg-slate-900 bg-opacity-70 rounded">
        <button
          onClick="prevEp();"
          id="prevEpisode"
          className="flex bg-sky-900 hover:opacity-80 rounded uppercase font-semibold text-white justify-center items-center cursor-pointer outline outline-gray-500 outline-1 py-1 p-3 mr-5 my-2 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 md:h-5 md:w-5 md:mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="hidden md:block">Precedent</p>
        </button>
        <button
          onClick="lastEp();"
          id="lastEpisode"
          className="flex bg-stone-900 hover:opacity-80 rounded uppercase font-semibold text-white justify-center items-center cursor-pointer outline outline-gray-500 outline-1 py-1 p-3 mr-5 my-2 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 md:h-5 md:w-5 md:mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="hidden md:block">Dernier episode</p>
        </button>
        <button
          onClick="nextEp();"
          id="nextEpisode"
          className="flex bg-sky-900 hover:opacity-80 rounded uppercase font-semibold text-white justify-center items-center cursor-pointer outline outline-gray-500 outline-1 py-1 p-3 my-2 transition-all duration-200"
        >
          <p className="hidden md:block">Suivant</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 md:h-5 md:w-5 md:ml-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="my-6">
        <video
          key={`${indexSeas}-${indexEp}`}
          width="640"
          height="256"
          controls
        >
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
      <div className="flex flex-wrap justify-center items-center mt-2 bg-slate-900 bg-opacity-70 rounded">
        <button
          onClick="prevEp();"
          id="prevEpisode"
          className="flex bg-sky-900 hover:opacity-80 rounded uppercase font-semibold text-white justify-center items-center cursor-pointer outline outline-gray-500 outline-1 py-1 p-3 mr-5 my-2 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 md:h-5 md:w-5 md:mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="hidden md:block">Precedent</p>
        </button>
        <button
          onClick="lastEp();"
          id="lastEpisode"
          className="flex bg-stone-900 hover:opacity-80 rounded uppercase font-semibold text-white justify-center items-center cursor-pointer outline outline-gray-500 outline-1 py-1 p-3 mr-5 my-2 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 md:h-5 md:w-5 md:mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="hidden md:block">Dernier episode</p>
        </button>
        <button
          onClick="nextEp();"
          id="nextEpisode"
          className="flex bg-sky-900 hover:opacity-80 rounded uppercase font-semibold text-white justify-center items-center cursor-pointer outline outline-gray-500 outline-1 py-1 p-3 my-2 transition-all duration-200"
        >
          <p className="hidden md:block">Suivant</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 md:h-5 md:w-5 md:ml-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
