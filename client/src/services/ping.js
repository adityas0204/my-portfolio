import axios from 'axios';
import getDeviceType from '../util/getDeviceType';

let logId = null;
let initialPromise = null;
const baseUrl = '/api/pings';

const createPing = async () => {
  initialPromise = axios.post(baseUrl, { device: getDeviceType() });
  const res = await initialPromise;
  logId = res.data.id;
};

const updatePing = async (data) => {
  if (!logId && initialPromise) {
    await initialPromise;
  }

  if (!logId) {
    return;
  }

  await axios.patch(`${baseUrl}/${logId}`, data);
};

const getPings = async (type = null, range = null, unique = false) => {
  try {
    const res = await axios.get(baseUrl, {
      params: { 
        type,
        range,
        unique,
      }
    });
    return { data: res.data, error: null };
  } catch (error) {
    return { data: [], error: error || 'Server unreachable' };
  }
};

export default { createPing, updatePing, getPings };
