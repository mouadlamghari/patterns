abstract class service{
    public abstract  cost() : number ;
}

class PhoneNotification extends service {
     cost() {
        return 5;
    }
}

class EmailNotification extends service {
    cost(){
        return 6;
    }
}

class Decorator extends service  { 
    public service : service;
    constructor(service : service){
        super()
        this.service = service
    }
    public cost(): number {
        return this.service.cost()
    }
}


class EmailWithFacebook extends Decorator {
    public service: service;
    constructor(service : service){
        super(service)
        this.service=service
    }
    public cost(): number {
        return 100+this.service.cost()
    }
}

let facebook = false;

const defaultChoise = new EmailNotification()
let  newService = new Decorator(defaultChoise)
if(facebook){
    newService = new EmailWithFacebook(newService)
}
console.log(newService.cost())



