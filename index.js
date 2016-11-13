"use strict";

function HasDebugDirective(pPath){
    // console.log("pPath.node.body[0] " + pPath.node.body[0]);
    // if(!pPath.node.body[0])
    //     return false;
    if(pPath.node.body[0] && pPath.node.body[0].type == "ExpressionStatement" && pPath.node.body[0].expression.type == "StringLiteral")
        if(pPath.node.body[0].expression.value == "debug")
            return true;
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
            BlockStatement: Decider
        }
    };
}
module.exports = Plugin;