const Filter = ( {showName, handleSearch} ) => {
    return (
        <div>
            <input
                value={showName}
                onChange={handleSearch}
            />
        </div>
        
    )
}

export default Filter