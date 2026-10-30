
function launchBrowser (browserName){
if (browserName == 'chrome'){
 console.log ("launch chrome browser")
}else{
 console.log ("launch other browser")
}
}


function runTest (testType){
switch(testType){
case 'smoke':
console.log('smoke')
break

case 'sanity':
console.log('sanity')
break

case 'regression':
console.log('regression')
break

default:
console.log('sanity')
}
}
launchBrowser('chrome')
runTest('smoke')