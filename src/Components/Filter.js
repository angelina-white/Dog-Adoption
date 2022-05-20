function Filter({onDogChange})
{
    return(
        <select name="filter" onChange={onDogChange}>
            <option value="all">Filter by category</option>
            <option value="cute">Cute</option>
            <option value="funny">Funny</option>
            <option value="hyper">Hyper</option>
      </select>
    )
}

export default Filter;