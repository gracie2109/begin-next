import axios from "axios";

const API = "https://vapi.vnappmob.com/api/province"
export const apiGetProvinces = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${API}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetDistrict = (provinceId:string | number) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${API}/district/${provinceId}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetWard = (districtId:string | number) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${API}/ward/${districtId}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})