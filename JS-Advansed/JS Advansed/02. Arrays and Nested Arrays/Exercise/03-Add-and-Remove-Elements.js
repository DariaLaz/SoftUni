 function addAndRemoveElements(arr){
     let currentNum = 0;
     let result = [];
     for (let command of arr) {
         currentNum++;
         if(command == 'add'){
             result.push(currentNum)
         } else if(command == 'remove'){
             result.pop();
         }
     }
     if(result.length != 0){
        console.log(result.join('\n'));
     } else{
         console.log('Empty')
     }
 }
 addAndRemoveElements(['add', 
 'add', 
 'add', 
 'add']
 )
 addAndRemoveElements(['add', 
 'add', 
 'remove', 
 'add', 
 'add']
 )