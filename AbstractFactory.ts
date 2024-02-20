interface theme{
    bg():bg
    text():text
}

class darkMode implements theme{
    bg(): bg {
        return new BlackBg() 
    }
    text(): text {
        return new WhiteText() 
    }
}

class whiteMode implements theme{
    bg(): bg {
        return new WhiteBg()
    }
    text(): text {
        return new BlackText()
    }
}

interface text{
    color : string
}

interface bg {
    color : string
}

class WhiteText implements text {
     public color: string
     constructor(){
        this.color="white"
     }
}
class BlackText implements text {
     public color: string
     constructor(){
        this.color="black"
     }
}
class WhiteBg implements bg {
    public color: string
     constructor(){
        this.color="white"
     }
}
class BlackBg implements bg {
     public color: string
     constructor(){
        this.color="black"
     }
}
