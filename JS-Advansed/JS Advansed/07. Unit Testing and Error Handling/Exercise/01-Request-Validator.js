function solve(HTTPObj){
   // let HTTPObj = JSON.parse(jsoninput);

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    function validateURI(uri){
        if(uri == undefined || !uri.match(/^([\w\d\.]+|\*)$/g)){
            return false;
        }
        return true;
    }
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    function validateMessage(message){
        if(message == undefined || !message.match(/^([^<>\\&'"]*)$/g)){
            return false;
        }
        return true;
    }

    if(validMethods.includes(HTTPObj.method) && 
        validateURI(HTTPObj.uri) && 
        validVersions.includes(HTTPObj.version) &&
        validateMessage(HTTPObj.message)){
            return HTTPObj;
        } else if(!validMethods.includes(HTTPObj.method)){
            throw new Error('Invalid request header: Invalid Method')
        } else if(!validateURI(HTTPObj.uri)){
            throw new Error('Invalid request header: Invalid URI')
        } else if(!validVersions.includes(HTTPObj.version)){
            throw new Error('Invalid request header: Invalid Version')
        } else if(!validateMessage(HTTPObj.message)){
            throw new Error('Invalid request header: Invalid Message')
        }
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))

console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}))