// ex1 
interface ProgrammingLanguage{
    build():string
} 

class Build{
    private tech:ProgrammingLanguage ;
    constructor (tech:ProgrammingLanguage){
        this.tech=tech
    }
    setTech(tech:ProgrammingLanguage){
        this.tech=tech
    }
    build(){
        return this.tech.build()
    }
}

class Js implements ProgrammingLanguage{
    build(): string {
        return "vite run build"
    }
}

class Java implements ProgrammingLanguage{
    build(): string {
        return "JVM"
    }
}


var JsBuilder = new Js() 
var JavaBuilder = new Java() 
var builder = new Build(JsBuilder)
builder.setTech(JavaBuilder)
console.log(builder.build())

// ex2 Miltiple Auth

interface User{
    username:string;
    password:string;
}

var Admins : User[] = [{username:"m1",password:"123"}]
var Users : User[] = [{username:"m1",password:"123"}]

interface AuthImplementation{
    auth(login:string,password:string):boolean
}


class Auth {
    private provider : AuthImplementation;
    constructor(provider : AuthImplementation ){
        this.provider=provider
    }
    login(login:string,password:string){
        return this.provider.auth(login,password)
    }
}


class AdminAuth implements AuthImplementation {
    auth(login: string, password: string): boolean {
        return Admins.find(e=>e.username==login && e.password==password)? true : false
    }
}
class UserAuth implements AuthImplementation {
    auth(login: string, password: string): boolean {
        return Users.find(e=>e.username==login&&e.password==password)? true : false
    }
}
let admin = new AdminAuth()
const user = new Auth(admin)
console.log(user.login("m1","123")) 