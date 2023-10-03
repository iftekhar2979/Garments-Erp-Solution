import axios from "axios"

export const increaseChalanNumber=(id)=>{
    axios.patch(`http://localhost:8000/chalanNumber/${id}`)
            .then(res => {
               
                return res.data
            })
            .catch(err =>{
                 console.log(err.message)
                return err})
}
export const decreaseChalanNumber=(id)=>{
    axios.patch(`http://localhost:8000/chalanNumberDecrement/${id}`)
            .then(res => res.data)
            .catch(err => console.log(err.message) )
}