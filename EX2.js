function myfun(){
    //get the value from text-boxes
    var x = document.getElementById('x') //here .value remove
    var y = document.getElementById('y')  //here .value remove

    var status = true //global

    //errors
     var x_err = document.getElementById('x_err')
     var y_err = document.getElementById('y_err')
     
     //Bootstrap-icons
     var wrong = `<i class="bi bi-patch-exclamation-fill"></i>`
     var right = `<i class="bi bi-patch-check-fill"></i>`

    //user validation
   if(x.value == undefined || x.value == "")  //here .value added
   {
     x_err.innerHTML=`${wrong}Enter X value` //innerText replace with innerHTML
     x.style.border="1px solid #c22e1d"
      status=false;  //modify to false
   }
   else if(!x.value.match(/^[0-9]+$/))
   {
    x_err.innerHTML=`${wrong} Only numbers[0-9]`
    x.style.border="1px solid #c22e1d"
    x_err.className="text-danger"
    status=false;

   }
   else{
       x_err.innerHTML=`${right} Thank you` //not mandatory
       x.style.border="1px solid #1d9130"
       x_err.className="text-success"

   }

   // email validation
   if(y.value == undefined || y.value == "")  //here .value added
   {
    y_err.innerHTML= `${wrong} Enter Y value`
    y.style.border="1px solid #c22e1d"

    status=false;
   }
   else if(!y.value.match(/^[0-9]+$/))
   {
    y_err.innerHTML=`${wrong} must be numbers[0-9]`
    y.style.border="1px solid #c22e1d"
    y_err.className="text-danger"

   status=false;

   }
   else{
     y_err.innerHTML=`${right} Thank you` //not mandatory
     y.style.border="1px solid #1d9130"
     y_err.className="text-success"


   }
   if(status)
   {
    alert(`
           x value is : ${x.value} \n  
           y value is : ${y.value} \n
           x+y value is : ${Number.parseInt(x.value)+Number.parseInt(y.value)} 
    `)
   }

   return status
    
    
}