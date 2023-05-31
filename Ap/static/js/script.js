/* 

Full validation form
*/
// 1) input mask

$(document).ready(function(){
    $(".phone").inputmask("(27) 99999-9999", {"onincomplete": function(){
        $(".phone").val("");
        swal("Opss !", "Incomplete phone. please review! ", "info")
        return false
    }})
})

// (2) input validation
// (a) frontend form
function validateEmail(email){
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email)
}

function validateForm(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const  experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const file = document.getElementById("file").value;

    if (name == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Name field cannot be empty.", "error");
        return false;
    }
    else if (name == name.toUpperCase() ){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('name').value = '';
        swal("Opsss!", "Name field cannot be Uppercase.", "info");
        return false;
    }
    else if (name.split(' ').length < 2) {
        document.getElementById("bg-spinner").style.display = 'none';        
        swal("Opsss!", "Your full name is required.", "info");
        return false;
    }
    else if (age == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Age field cannot be empty.", "error");
        return false;
    }
    else if ((age< 18) || (age > 60)){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('age').value= '';
        swal("Opsss!", "Age only between 18 and 59 years old.", "info");
        return false;
    }
    else if (email == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Email field cannot be empty.", "error");
        return false;
    }
    else if (!(validateEmail(email))){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('email').value ='';
        swal("Opsss!", "Put a valid email address.", "error");
        return false;
    }
    else if (phone == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Phone field cannot be empty.", "error");
        return false;
    }
    else if (address == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Address field cannot be empty.", "error");
        return false;
    }
    else if (experience == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Experience field cannot be empty.", "error");
        return false;
    }
    else if (skills == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Skills field cannot be empty.", "error");
        return false;
    }
    else if (file == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "File field cannot be empty.", "error");
        return false;
    }
    else{
        return true
    }
}

// (b) backend form
function validateEmail2(email2){
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email2)
}

function validateForm2(){
    const name2 = document.getElementById("name2").value;
    const age2 = document.getElementById("age2").value;
    const email2 = document.getElementById("email2").value;
    const phone2 = document.getElementById("phone2").value;
    const address2 = document.getElementById("address2").value;
    const  experience2 = document.getElementById("experience2").value;
    const skills2 = document.getElementById("skills2").value;
    const file2 = document.getElementById("file2").value;

    if (name2 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Name field cannot be empty.", "error");
        return false;
    }
    else if (name2 == name2.toUpperCase() ){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('name2').value = '';
        swal("Opsss!", "Name field cannot be Uppercase.", "info");
        return false;
    }
    else if (name2.split(' ').length < 2) {
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Your full name is required.", "info");
        return false;
    }
    else if (age2 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Age field cannot be empty.", "error");
        return false;
    }
    else if ((age2< 18) || (age2 > 60)){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('age2').value= '';
        swal("Opsss!", "Age only between 18 and 59 years old.", "info");
        return false;
    }
    else if (email2 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Email field cannot be empty.", "error");
        return false;
    }
    else if (!(validateEmail2(email2))){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('email2').value ='';
        swal("Opsss!", "Put a valid email address.", "error");
        return false;
    }
    else if (phone2 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Phone field cannot be empty.", "error");
        return false;
    }
    else if (address2 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Address field cannot be empty.", "error");
        return false;
    }
    else if (experience2 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Experience field cannot be empty.", "error");
        return false;
    }
    else if (skills2 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Skills field cannot be empty.", "error");
        return false;
    }
    else if (file2 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "File field cannot be empty.", "error");
        return false;
    }
    else{
        return true
    }
}
// (b) fullstack form
function validateEmail3(email3){
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email3)
}

function validateForm3(){
    const name3 = document.getElementById("name3").value;
    const age3 = document.getElementById("age3").value;
    const email3 = document.getElementById("email3").value;
    const phone3 = document.getElementById("phone3").value;
    const address3 = document.getElementById("address3").value;
    const  experience3 = document.getElementById("experience3").value;
    const skills3 = document.getElementById("skills3").value;
    const file3 = document.getElementById("file3").value;

    if (name3 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Name field cannot be empty.", "error");
        return false;
    }
    else if (name3 == name3.toUpperCase() ){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('name2').value = '';
        swal("Opsss!", "Name field cannot be Uppercase.", "info");
        return false;
    }
    else if (name3.split(' ').length < 2) {
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Your full name is required.", "info");
        return false;
    }
    else if (age3 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Age field cannot be empty.", "error");
        return false;
    }
    else if ((age3< 18) || (age3 > 60)){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('age3').value= '';
        swal("Opsss!", "Age only between 18 and 59 years old.", "info");
        return false;
    }
    else if (email3 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Email field cannot be empty.", "error");
        return false;
    }
    else if (!(validateEmail3(email3))){
        document.getElementById("bg-spinner").style.display = 'none';
        document.getElementById('email3').value ='';
        swal("Opsss!", "Put a valid email address.", "error");
        return false;
    }
    else if (phone3 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Phone field cannot be empty.", "error");
        return false;
    }
    else if (address3 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Address field cannot be empty.", "error");
        return false;
    }
    else if (experience3 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Experience field cannot be empty.", "error");
        return false;
    }
    else if (skills3 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "Skills field cannot be empty.", "error");
        return false;
    }
    else if (file3 == ""){
        document.getElementById("bg-spinner").style.display = 'none';
        swal("Opsss!", "File field cannot be empty.", "error");
        return false;
    }
    else{
        return true
    }
}



// Maximum allowed upload size


$(document).ready(function(){
    $("#file, #file2, #file3").bind('change', function(){
        var a = (this.files[0].size);

        if (a > 2*1048576) {
            swal("Attention !", "Maximum allowed size is 2mb.", "info");
            this.value = "";
        };
    });
});

// 4 Allowe only letters inname
$("#name, #name2, #name3").keyup(function(){
    if(!/^[a-zA-Z _]*$/.test(this.value)){
        this.value = this.value.split(/[^a-zA-Z _]/).join('');
    }
});



// (5) prevent more than 2 white space in input name

$("#name, #name2, #name3").on('keydown', function (){
    var $this = $(this);
    $(this).val($this.val().replace(/(\s{2,})|[^a-zA-Z0-9_']/g,' ').replace(/^\s*/, ''));
});


// (6) Prevenent starting with empty space
$("input[type ='text'], textarea").on("keypress", function(e){
    if(e.which === 32 && ! this.value.length)
    e.preventDefault();
});

// (7) allow only number in age

$("#age, #age2, #age3").keyup(function(){
    if (!/^[0-9]*$/.test(this.value)){
        this.value = this.value.split(/[^0-9]/).join('')
    }
});

// (8) if AGE is greater than 50 , auto clear
$("#age, #age2, #age3").keyup(function(){
    if ((this.value) > 50)  {
        this.value = '';
    }
});

// 9 Prevent starting by 0 in age field

$("#age, #age2, #age3").on("input", function (){
    if (/^0/.test(this.value)){
        this.value = this.value.replace(/^0/, "")
    }
});


// (10) Script to lowercase input email

$(document).ready(function(){
    $("#email, #email2,#email3").keyup(function(){
        this.value = this.value.toLowerCase();
    });
});