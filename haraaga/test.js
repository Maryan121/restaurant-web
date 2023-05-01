const current = document.querySelector('.current');

const container = document.querySelectorAll('img');

let counter=0;
function myfunc(){
    
    // for(let i=0; i<container.length; i++){
            if(counter==container.length){
                counter=0;
            }
            else{
                current.src = container[counter];
                counter++
            }
            
            console.log(counter);
       
        
        // myfunc(counter ++ );
    // }
}

setTimeout(myfunc,300)


