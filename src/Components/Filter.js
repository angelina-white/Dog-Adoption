function Filter({onDogChange})
{
    return(
        <div className="custom-select">
            <select name="filter" class="filterButton" onChange={onDogChange}>
                <option value="all">Filter by category</option>
                <option value="cute">Cute</option>
                <option value="funny">Funny</option>
                <option value="hyper">Hyper</option>
            </select>
        </div>
    )
}

export default Filter;