import axios from "axios"

export const increaseChalanNumber=(id)=>{
    axios.patch(`https://abc-sourching.onrender.com/chalanNumber/${id}`)
            .then(res => {
               
                return res.data
            })
            .catch(err =>{
                 console.log(err.message)
                return err})
}
export const decreaseChalanNumber=(id)=>{
    axios.patch(`https://server-64mukpbaj-iftekhar2979.vercel.app/chalanNumberDecrement/${id}`)
            .then(res => res.data)
            .catch(err => console.log(err.message) )
}