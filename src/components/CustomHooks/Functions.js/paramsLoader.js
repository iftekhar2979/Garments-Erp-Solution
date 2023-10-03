import axios from "axios"

const paramsLoader=(parameter)=>{
    // console.log(params)
    const {params:{id}}=parameter
    axios.get(`http://localhost:8000/orderList/${id}`)
    .then(res=>res.data)
    .catch(err=>console.log(err))
}
export default paramsLoader