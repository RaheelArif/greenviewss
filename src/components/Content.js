import { useState } from "react";

function Content() {
  const [sName, setName] = useState("");
  const [sRollN, setRollN] = useState("");
  const [students, setStudents] = useState([
    { name: "ali", rollN: 1 },
    { name: "ahmed", rollN: 2 },
  ]);

  const saveStudent = () => {
    let student = { name: sName, rollN: sRollN };
    let newStudents = [...students];
    newStudents.push(student);
    setStudents(newStudents);
  };
  const handleDelete = (student) => {
    let oldStunts = [...students];
    let filteredStudents = oldStunts.filter((s) => {
     return s.rollN !== student.rollN;
    });
    setStudents(filteredStudents);
    // let filteredStudents = [];
    // for (let i = 0; i < oldStunts.length; i++) {
    //   if (oldStunts[i].rollN !== student.rollN) {
    //     filteredStudents.push(oldStunts[i])
    //   }
    // }
  };
  return (
    <div className="content-main-c">
      {students.map((s, i) => {
        return (
          <div key={i} className="s-div-c">
            <h3>student name {s.name} </h3>
            <p>roll number is {s.rollN}</p>
            <button onClick={() => handleDelete(s)}>delete</button>
          </div>
        );
      })}
      <div className="s-div-c">
        <input
          value={sName}
          onChange={(e) => setName(e.target.value)}
          placeholder="student name"
          type="text"
        />
        <input
          value={sRollN}
          onChange={(e) => setRollN(e.target.value)}
          placeholder="roll number"
          type="text"
        />
        <button onClick={saveStudent}>save</button>
      </div>
    </div>
  );
}
export default Content;
