interface Product{
    id : string
    name:string
    price : number
    transaction : string
}

interface Creator{
    create(...args:any):Product
}

class creaTePhone implements Creator{
    create(id:string,name:string,price:number,transaction:string): Product {
        return new Phone(id,name,price,transaction)
    }
}

class createPc implements Creator {
    create(id:string,name:string,price:number,transaction:string,ram:number,ssd:number): Product {
        return new Pc(id,name,price,transaction,ssd,ram)
    }
}

class Phone implements Product {
    public id:string;
    public name:string;
    public price:number;
    public transaction:string;

    constructor(id:string,name:string,price:number,transaction:string){
        this.id=id
        this.name=name
        this.price=price
        this.transaction=transaction
    }
}

class Pc implements Product{
    public id:string;
    public name:string;
    public price:number;
    public transaction:string;
    public ram : number;
    public ssd : number;
    constructor(id:string,name:string,price:number,transaction:string,ssd:number,ram:number){
        this.id=id
        this.name=name
        this.price=price
        this.transaction=transaction
        this.ram=ram
        this.ssd=ssd
    }
}


const pc = new createPc()
let newPc = pc.create("1","mouad",23,"s-qhe34Vhd",20,1)
console.log(newPc.constructor.prototype) 

