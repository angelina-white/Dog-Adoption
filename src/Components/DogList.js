import DogItem from "./DogItem"
import Filter from "./Filter"

function DogList({dogs})
{
    const dogElement = dogs.map((e) =>
    {
        return(
            <DogItem key={e.id} name={e.name} breed={e.breed} image={e.image}></DogItem>
        )
    })

    return(
        <div class="dog-list">
            <h2>Dogs for adoption: </h2>
            <Filter />
            {dogElement}
        </div>
    )
}

export default DogList;