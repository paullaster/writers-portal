//This signin js file
//global variables
let mainBody = document.getElementById('body');
let signInBtn = document.getElementById('signin-btn');
 //creating login section
let loginBtnSection = document.createElement('section');
let studentLogin = document.createElement('div');
let writersLogin = document.createElement('div');
let createAccount = document.createElement("div");
let resetPassword = document.createElement("div");
let singInForExistingAccount = document.createElement("div");
let studentsLoginText = document.createElement("span");
let writersLoginText = document.createElement("span");
let signInTextSpan = document.createElement("span");
let accountTextSpan = document.createElement("span");
let resetPasswordText = document.createElement("span");
let accountCreationForm = document.createElement("form");
let studentForm = document.createElement("form");
let writersForm = document.createElement("form");
let usernameInput = document.createElement("input");
let passwordInput = document.createElement("input");
let confirmPasswordInput = document.createElement("input");
let phoneNumberInput = document.createElement("input");
let accountTypeSelect = document.createElement("select");
let tcAndCookiePolicyCheckBox = document.createElement("input");
let errorDiv = document.createElement("div");
let errorLabel = document.createElement("p");
let usernameLabel = document.createElement("label");
let passwordLabel = document.createElement("label");
let confirmPasswordLabel = document.createElement("label");
let phoneNumberLabel = document.createElement("label");
let accounTypeLabel = document.createElement("label");
let tcAndCookiePolicyLabel = document.createElement("label");
let submitBtn = document.createElement("button");
if(this.loaded === true){
    console.log("Content loaded successfully");
}else{
    console.log("The content is still loading");
};
let loginOptionsHandler = ()=>{
    signInBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        resetPage();
        loginChoicesPage();
    });
};
    //riderecting to student login page
let studentLoginHandler = ()=>{
    studentLogin.addEventListener('click', (e)=>{
        e.preventDefault();
        resetLoginSection();
        studentLoginPage();
    });
};    
//Rendering writers login page
let writersLoginHandler = ()=>{
    writersLogin.addEventListener('click', (e)=>{
        e.preventDefault();
        resetLoginSection();
        writersLoginPage();
    });
};
//reset index page
let resetPage = ()=>{
    mainBody.innerHTML = "";
};
//Login choices page
let loginChoicesPage = ()=>{
        mainBody.classList.add("bg-color");
        loginBtnSection.classList.add("section-login");
         //section div
        let sectionDiv = document.createElement("div");
        sectionDiv.classList.add("section-div");
        //Research Icon logo
        let logoContainer = document.createElement("div");
        logoContainer.classList.add("logo-container");
        let loginPageLogo = document.createElement('img');
        loginPageLogo.setAttribute("src","../Images/reasearch-icons_logo-removebg-preview.png");
        loginPageLogo.setAttribute("alt", "Research Icons Logo");
        loginPageLogo.setAttribute("height", "250px");
        loginPageLogo.setAttribute("width", "250px");
        loginPageLogo.classList.add("login-logo");
        //Login choices text
        let para = document.createElement('p');
        para.innerText = "Login choices";
        //Container div for login buttons
        let loginContainer = document.createElement("div");
        loginContainer.classList.add("login-container");

        
        studentsLoginText.innerText = "Student login";
        studentLogin.classList.add("login-btn");
        //Writers login
        writersLoginText.innerText = "Writers login";
        writersLogin.classList.add("login-btn");
        //create account
        accountTextSpan.innerText = "Create account";
        createAccount.classList.add("login-btn");
        //Appending the elements to the page
        logoContainer.appendChild(loginPageLogo);
        sectionDiv.appendChild(logoContainer);
        sectionDiv.appendChild(para);
        studentLogin.appendChild(studentsLoginText);
        loginContainer.appendChild(studentLogin);
        writersLogin.appendChild(writersLoginText);
        loginContainer.appendChild(writersLogin);
        createAccount.appendChild(accountTextSpan);
        loginContainer.appendChild(createAccount);
        sectionDiv.appendChild(loginContainer);
        loginBtnSection.appendChild(sectionDiv);
        mainBody.appendChild(loginBtnSection);
};
//reset login options page
let resetLoginSection = ()=>{
    loginBtnSection.innerHTML = "";
};
//student login page
let studentLoginPage = ()=>{
    //container div
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("login-div-container");
    //login box
    let loginDiv = document.createElement("div");
    loginDiv.classList.add("login-div");
    //Research Icon logo
    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logo-login")
    let logoImg = document.createElement('img');
    logoImg.setAttribute("src","../Images/reasearch-icons_logo-removebg-preview.png");
    logoImg.setAttribute("alt", "Research Icons Logo");
    logoImg.setAttribute("height", "250px");
    logoImg.setAttribute("width", "250px");
    logoImg.classList.add("logo-img");
    //Login text
    let loginTextDiv =document.createElement("div");
    loginTextDiv.classList.add("login-text-div");
    let loginText = document.createElement("span");
    loginText.innerText = "Student login";
    //login form
    let loginFormDiv = document.createElement("div");
    loginFormDiv.classList.add("login-form-div");
   // let loginForm = document.createElement("form");
   studentForm.setAttribute("method", "POST");
  // userForm.setAttribute("action", "/login");

    //username
    let usernameDiv = document.createElement("div");
    usernameDiv.classList.add("input-div");
    usernameLabel.classList.add("login-label");
    usernameLabel.innerText = "Username";
    usernameInput.setAttribute("name","email");
    usernameInput.setAttribute("type", "email");
    usernameInput.setAttribute("maxLength", "65");
    usernameInput.setAttribute("placeholder","e.g userexample@gmail.com");
    usernameInput.setAttribute("required", true);
    usernameInput.classList.add("login-input");
    //password
    let userPasswordDiv = document.createElement("div");
    userPasswordDiv.classList.add("input-div");
    passwordLabel.classList.add("login-label");
    passwordLabel.innerText = "Password";
    passwordInput.setAttribute("name","userPassword");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("maxLength", "80");
    passwordInput.setAttribute("minLength", "8");
    passwordInput.setAttribute("required", true);
    passwordInput.classList.add("login-input");
    //submit button
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("submit-btn-div");
    submitBtn.innerText = "Login";
    submitBtn.setAttribute("type", "submit");
    submitBtn.classList.add("submit-btn");
    //create option
    createAccount.classList.add("options");
    accountTextSpan.innerText = "Create account";
    //password reset option
    resetPassword.classList.add("options");
    resetPasswordText.innerText = "Forgot password?";
    //Append children
    //logo
    logoDiv.appendChild(logoImg);
    //Append login text
    loginTextDiv.appendChild(loginText);
    //input->label
    usernameLabel.appendChild(usernameInput);
    passwordLabel.appendChild(passwordInput);
    //label -> div
    usernameDiv.appendChild(usernameLabel);
    userPasswordDiv.appendChild(passwordLabel);
    //btn
    btnDiv.appendChild(submitBtn);
    //append to form 
    //options
    createAccount.appendChild(accountTextSpan);
    resetPassword.appendChild(resetPasswordText);
    studentForm.appendChild(usernameDiv);
    studentForm.appendChild(userPasswordDiv);
    studentForm.appendChild(btnDiv);
    //append form to div
    loginFormDiv.appendChild(studentForm);
    //login Div
    loginDiv.appendChild(logoDiv);
    loginDiv.appendChild(loginTextDiv)
    loginDiv.appendChild(loginFormDiv);
    loginDiv.appendChild(createAccount);
    loginDiv.appendChild(resetPassword);
    containerDiv.appendChild(loginDiv)
    loginBtnSection.appendChild(containerDiv);
};
studentForm.addEventListener('submit', (e)=>{
    e.preventDefault();
     let userData = {
         email: usernameInput.value,
         password: passwordInput.value
     }
    fetch('/student-login',{
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData) 
    })
    .then((res)=>{
       return res.json();
    })
    .then((data)=>{
       console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    });
});
//writers login page
let writersLoginPage = ()=>{
    //container div
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("login-div-container");
    //login box
    let loginDiv = document.createElement("div");
    loginDiv.classList.add("login-div");
    //Research Icon logo
    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logo-login")
    let logoImg = document.createElement('img');
    logoImg.setAttribute("src","../Images/reasearch-icons_logo-removebg-preview.png");
    logoImg.setAttribute("alt", "Research Icons Logo");
    logoImg.setAttribute("height", "250px");
    logoImg.setAttribute("width", "250px");
    logoImg.classList.add("logo-img");
    //Login text
    let loginTextDiv =document.createElement("div");
    loginTextDiv.classList.add("login-text-div");
    let loginText = document.createElement("span");
    loginText.innerText = "Writers login";
    //login form
    let loginFormDiv = document.createElement("div");
    loginFormDiv.classList.add("login-form-div");
    //let loginForm = document.createElement("form");
    writersForm.setAttribute("method", "POST");
    //loginForm.setAttribute("action", "/login");

    //username
    let usernameDiv = document.createElement("div");
    usernameDiv.classList.add("input-div");
    usernameLabel.classList.add("login-label");
    usernameLabel.innerText = "Username";
    let usernameInput = document.createElement("input");
    usernameInput.setAttribute("name","userName");
    usernameInput.setAttribute("type", "email");
    usernameInput.setAttribute("maxLength", "65");
    usernameInput.setAttribute("placeholder","e.g userexample@gmail.com");
    usernameInput.setAttribute("required", true);
    usernameInput.classList.add("login-input");
    //password
    let userPasswordDiv = document.createElement("div");
    userPasswordDiv.classList.add("input-div");
    passwordLabel.classList.add("login-label");
    passwordLabel.innerText = "Password";
    let passwordInput = document.createElement("input");
    passwordInput.setAttribute("name","userPassword");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("maxLength", "80");
    passwordInput.setAttribute("minLength", "8");
    passwordInput.setAttribute("required", true);
    passwordInput.classList.add("login-input");
    //submit button
    let btnDiv = document.createElement("div");
    btnDiv.classList.add("submit-btn-div");
    submitBtn.innerText = "Login";
    submitBtn.setAttribute("type", "submit");
    submitBtn.classList.add("submit-btn");
    //create option
    createAccount.classList.add("options");
    accountTextSpan.innerText = "Create account";
    //password reset option
    resetPassword.classList.add("options");
    resetPasswordText.innerText = "Forgot password?";
    //Append children
    //logo
    logoDiv.appendChild(logoImg);
    //Append login text
    loginTextDiv.appendChild(loginText);
    //input->label
    usernameLabel.appendChild(usernameInput);
    passwordLabel.appendChild(passwordInput);
    //label -> div
    usernameDiv.appendChild(usernameLabel);
    userPasswordDiv.appendChild(passwordLabel);
    //btn
    btnDiv.appendChild(submitBtn);
    //append to form 
    //options
    createAccount.appendChild(accountTextSpan);
    resetPassword.appendChild(resetPasswordText);
    writersForm.appendChild(usernameDiv);
    writersForm.appendChild(userPasswordDiv);
    writersForm.appendChild(btnDiv);
    //append form to div
    loginFormDiv.appendChild(writersForm);
    //login Div
    loginDiv.appendChild(logoDiv);
    loginDiv.appendChild(loginTextDiv)
    loginDiv.appendChild(loginFormDiv);
    loginDiv.appendChild(createAccount);
    loginDiv.appendChild(resetPassword);
    containerDiv.appendChild(loginDiv)
    loginBtnSection.appendChild(containerDiv);
};
let optionSignInHandler = ()=>{
    singInForExistingAccount.addEventListener('click', (e)=>{
        resetLoginSection();
        loginChoicesPage();
    });
};
//function for creating new account
let newAcount = ()=>{
    resetLoginSection();
        //container div
        let containerDiv = document.createElement("div");
        containerDiv.classList.add("login-div-container");
        //login box
        let loginDiv = document.createElement("div");
        loginDiv.classList.add("login-div");
        //Research Icon logo
        let logoDiv = document.createElement("div");
        logoDiv.classList.add("logo-login")
        let logoImg = document.createElement('img');
        logoImg.setAttribute("src","../Images/reasearch-icons_logo-removebg-preview.png");
        logoImg.setAttribute("alt", "Research Icons Logo");
        logoImg.setAttribute("height", "250px");
        logoImg.setAttribute("width", "250px");
        logoImg.classList.add("logo-img");
        //Login text
        let loginTextDiv =document.createElement("div");
        loginTextDiv.classList.add("login-text-div");
        let loginText = document.createElement("span");
        loginText.innerText = "Create account";
        //login form
        let loginFormDiv = document.createElement("div");
        loginFormDiv.classList.add("login-form-div");
        accountCreationForm.setAttribute("method", "POST");
       // userForm.setAttribute("action", "/new");
    
        //username
        let usernameDiv = document.createElement("div");
        usernameDiv.classList.add("input-div");
        usernameLabel.classList.add("login-label");
        usernameLabel.innerText = "Username";
        usernameInput.setAttribute("name","email");
        usernameInput.setAttribute("type", "email");
        usernameInput.setAttribute("maxLength", "65");
        usernameInput.setAttribute("placeholder","e.g userexample@gmail.com");
        usernameInput.setAttribute("required", true);
        usernameInput.classList.add("login-input");
        //password
        let userPasswordDiv = document.createElement("div");
        userPasswordDiv.classList.add("input-div");
        passwordLabel.classList.add("login-label");
        passwordLabel.innerText = "Password";
        passwordInput.setAttribute("name","password");
        passwordInput.setAttribute("type", "password");
        passwordInput.setAttribute("maxLength", "80");
        passwordInput.setAttribute("minLength", "8");
        passwordInput.setAttribute("required", true);
        passwordInput.classList.add("login-input");
        //confirm password
        let confirmPasswordDiv = document.createElement("div");
        confirmPasswordDiv.classList.add("input-div");
        confirmPasswordLabel.classList.add("login-label");
        confirmPasswordLabel.innerText = "Confirm password";
        confirmPasswordInput.setAttribute("name","userPassword");
        confirmPasswordInput.setAttribute("type", "password");
        confirmPasswordInput.setAttribute("maxLength", "80");
        confirmPasswordInput.setAttribute("minLength", "8");
        confirmPasswordInput.setAttribute("required", true);
        confirmPasswordInput.classList.add("login-input");
        //Phone number:
        let phoneNumberDiv = document.createElement("div");
        phoneNumberDiv.classList.add("input-div");
        phoneNumberLabel.classList.add("login-label");
        phoneNumberLabel.innerText = "Phone number";
        phoneNumberInput.setAttribute("name", "userPhoneNumber");
        phoneNumberInput.setAttribute("type", "tel");
        phoneNumberInput.setAttribute("maxLenghth", "13");
        phoneNumberInput.setAttribute("required", true);
        phoneNumberInput.classList.add("login-input");
        //select account type: Student : Writers
        let accountTypeDiv = document.createElement("div");
        accountTypeDiv.classList.add("input-div");
        accounTypeLabel.classList.add("login-label");
        accounTypeLabel.innerText = "Select account type";
        accountTypeSelect.classList.add("select-position");
        let option1 = document.createElement("option");
        option1.setAttribute("value", "NONE");
        option1.innerText = "-NONE-";
        option1.setAttribute("selected", true);
        let option2 = document.createElement("option");
        option2.setAttribute("value", "Student");
        option2.innerText = "Student";
        let option3 = document.createElement("option");
        option3.setAttribute("value", "Writer");
        option3.innerText = "Writer";
        //Terms and conditions and cookie policy
        let tcAndCookiePolicyDiv = document.createElement("div");
        tcAndCookiePolicyDiv.classList.add("input-div","position-chbk");
        tcAndCookiePolicyLabel.classList.add("chbk-label");
        let tc = "<a href=\"\\#\"class=\"style_htm_var\">T&C</a>";
        let cp = "<a href=\"\\#\" class=\"style_htm_var\">Cookie policy</a>";
        let pp = "<a href=\"\\#\" class=\"style_htm_var\">Privacy</a>";
        tcAndCookiePolicyLabel.innerHTML =`Read and agree to our ${tc} , ${cp} and ${pp}`;
        tcAndCookiePolicyCheckBox.setAttribute("name", "tcCheckbox");
        tcAndCookiePolicyCheckBox.setAttribute("type", "checkbox");
        tcAndCookiePolicyCheckBox.classList.add("chbk-input");
        //submit button
        let btnDiv = document.createElement("div");
        btnDiv.classList.add("submit-btn-div");
        submitBtn.innerText = "Create account";
        submitBtn.setAttribute("type", "submit");
        submitBtn.classList.add("submit-btn");
        //create option
        singInForExistingAccount.classList.add("options");
        signInTextSpan.innerText = "Sign in";
        //Append children
        //logo
        logoDiv.appendChild(logoImg);
        //Append login text
        loginTextDiv.appendChild(loginText);
        //Appending options to select tag
        accountTypeSelect.appendChild(option1);
        accountTypeSelect.appendChild(option2);
        accountTypeSelect.appendChild(option3);
        //input->label
        usernameLabel.appendChild(usernameInput);
        passwordLabel.appendChild(passwordInput);
        confirmPasswordLabel.appendChild(confirmPasswordInput);
        phoneNumberLabel.appendChild(phoneNumberInput);
        accounTypeLabel.appendChild(accountTypeSelect);
        tcAndCookiePolicyLabel.appendChild(tcAndCookiePolicyCheckBox);
        //label -> div
        usernameDiv.appendChild(usernameLabel);
        userPasswordDiv.appendChild(passwordLabel);
        confirmPasswordDiv.appendChild(confirmPasswordLabel);
        phoneNumberDiv.appendChild(phoneNumberLabel);
        accountTypeDiv.appendChild(accounTypeLabel);
        tcAndCookiePolicyDiv.appendChild(tcAndCookiePolicyLabel);
        //btn
        btnDiv.appendChild(submitBtn);
        //append to form 
        //options
        singInForExistingAccount.appendChild(signInTextSpan);
        accountCreationForm.appendChild(usernameDiv);
        accountCreationForm.appendChild(userPasswordDiv);
        accountCreationForm.appendChild(confirmPasswordDiv);
        accountCreationForm.appendChild(errorDiv);
        accountCreationForm.appendChild(phoneNumberDiv);
        accountCreationForm.appendChild(accountTypeDiv);
        accountCreationForm.appendChild(tcAndCookiePolicyDiv);
        accountCreationForm.appendChild(btnDiv);
        //append form to div
        loginFormDiv.appendChild(accountCreationForm);
        //login Div
        loginDiv.appendChild(logoDiv);
        loginDiv.appendChild(loginTextDiv)
        loginDiv.appendChild(loginFormDiv);
        loginDiv.appendChild(singInForExistingAccount);
        containerDiv.appendChild(loginDiv)
        loginBtnSection.appendChild(containerDiv);
};
accountCreationForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(passwordInput.value !== confirmPasswordInput.value){
        errorLabel.classList.add("error-Label");
        errorLabel.innerText = "Confirm password must be similar to password!";
        errorDiv.appendChild(errorLabel);
        return;
    }else{
        if(accountTypeSelect.value === "NONE"){
            errorLabel.innerText = "";
            errorLabel.classList.add("error-Label");
            errorLabel.innerText = "Account type cannot be NONE!";
            errorDiv.appendChild(errorLabel);
            return;
        }else{
            if(tcAndCookiePolicyCheckBox.checked !== true){
                errorLabel.innerText = "";
                errorLabel.classList.add("error-Label");
                errorLabel.innerText = "Please read and accept our Terms and Policies to continue!";
                errorDiv.appendChild(errorLabel);
                return;
            }else{
                errorLabel.innerText = "";
            }
        }
    }
    let newAccount ={
        email: usernameInput.value,
        password: passwordInput.value,
        accountType: accountTypeSelect.value,
        tos: tcAndCookiePolicyCheckBox.value,
    }
    console.log(newAccount);
    fetch('/add-user',{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newAccount)
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        return data;
    })
    .catch((err)=>{
        console.error(`Message: ${err}`);
    });
    //console.log(passwordInput.value)
    //console.log(confirmPasswordInput.value)
    //console.log(accountTypeSelect.value);
});
let newAccountHandler = ()=>{
    createAccount.addEventListener("click", (e)=>{
        e.preventDefault();
        newAcount();
    });
};
let handlerFunctionsCaller = ()=>{
    newAccountHandler();
    loginOptionsHandler();
    studentLoginHandler();
    writersLoginHandler();
    optionSignInHandler();
};
handlerFunctionsCaller();
