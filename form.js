
function changeH1(){
    document.getElementById('h1Id').innerHTML = 'Form submited'
    document.getElementById('h1Id').style.color = 'black';


}
function formValidationt() {
    var input = document.getElementById("input").value;
    console.log(input);

}
function container(){
    var name = document.container.name.value;
    var email = document.container.email.value;

    

    if(name == null || name == ''){
        alert('name should not be empty')
    }
    if(email == null || email.length<10){
        alert('email should be more than chars')
    }

    if()
}