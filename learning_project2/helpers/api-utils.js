
export async function getAllEvents(){
    const response  = await fetch("https://nextjs-project3-default-rtdb.firebaseio.com/events")
    const data  = response.json()

    const events = []

    for (let key in data) {
        events.push({
            id:key,
            ...data[key]
        })
    }

    return events
}

export  async function getFeaturedEvents(){
    const allEvents = await getAllEvents()

return allEvents.filter((event)=> event.isFeatured)
}