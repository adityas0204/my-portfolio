import axios from 'axios'
import getDeviceType from '../util/getDeviceType'

let logId = null
let initialPromise = null
const baseUrl = '/api/pings'

const createPing = async () => {
  initialPromise = axios.post(baseUrl, { device: getDeviceType() })
  const res = await initialPromise
  logId = res.data.id
}

const updateLog = async (data) => {
  if (!logId && initialPromise) {
    await initialPromise
  }

  if (!logId) {
    return 
  }
  
  await axios.patch(`${baseUrl}/${logId}`, data)
}

export default { createPing, updateLog }