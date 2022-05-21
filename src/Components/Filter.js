function Filter({onDogChange})
{
    return(
        <div className="custom-select">
            <select name="filter" class="filterButton" onChange={onDogChange}>
                <option value="all">Filter by category</option>
                <option value="puppy">Puppy</option>
                <option value="adult">Adult</option>
            </select>
        </div>
    )
}

export default Filter;