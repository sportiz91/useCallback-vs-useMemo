import React, { useState, useCallback, useMemo } from "react";
import Styles from "./App.css";
import Array from "./components/Array";

const App = () => {
  const [numbers, setNumbers] = useState(1);
  const [blacky, setBlacky] = useState(false);

  //As we can see, if I don't use useCallback() hook from react,
  //then, everytime any of the state of the app changes (blacky or numbers)
  //then the console log "shot" from Array component is triggered.
  //This is a problem!
  // const makeItems = () => {
  //   if (!numbers) {
  //     return [0, 1, 2];
  //   }

  //   return [numbers, numbers + 1, numbers + 2];
  // };

  //On the other hand, if we useCallback here, then
  //As I can see, whenever I change the blacky state then the
  //makeItems is not "reconstructed" in the Array component,
  //so no shot in there.
  const makeItems = useCallback(() => {
    if (!numbers) {
      return [0, 1, 2];
    }

    return [numbers, numbers + 1, numbers + 2];
  }, [numbers]);

  //useCallback() is similar to useMemo()
  //but useCallback returns the whole function defined in the first parameter
  //useMemo only returns the return of the function of the first parameter.
  // const makeItems = useMemo(() => {
  //   if (!numbers) {
  //     return [0, 1, 2];
  //   }

  //   return [numbers, numbers + 1, numbers + 2];
  // }, [numbers]);

  //How about using useEffect() -> in this case it does not apply because we are passing a function as prop
  //to the Array component.

  return (
    <div className="layout">
      <input
        type="text"
        value={numbers}
        onChange={(e) =>
          isNaN(parseInt(e.target.value))
            ? setNumbers("")
            : setNumbers(parseInt(e.target.value))
        }
      />
      <button onClick={() => setBlacky((preBlacky) => !preBlacky)}>
        Toggle Theme
      </button>
      <Array blacky={blacky} makeItems={makeItems} />
    </div>
  );
};

export default App;

//When does it makes sense to use useCallback hook from react?
//1. When the function you are creating anytime the state changes is really slow to create (maybe
//very demanding in resources).
//2. We can use it too when we want to optimize our App.
//3. You are going to use it often with useRef().
