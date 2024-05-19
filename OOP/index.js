"use strict";
// OOP => Classes, Objects and Inheritance
// class School{
//     name : string;
//     students:Student[] = [];
//     teacher:Teacher[] = []
//     addStudent(stdObj : Student){
//         this.students.push(stdObj);
//     }
//     addTeacher(teacherobj:Teacher){
//         this.teacher.push(teacherobj);
//     }
//     constructor(name:string){
//         this.name = name;
//     }
// }
// class Student{
//     name:string;
//     age:number;
//     gender:string;
//     constructor(n:string,age:number,g:string){
//         this.name = n;
//         this.age = age;
//         this.gender = g;
//     }
// }
// class Teacher extends Student{
//     email:string = "";
//     id : number = 0;
//     addInfo(e:string,id:number){
//         this.email = e;
//         this.id = id;
//     }
// }
// let school1 = new School("MCS");
// let school2 = new School("NUST");
// let s1 = new Student("Aitazaz",18,"Male");
// let s2 = new Student("Huda",21,"FeMale");
// let s3 = new Student("Kainat",16,"FeMale");
// let s4 = new Student("Zoha",15,"Female");
// let t1 = new Teacher("Maria",28,"Female");
// let t2 = new Teacher("Wajahat",29,"Male");
// let t3 = new Teacher("Usman",36,"Male");
// let t4 = new Teacher("Sabahat",40,"Female");
// t1.addInfo("abc@gmail.com",1234);
// t2.addInfo("def@gmail.com",5678);
// t3.addInfo("123@gmail.com",91011);
// t4.addInfo("456@gmail.com",1213);
// school1.addStudent(s1);
// school1.addStudent(s2);
// school2.addStudent(s3);
// school2.addStudent(s4);
// school1.addTeacher(t1);
// school1.addTeacher(t2);
// school2.addTeacher(t3);
// school2.addTeacher(t4);
// console.log(school1); 
// console.log(school2); 
//-----------------------------------------------------------------------------//
// OOP => Classes, Objects and Interfacces
// class Student{
//     class:string = "BESE-29A";
//     age : number = 19;
//     name : string = "Aitazaz"
//     study(){
//         console.log(`${this.name} Studies`);
//     }
// }
// interface AddInfo{
//     email:string;
//     contact : number;
//     Play():void;
// }
// class Test implements Student,AddInfo {
//     class: string = "BESE-29C";
//     age: number = 20;
//     name: string = "Hamza";
//     study(): void {
//         console.log(`${this.name} Studies`);
//     }
//     email: string = "abc@gmail.com";
//     contact: number = 123488436;
//     Play(): void {
//         console.log(`${this.name} is Playing`);
//     }
// }
// let obj1 = new Student();
// console.log(obj1);
// let obj = new Test();
// console.log(obj);
//-------------------------------------------------------------------------//
// Access Modifiers
// class User{
//     public name : string = "Aitazaz";
//     protected id : number = 457366;
//     getId(){
//         return this.id;
//     }
// }
// class Test extends User{
//     public name: string = "Mirza";
//     getId(): number {
//         return this.id;
//     }
//     protected id: number = 1234;
// }
// let u = new User();
// console.log(u.name);
// console.log(u.getId());
// let t = new Test();
// console.log(t.getId());
// console.log(t.name);
// console.log();
//-------------------------------------------------------------------------//
// ==> OOPs = Getter and Setters 
// class Student{
//     private _name:string = "Aaitazz";
//     set Name(val:any){
//         this._name = val; 
//     }
//     get MyName(){
//         return this._name;
//     }
// }
// let s1 = new Student();
// console.log(s1.MyName);  // used without () curly braces
// s1.Name = "Mirza";
// console.log(s1.MyName);
//-------------------------------------------------------------------------//
// OOP = Super KeyWord
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    welcome() {
        console.log("You are welcome in Person Class");
    }
}
class Student extends Person {
    constructor(n, a, roll) {
        super(n, a);
        this.roll = roll;
    }
    welcome() {
        super.welcome();
        console.log("You are welcome in Student Class");
    }
}
let s1 = new Student("Aitazaz", 18, 9);
console.log(s1);
s1.welcome();
