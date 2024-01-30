import axios from "axios"

const paramsLoader=(parameter)=>{
    // console.log(params)
    const {params:{id}}=parameter
    axios.get(`${process.env.REACT_APP_DEVELOPMENT_URL}/orderList/${id}`)
    .then(res=>res.data)
    .catch(err=>console.log(err))
}
export default paramsLoader