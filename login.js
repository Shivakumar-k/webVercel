function formValidation(){
    var val = true;
    let names, email,password,password1,number;
    names = document.newForm.name.value
    email=document.newForm.email.value;
    password=document.newForm.pass.value;
    password1=document.newForm.pass1.value;
    number=document.newForm.num.value;


    console.log('name',names);
    console.log('email',email);
    console.log('password',password);
    console.log('password1',password1);
    console.log('number',number)

    if(names == null || names ==''|| names.length<3 ){
        document.getElementById('nameSpan').innerHTML = 'Name should not be emty or atleast more than 3 characters'
        //alert('Name should not be emty');
        val = false;
    }
    if(email == null || email == null || email.length<5){
        document.getElementById('emailSpan').innerHTML='Email should not be emty or atleast more than 5 characters'
        val = false;
    }
    if(password != password1){
        //alert('Confirm password should be same');
        document.getElementById('confirmSpan').innerHTML = 'Confirm password should be same'
        val = false;
    }
    if (isNaN(number)||number.length!=10){
        //alert('number is not valid')
        document.getElementById('numSpan').innerHTML = 'Enter a valid number'
        val = false;
    }
     return val;

}