function formValidation(){

    let name = document.newNameform.nameName.value;
    var returnElement = true;
    console.log('name>>',name)


    if(name == null || name ==''|| name.length<3 ){
        setError("div1",'Name should not be emty or atleast 3 chars')

        //document.getElementById('nameSpan').innerHTML = 'Name should not be emty or atleast 3 chars'


        returnElement = false;
    }
    return returnElement;
}

function setError(id, errorMessage) {
  let element = document.getElementById(id);
  element.getElementsByClassName('nameClass')[0].innerHTML = errorMessage;
  
  //errorMessage = 'Name should not be emty or atleast 3 chars';

  
}

  