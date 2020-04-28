let time=new Date().getHours();
let password;
let minTime =8;
let maxTime = 20;
let minLength = 4;
let login = prompt('Enter your login');
if (login !== null){
let login_length = login.length;
 if (login===false){
     alert('Cancelled');
 }else if(login_length<minLength){
     alert('I do not know any users having name length less than 4 symbols');
 } else {
    switch (login) {
        case 'User':
            password = prompt('Enter your password', '');
            if (password === 'UserPass') {
                if (time>=minTime && time <maxTime) {
                    alert('Good day, dear User!');
                } else {
                    alert('Good evening, dear User!');
                }
            } else {
                alert('Wrong password');
            }
            break;
        case 'Admin':
            password = prompt('Enter your password', '');
            if (password === 'AdminPass') {
                if (time >=minTime && time<maxTime) {
                    alert('Good day, dear Admin!');
                } else{
                    alert('Good evening, dear Admin!');
                }
            } else {
                alert('Wrong password');
            }
            break;
        default:
            alert('I do not know you');
            break;
    }
}
} else{
    alert('Cancelled');
}
