import axios from "axios";
const url = "http://localhost:4000/students";

export const getStudents = async () => {
  return await axios.get(url);
};
