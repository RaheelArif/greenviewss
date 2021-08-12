import { useState } from 'react';
function Footer() {
    // Question: make an function which can display employees, add employees, remove employees?
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [salary, setSalary] = useState("");
    const [employee, setEmployee] = useState([
        { Name: "Faizan", Id: 1, Salary: 60000 },
        { Name: "Rehan", Id: 2, Salary: 25000 },
        { Name: "Zain", Id: 3, Salary: 18000 },
        { Name: "Ali", Id: 4, Salary: 30000 }
    ]);
    // Copy employee to use in whole function
    const [employeeCopy, setEmployeeCopy] = useState([
        { Name: "Faizan", Id: 1, Salary: 60000 },
        { Name: "Rehan", Id: 2, Salary: 25000 },
        { Name: "Zain", Id: 3, Salary: 18000 },
        { Name: "Ali", Id: 4, Salary: 30000 }
    ]);
    // the function which we made to save the data of employee
    const saveEmployee = () => {
        let emp = { Name: name, Id: id, Salary: salary }
        let newEmployee = [...employee]
        newEmployee.unshift(emp)
        setEmployee(newEmployee)


        let copyEmployee = [...employeeCopy] //this is for copy 
        copyEmployee.unshift(emp)
        setEmployeeCopy(copyEmployee)
        console.log(copyEmployee)
        setName("")
        setId("")
        setSalary("")
    }
    // We made this to made our delete function work properly with copy employee
    const deleteEmployee = (emp) => {
        let oldEmployees = [...employee]
        let filteredEmployees = oldEmployees.filter((a) => {
            return a.Id !== emp.Id;
        });
        setEmployee(filteredEmployees);

        let copyEmployee = [...employeeCopy] //this is for copy 
        let filteredEmployeesC = copyEmployee.filter((a) => {
            return a.Id !== emp.Id;
        });
        setEmployeeCopy(filteredEmployeesC)
        console.log(filteredEmployeesC)
    }
    // Our conditional function to show the salary which are greater than twenty thousand
    const btnEmployee = () => {
        let maxSalary = [...employeeCopy]
        let filteredSalary = maxSalary.filter((a) => {
            return a.Salary > 20000
        });
        setEmployee(filteredSalary)
    }
    // Our conditional function to show the salary which are less than twenty thousand
    const btnEmpMinSalary = () => {
        let minSalary = [...employeeCopy]
        let filteredsalary = minSalary.filter((a) => {
            return a.Salary < 20000
        });
        setEmployee(filteredsalary)
    }
    return (
        // To display our array  (We're using the small a in this so we can pass the employee where the user is clicking) 
        <div className="emp-main-div">
            {employee.map((a, i) => {
                return (
                    <div key={i} className="emp-sec-div">
                        {a.Salary >= 100 ? <span>
                            <p>The name of the employee: {a.Name}</p>
                            <p>The id of the employee: {a.Id} </p>
                            <p>The salary of the employee:{a.Salary}</p>
                            <button onClick={() => deleteEmployee(a)}>Delete</button>
                        </span> : null}
                    </div>
                );
            })}
            {/* // For input and  */}
            <div className="emp-sec-div">
                <input placeholder="Enter your name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
                <input placeholder="Enter your id" value={id} type="text" onChange={(e) => setId(e.target.value)} />
                <input placeholder="Enter your salary" value={salary} type="text" onChange={(e) => setSalary(e.target.value)} />
                <button onClick={saveEmployee}>Click here</button>
            </div>
            <div >
                <button onClick={btnEmployee}>Max Salary</button>
                <button onClick={btnEmpMinSalary}>Min Salary</button>
            </div>
        </div>
    );
};


export default Footer;