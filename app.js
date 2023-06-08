const express=require("express");
const bodyparser=require("body-parser");
const date=require(__dirname+"/date.js")

// console.log(date());
const app=express();

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

const items=["Burger","Pizza","Waffle"];
const workItems= [];
app.get("/",function(req,res){
  
    var day=date.getDate ();

  
    // var arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    res.render("list",{listTitle: day, newListItems: items});
// res.render("list",{kindofDay: day});
}
);
app.post("/",function(req,res){
    console.log(req.body);
    var item=req.body.newItem;
    if(req.body.list=="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});
app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});
app.post("/work",function(req,res){
    var item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");

});
app.get("/about",function(req,res){
    res.render("about");
});



app.listen(3000,function(){
    console.log("Server started on port 3000");
});  

