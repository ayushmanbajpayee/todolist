// console.log(module);
module.exports.getDate=function(){var date=new Date();
// var currentday=date.getDay();
const options ={
    weekday:"long",
    day:"numeric",
    month:"long"
};  
     
const day=date.toLocaleDateString("en-US",options); 
return day;
 }
 module.exports.getDay=function(){var date=new Date();
    // var currentday=date.getDay();
    const options ={
        weekday:"long" 
        // day:"numeric",
        // month:"long"
    };  
         
    const   day=date.toLocaleDateString("en-US",options); 
    return day;
     }
        console.log(module.exports); 