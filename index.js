
function receivesAFunction(thing){
    return thing();
}


function returnsANamedFunction(){
    let namedFunction = function(){
        console.log('do something!')
    }
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('do i work?')
    }
}


