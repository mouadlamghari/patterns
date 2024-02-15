interface UserInterface{
    update():string
}


interface chatInterface{
    add(user:UserInterface):void;
    remove(user:UserInterface):void;
    notify():void;
}


class ChatModel implements chatInterface{
    private subscribers : UserInterface[] ;
    constructor(){
        this.subscribers=[]
    }
    add(user: UserInterface): void {
        const userExists = this.subscribers.includes(user)
        if(userExists){
            console.log("user already subscribed")
        }
        else{
            this.subscribers.push(user)
        }
    }
    remove(user: UserInterface): void {
        const userExists = this.subscribers.indexOf(user)
        if(userExists == -1){
            console.log("user does not exists")
        }
        else{
            this.subscribers=this.subscribers.filter(e=>e==user)
        }
    }
    notify(): void {
        console.log(this.subscribers)
        this.subscribers.map(e=>e.update())
    }
}

class UserModel implements UserInterface{
    public count = 0;
    public userId : number;
    constructor(chatRoom : chatInterface){
        this.userId=this.count++
        chatRoom.add(this)

    }
    update(): string {
        console.log("updated")
        return ""
    }
} 


const chatRoom = new ChatModel()
const member = new UserModel(chatRoom)
const member1 = new UserModel(chatRoom)
const member2 = new UserModel(chatRoom)
chatRoom.notify()


