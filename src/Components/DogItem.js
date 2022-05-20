function DogItem({name, breed, image})
{
    return(
        <div className="card">
            <img src={image}></img>
            <div className="container">
                <h2>{name}</h2>
                <h3>{breed}</h3>
            </div>
        </div>
    )
}

export default DogItem;