import DogItem from "./DogItem"

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
            <p>doglist go here</p>
            {dogElement}
        </div>
    )
}

export default DogList;