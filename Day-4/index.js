let  choise;
do{
    choise = prompt("enter choise 1.Hi, 2.Bye, 3.Leave")

    switch(choise){
        case "1" : 
        console.log("Hi")
        break ;
     
        case "2" :
            console.log("Bye")
            break ;
    
        case "3" :
            console.log("Leave")
            break ;
    
    }
    
}while(choise !== "3")
    
