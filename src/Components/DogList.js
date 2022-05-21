import DogItem from "./DogItem"
import Filter from "./Filter"
import {useState} from "react"

function DogList({isDarkMode, onDarkModeClick, toggleButton, pinkCard, dogsForAdopt, dogs})
{
    const [selectedDogs, setSelectedDogs] = useState("all")

    function handleDogChange(event)
    {
        setSelectedDogs(event.target.value)
    }

    const dogsToDisplay = dogs.filter((element) =>
    {
        if (selectedDogs === "all")
        {
            return true
        }
        else
        {
            return element.category === selectedDogs
        }
    })

    return(
        <div className="dog-list">
            <h2 className={dogsForAdopt}>Dogs for adoption: </h2>
            <div class="filterNav">
                <Filter onDogChange={handleDogChange}/>
                <button class={toggleButton} onClick={onDarkModeClick}>
                    {isDarkMode ? "Light" : "Dark"} Mode
                </button>
            </div>
            <ul className= "dog-item">
                {dogsToDisplay.map((e) =>
                (
                    <li>
                        <DogItem key={e.id} name={e.name} breed={e.breed} age={e.age} image={e.image} pinkCard={pinkCard}></DogItem>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DogList;