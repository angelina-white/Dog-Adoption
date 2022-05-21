import Header from "./Header"
import DogList from "./DogList"
import dogs from "../Data/dogs"
import {useState} from "react"

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkMode()
  {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }


  const appClass = isDarkMode ? "App dark" : "App"
  const dogsForAdopt = isDarkMode ? "dogsForAdopt dark" : "dogsForAdopt"
  const pinkHeader = isDarkMode ? "header purple" : "header"
  const pinkCard = isDarkMode ? "card purple" : "card"

  return (
    <div className= {appClass}>
      <Header isPink={pinkHeader}/>
      <DogList isDarkMode={isDarkMode} onDarkModeClick = {handleDarkMode} pinkCard={pinkCard} dogsForAdopt={dogsForAdopt} dogs={dogs}/>
    </div>
  );
}

export default App;
