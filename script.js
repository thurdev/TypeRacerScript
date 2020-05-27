//
// Working in 2020 Copyright © ThurDev
//

for(var i = 0; i < document.getElementsByTagName("span")[5].innerText.length; i++){
    document.getElementsByTagName("input")[0].value += document.getElementsByTagName("span")[5].innerText.substring(i, i+1);
}

setTimeout(() => {
for(var i = 0; i < document.getElementsByTagName("span")[6].innerText.length; i++){
    document.getElementsByTagName("input")[0].value += document.getElementsByTagName("span")[6].innerText.substring(i, i+1);
}
}, 1000);
