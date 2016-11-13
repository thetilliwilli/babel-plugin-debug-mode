# **Debug mode**

>where dreams come true

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