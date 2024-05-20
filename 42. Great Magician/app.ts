let magicians:string[]= ["DON", "RAMEEZ", "CHRIS"]

function make_great(magicians:string[]){
     for(let i=0; i< magicians.length; i++){
     magicians[1]= magicians[1] + "The Great";
    }
}
make_great(magicians);