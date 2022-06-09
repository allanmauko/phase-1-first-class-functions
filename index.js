function receivesAFunction (callback){
return callback()
}

function returnsANamedFunction (){
    return function namedFunction(){
        return "named";
    }
}

function returnsAnAnonymousFunction (){
return function(){
    return "anonymous";
}
}