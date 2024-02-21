class DB{
    private constructor(){}
    public static instance:DB;
    public static getInstance() :DB {
        if(!DB.instance){
            DB.instance=new DB()
        }
        return DB.instance;
    }
    connect(){
        return "connected";
    }
}


const db1 = DB.getInstance();
const db2 = DB.getInstance()

console.log(db1==db2)



