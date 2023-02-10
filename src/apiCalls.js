import cleanData from './utils'

let errorMessage

const fetchSearchData = async (query) => {
    try {
        const res = await fetch(`https://api.disneyapi.dev/character?name=${query}`)
        const data = await res.json()
        const cleanedData = await cleanData(data)

    if (!res.ok) {
        return
    }
    return cleanedData
    
    } catch (error) {
        errorMessage = error.message
        return errorMessage
    }
}

export default fetchSearchData