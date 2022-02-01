function solution(input){
    let result = [];
    function add(str){
        result.push(str)
    }
    function remove(str){
        result = result.filter(x => x !== str);
    }
    function print(){
        console.log(result.join(','));
    }
    for (const el of input) {
        let [cmd, value] = el.split(' ');
        switch(cmd){
            case 'add': add.call(this, value); break;
            case 'remove': remove.call(this, value); break;
            case 'print': print.call(this); break;
        }
    }
}


solution(['add hello', 'add again', 'remove hello', 'add again', 'print']) //again,again
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']) //pesho,george