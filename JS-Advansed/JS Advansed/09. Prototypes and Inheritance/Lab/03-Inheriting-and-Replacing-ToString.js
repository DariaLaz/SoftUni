function solve(){
    class Person{
        constructor(name, email){
            this.name = name;
            this.email = email;
        }
        toString(){
            return `Person (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
        toString(){
            return super.toString().replace('Person', 'Teacher').replace(')', `, subject: ${this.subject})`)
        }
    }
    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
        toString(){
            return super.toString().replace('Person', 'Student').replace(')', `, course: ${this.course})`)
        }
    }
    return{
        Person, 
        Teacher,
        Student
    }
}