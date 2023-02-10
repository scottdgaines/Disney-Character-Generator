function cleanData(data) {
    return data.data.map(char => {
        return {
            name: char.name,
            id: char._id,
            films: null || char.films,
            image: char.imageUrl
        }
    })
}

export default cleanData