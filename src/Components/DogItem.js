function DogItem({name, breed, age, image, pinkCard})
{
    return(
        <div className={pinkCard}>
            <img src={image}></img>
            <div className="container">
                <h2>{name}</h2>
                <h3>{breed}</h3>
                <p>{age}</p>
            </div>
        </div>
    )
}

export default DogItem;