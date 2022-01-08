import Axios from "axios";

export const getVaccinStat = async () => {
  //await delay(1000)

  const result = await Axios.get("http://localhost:4000/vaccinStat");
  console.log(result);
  return result.data;
};

export const countAll = async () => {
  const result = await Axios.get("http://localhost:4000/nbRegistred");
  console.log(result);
  return result.data;
};

export const countDose1 = async () => {
  const result = await Axios.get("http://localhost:4000/nbvaccinatedOne");
  console.log(result);
  return result.data;
};

export const countDose2 = async () => {
  const result = await Axios.get("http://localhost:4000/nbvaccinated");
  console.log(result);
  return result.data;
};
