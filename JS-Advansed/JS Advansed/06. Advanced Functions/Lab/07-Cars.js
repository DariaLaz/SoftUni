function solution(input){
    let carCollection = []
    function create(name){
        carCollection[name] = {}
    }
    function createInherits(name, parentName){
        carCollection[name] = {}
       Object.setPrototypeOf(carCollection[name],carCollection[parentName]);
    }
    function set(name, key, value){
        carCollection[name][key] = value;
    }
    function print(name){
        let printArray = []

        for(const key in carCollection[name]){
            printArray.push(`${key}:${carCollection[name][key]}`)
        }
        console.log(printArray.join(','))
    }
    for (const element of input) {
        let arrInput = element.split(' ')
        switch(arrInput[0]){
            case 'create':
                if(arrInput.length == 2){
                    create.call(this, arrInput[1]);
                } else{
                    createInherits.call(this, arrInput[1], arrInput[3]);
                }
                break;
            case 'set': 
                set.call(this, arrInput[1], arrInput[2], arrInput[3]);
                break;
            case 'print': 
                print.call(this, arrInput[1]);
                break;
        }
    }
}

solution(['create c1',
        'create c2 inherit c1',
        'set c1 color red',
        'set c2 model new',
        'print c1',
        'print c2'])