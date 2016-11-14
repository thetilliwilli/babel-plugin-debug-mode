# **Debug mode**

>Stay debugged

### Installation

```
npm install babel-plugin-debug-mode --save-dev
```
### Your code
You define code snippet inside block statement with "debug" directive like this
```
function ChangeMode(pMode){
	{"debug";console.log("Mode changed to " + pMode);}
    //do something
}
```
Multiline implementation
```
theInput.onkeydown = (pEvent)=>{
	{
    	"debug";
    	console.log(pEvent.key);
        if(pEvent.key == "Enter")
        	pEvent.preventDefault();
    }
    //rest stuff
}
```
Inside Class Method definition
```
class Delegate
{
    ...
    WriteDebugInfo(pWho, pMethod){
        "debug";
        console.debug(`%c\t\u27A5${pWho.constructor.name}(${pMethod})`, "color:ForestGreen;font-size:1em;");
    }
}
```
### Setup for .babelrc
Turn **debug off** if you want remove blocks, which have "debug" directive
```
{
    "plugins": [["debug-mode", "off"]]
}
```
or like this
```
{
    "plugins": ["debug-mode"]
}
```
Turn **debug on** - blocks will retain untouched
```
{
    "plugins": [["debug-mode", "on"]]
}
```
### Feedback

Any feedback is highly appreciated (https://github.com/TilliWilli5 , tilliwilli@gmail.com)

Benice guys;)