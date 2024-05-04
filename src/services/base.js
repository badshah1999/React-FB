import axios from "axios"


const header={
    'Accept':'application/json',
    'Content-type':'application/json'
}
const baseURL="http://localhost:3000"

export const getService=async (endpoint)=>{
    const res = await axios.get(`${baseURL}${endpoint}`, { headers: header })
    return res.data
}
export const postService=async(endpoint,user)=>{
    const res = await axios.post(`${baseURL}${endpoint}`,user)
    return res
}
