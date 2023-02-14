function cleanData(data) {
    if (Array.isArray(data.data) === true) {
        return data.data.map(char => {
            return returnCleanedObject(char)
        })
    } else {
        return returnCleanedObject(data)
    }
}

function returnCleanedObject(charObject) {
    return {
        name: charObject.name,
        id: charObject._id,
        films: null || charObject.films,
        image: charObject.imageUrl
    }
}

export default cleanData