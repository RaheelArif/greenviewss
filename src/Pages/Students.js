import { useEffect, useState } from "react";
import { getStudents } from "../services/api";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    displayStudents();
  }, []);

  const displayStudents = async () => {
    const responce = await getStudents();
    setStudents(responce.data);
  };
  return (
    <div>

      <h1>this is student page</h1>
       {students.map((s , i) => {
           return <div key={i}>
               <h1>student name {s.name}</h1>
               <h1>student age {s.age}</h1>
           </div>
       })}
    </div>
  );
}
