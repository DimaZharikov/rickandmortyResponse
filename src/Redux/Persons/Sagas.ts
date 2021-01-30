

async function fetchGetPerson(id: number) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    return await res.json()
}



export function* getPersons() {
    try {

    }
    catch (error){
        console.log(error)
    }
}


