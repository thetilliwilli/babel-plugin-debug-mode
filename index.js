"use strict";
function HasDebugDirective(pPath){
    if(pPath.node.type == "BlockStatement")
    {
        if(pPath.node.body[0] && pPath.node.body[0].type == "ExpressionStatement" && pPath.node.body[0].expression.type == "StringLiteral")
            if(pPath.node.body[0].expression.value == "debug")
                return true;
    }
    else
    {
        for(let derictive of pPath.node.body.directives)
            if(derictive.value.value == "debug")
                return true;
    }
    return false;
}
function Decider(pPath, pState){
    if(HasDebugDirective(pPath))
    {
        let isDebugMode = pState.opts == "on";
        if(isDebugMode)
            return;
        pPath.remove();
    }
}
function Plugin(){
    return {
        visitor:{
            "BlockStatement|ClassMethod": Decider
        }
    };
}
module.exports = Plugin;