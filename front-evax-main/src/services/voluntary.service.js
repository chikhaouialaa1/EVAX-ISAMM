import Axios from "axios";

export const getvoluntaries = async () => {
  //await delay(1000)

  const result = await Axios.get("http://localhost:4000/volontaire");
  return result.data;
};

export const getvoluntaryID = async (id) => {
  //await delay(1000)

  const result = await Axios.get("http://localhost:4000/volontaire-id/" + id);
  return result.data;
};
export const addvoluntary = async (vol) => {
  //await delay(1000)
  console.log(vol);
  const result = await Axios.post("http://localhost:4000/new-volontaire", vol);
  return result.data;
};

export const deleteVol = async (id) => {
  console.log(id)
    const result = await Axios.post(
      "http://localhost:4000/Volontaire-del/"+id
    )
    
    return result.data
  }

  export const updateVol = async (vol) => {
    console.log(vol)
      const result = await Axios.post(
        "http://localhost:4000/Volontaire-id/"+vol.id, vol
      )
      
      return result.data
    }