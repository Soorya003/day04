var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
   var res = JSON.parse(request.response);
   console.log(res);
   for(var i=0;i<res.length;i++){
    console.log(res[i].region);
   }
for(var i=0;i<res.length;i++){
    console.log(res[i].name.common);
   }
for(var i=0;i<res.length;i++){
    console.log(res[i].subregion);
   }
for(var i=0;i<res.length;i++){
    console.log(res[i].population);
   }
}
//use the same rest countries and print all countries names,regions,sub region and populations