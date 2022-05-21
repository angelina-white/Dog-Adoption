import Header from "./Header"
import NavBar from "./NavBar"
import DogList from "./DogList"
import dogs from "../Data/dogs"
import {useState} from "react"
import Form from "./Form"

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkMode()
  {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  const appClass = isDarkMode ? "App dark" : "App"
  const dogsForAdopt = isDarkMode ? "dogsForAdopt dark" : "dogsForAdopt"
  const toggleButton = isDarkMode ? "toggleDark light" : "toggleDark"
  const pinkHeader = isDarkMode ? "header purple" : "header"
  const pinkCard = isDarkMode ? "card purple" : "card"
  const pinkForm = isDarkMode ? "formDiv purple" : "formDiv"
  const pinkResponse = isDarkMode ? "formThankYou purple" : "formThankYou"

  return (
    <div className= {appClass}>
      <Header isPink={pinkHeader}/>
      <NavBar />
      <DogList isDarkMode={isDarkMode} onDarkModeClick = {handleDarkMode} toggleButton={toggleButton} pinkCard={pinkCard} dogsForAdopt={dogsForAdopt} dogs={dogs} />
      <Form pinkForm={pinkForm} pinkResponse={pinkResponse}/>
    </div>
  );
}

export default App;
