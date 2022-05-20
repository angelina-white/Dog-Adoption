function DogItem({name, breed, image})
{
    return(
        <span>
            <h2>{name}</h2>
            <h3>{breed}</h3>
            <img src={image} class="crop"></img>
        </span>
    )
}

export default DogItem;