class Company {
    constructor(){
        this.departments = {};
    }
    addEmployee(name, salary, position, department){
        if(!name || !salary || !position || !department || Number(salary) < 0){
            throw new Error("Invalid input!")
        } 
        if(!this.departments[department]){
            this.departments[department] = {employees: new Array};
        }
        let newEmployee = {
            name,
            salary,
            position
        }
        this.departments[department].employees.push(newEmployee);
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment(){
        let bestSalary = 0;
        let bestDepartmentName;
        for (const depart in this.departments) {
            let currentAverage = (this.departments[depart].employees.reduce((a, b) => a + b.salary, 0) / this.departments[depart].employees.length)
            if(currentAverage > bestSalary){
                bestSalary = currentAverage;
                bestDepartmentName = depart;
            }
        }
        let bestDepart = this.departments[bestDepartmentName];
        bestDepart.employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

        let strEmplyees = bestDepart.employees.map(em => `${em.name} ${em.salary} ${em.position}`).join('\n')

        let result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${bestSalary.toFixed(2)}\n${strEmplyees}`
        
        return result
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
