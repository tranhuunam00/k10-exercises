function togglePassword() {
    var password = document.getElementsByName("password")[ 0 ];
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function toggleCPassword() {
    var password = document.getElementsByName("password")[ 1 ];
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

const imageUpload = document.getElementById('image-upload');
const imageUploadLabel = document.querySelector('label[for="image-upload"]');

function showINdisplay(message) {
    // Hiển thị thông báo lỗi trong một cửa sổ nhỏ
    alert(message);
}

function emailchecked(text) {
    const testEmail = /^[a-zA-Z0-9._]+@+[a-zA-Z0-9-]+\.[a-zA-Z.-]{2,}$/;

    return testEmail.test(text);
}
function checkPassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    return regex.test(password);
}

// Lấy dữ diệu từ INPUT
let email = document.getElementsByTagName('input')[ 0 ];

let username = document.getElementsByTagName('input')[ 1 ];

let planet = document.querySelector('input[name="option"]:checked');

let password = document.getElementsByTagName('input')[ 4 ];

let confirmpassword = document.getElementsByTagName('input')[ 5 ];

let dOB = document.getElementsByTagName('input')[ 6 ];
let dateINP = new Date(dOB).getTime();

let avt = document.getElementsByTagName('input')[ 7 ];


// Check entry conditions
if (!username.value || !email.value || !planet.value || !password.value || !confirmpassword.value || !dOB.value) {
    showINdisplay("Không giá trị nào được để trống!\nNo value can be left blank!")
} else {

    // Check email format
    // if (!emailchecked(toString(email.value))) {
    if (!emailchecked(email.value)) {
        console.log(!emailchecked((email.value)), "Error email!");
        showINdisplay("Your email is not the correct format!")
    }

    // check username 
    if (!/^[a-zA-Z0-9._]+$/.test(username.value)) {
        // if(!/^[a-zA-Z0-9._]$/.test(username.value)){
        showINdisplay("username không có đấu và không chứa các ký tự đặc biệt");
    }
    // check password 
    // Nếu password nhập lại không giống với password ban đầu thì hiển thị mà hình thông báo nhập sai và yêu cầu nhập lại
    if (!checkPassword(password.value)) {
        showINdisplay('Mật khẩu cần có ít nhất 6 ký tự! Trong đó phải có 1 chữ số, 1 chữ IN hoa, 1 ký tự in thường và 1 ký tự đặc biệt [!@#$%^&*]!');
    }
    if (password.value != confirmpassword.value) {
        showINdisplay("Confirm the Password is not the same as the previous password \n Please, re-enter your confirm password!")
    }

    // check năm sinh 
    // date.year > 1900;
    console.log(new Date(dOB.value).getFullYear());
    if (new Date(dOB.value).getFullYear() < 1900) {
        showINdisplay("Bạn đã sống trên 123 tuổi?\nNhập lại năm sinh!\nRe-enter birthday")
    }


    var dataSignUp = {
        username: username.value,
        email: email.value,
        password: password.value,
        sex: planet.value,
        dOB: dateINP,
    }
}

// Check entry values
console.log('Email: ', email.value, email.type);
console.log('Username: ', username.value, username.type);
console.log('Sex: ', planet.value, typeof (planet.value));
console.log('Password: ', password.value, password.type);
console.log('Confirm Password: ', confirmpassword.value, confirmpassword.type);
console.log('Birthday: ', dOB.value, dOB.type);
console.log('IMG_name: ', avt.value, avt.type);


function savedataRegister() {
    // POST API
    async function postJSONSignUP(data) {
        try {
            const reponse = await fetch("http://3.95.239.60:9001/api/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data
                }),
            });
            const result = await reponse.json();
            console.log("Success: ", result);
            if (reponse.ok) {
                showINdisplay("Chưa xong");
            } else {
                showINdisplay(result.message);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    postJSONSignUP(dataSignUP);
}
