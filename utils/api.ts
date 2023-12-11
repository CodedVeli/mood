
const createURL = (path) => {
    return window.location.origin + path
}


// updateEntry   PATCH /api/journal/:id
export const updateEntry = async (id, content) => {
    const res = await fetch(
        new Request(createURL(`/api/journal/${id}`) , {
        method: "PATCH",
        body: JSON.stringify({content})
        })
        
    )
   if (res.ok) {
       const data = await res.json()
         return data
   }
}


// createNewEntry   POST /api/journal
export const createNewEntry = async () => {
    const res = await fetch(
        new Request(createURL('/api/journal') , {
        method: "POST",
        })
        
    )
   if (res.ok) {
       const data = await res.json()
         return data
   }
}