function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants =  JSON.parse(document.querySelector('#inputs textArea').value.trimEnd());
       
      let listOfRestaurants = [];
      
      for (const restaurant of restaurants) {
         let [restName, workersInfoAsStr] = restaurant.split(' - ');
         let workersInfo = workersInfoAsStr.split(', ');
         let currentRestaurant = {};
         if(!listOfRestaurants.find(x=> x.name == restName)){
           currentRestaurant.name = restName;
           currentRestaurant.workers = [];
           listOfRestaurants.push(currentRestaurant);
         } else{
            currentRestaurant = listOfRestaurants.find(x => x.name == restName);
         }
         let bestSalary = currentRestaurant.bestSalary || 0;
         for (const worker of workersInfo) {
            let [name, salaryInfo] = worker.split(' ');
            let salary = Number(salaryInfo)
            let currentWorker = {
               name,
               salary
            }
            currentRestaurant.workers.push(currentWorker);
            if(salary > bestSalary){
               bestSalary = salary;
            }
         }
         let sum = 0;
         for (const worker of currentRestaurant.workers) {
            sum += worker.salary;
         }
         let averageSalary = sum / currentRestaurant.workers.length
         currentRestaurant.workers.sort((a, b) => b.salary - a.salary)
         currentRestaurant.averageSalary = averageSalary;
         currentRestaurant.bestSalary = bestSalary;
      }

       let bestRest = (listOfRestaurants.sort((a, b) => b.averageSalary - a.averageSalary))[0];
       let bestRestText = `Name: ${bestRest.name} Average Salary: ${bestRest.averageSalary.toFixed(2)} Best Salary: ${bestRest.bestSalary.toFixed(2)}`
       let bestRestWorkersText = '';
       for (const worker of bestRest.workers) {
          bestRestWorkersText += `Name: ${worker.name} With Salary: ${worker.salary} `
       }
      document.querySelector("#outputs #bestRestaurant p").textContent = bestRestText;
      document.querySelector("#outputs #workers p").textContent = bestRestWorkersText.trimEnd();
   }
} 
