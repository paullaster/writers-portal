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

        
        studentsLoginText.innerText = "Student login"
        studentLogin.classList.add("login-btn");
        //Writers login
        writersLoginText.innerText = "Writers login"
        writersLogin.classList.add("login-btn");
        //Appending the elements to the page
        logoContainer.appendChild(loginPageLogo);
        sectionDiv.appendChild(logoContainer);
        sectionDiv.appendChild(para);
        studentLogin.appendChild(studentsLoginText);
        loginContainer.appendChild(studentLogin);
        writersLogin.appendChild(writersLoginText);
        loginContainer.appendChild(writersLogin);
        sectionDiv.appendChild(loginContainer)
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
    let loginForm = document.createElement("form");
    loginForm.setAttribute("method", "POST");
    loginForm.setAttribute("action", "/login");

    //username
    let usernameDiv = document.createElement("div");
    usernameDiv.classList.add("input-div");
    let usernameLabel = document.createElement("label");
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
    let passwordLabel = document.createElement("label");
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
    let submitBtn = document.createElement("button");
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
    loginForm.appendChild(usernameDiv);
    loginForm.appendChild(userPasswordDiv);
    loginForm.appendChild(btnDiv);
    //append form to div
    loginFormDiv.appendChild(loginForm);
    //login Div
    loginDiv.appendChild(logoDiv);
    loginDiv.appendChild(loginTextDiv)
    loginDiv.appendChild(loginFormDiv);
    loginDiv.appendChild(createAccount);
    loginDiv.appendChild(resetPassword);
    containerDiv.appendChild(loginDiv)
    loginBtnSection.appendChild(containerDiv);
};
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
    let loginForm = document.createElement("form");
    loginForm.setAttribute("method", "POST");
    loginForm.setAttribute("action", "/login");

    //username
    let usernameDiv = document.createElement("div");
    usernameDiv.classList.add("input-div");
    let usernameLabel = document.createElement("label");
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
    let passwordLabel = document.createElement("label");
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
    let submitBtn = document.createElement("button");
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
    loginForm.appendChild(usernameDiv);
    loginForm.appendChild(userPasswordDiv);
    loginForm.appendChild(btnDiv);
    //append form to div
    loginFormDiv.appendChild(loginForm);
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
        let loginForm = document.createElement("form");
        loginForm.setAttribute("method", "POST");
        loginForm.setAttribute("action", "/add-user");
    
        //username
        let usernameDiv = document.createElement("div");
        usernameDiv.classList.add("input-div");
        let usernameLabel = document.createElement("label");
        usernameLabel.classList.add("login-label");
        usernameLabel.innerText = "Username";
        let usernameInput = document.createElement("input");
        usernameInput.setAttribute("name","email");
        usernameInput.setAttribute("type", "email");
        usernameInput.setAttribute("maxLength", "65");
        usernameInput.setAttribute("placeholder","e.g userexample@gmail.com");
        usernameInput.setAttribute("required", true);
        usernameInput.classList.add("login-input");
        //password
        let userPasswordDiv = document.createElement("div");
        userPasswordDiv.classList.add("input-div");
        let passwordLabel = document.createElement("label");
        passwordLabel.classList.add("login-label");
        passwordLabel.innerText = "Password";
        let passwordInput = document.createElement("input");
        passwordInput.setAttribute("name","password");
        passwordInput.setAttribute("type", "password");
        passwordInput.setAttribute("maxLength", "80");
        passwordInput.setAttribute("minLength", "8");
        passwordInput.setAttribute("required", true);
        passwordInput.classList.add("login-input");
        //confirm password
        let confirmPasswordDiv = document.createElement("div");
        confirmPasswordDiv.classList.add("input-div");
        let confirmPasswordLabel = document.createElement("label");
        confirmPasswordLabel.classList.add("login-label");
        confirmPasswordLabel.innerText = "Confirm password";
        let confirmPasswordInput = document.createElement("input");
        confirmPasswordInput.setAttribute("name","userPassword");
        confirmPasswordInput.setAttribute("type", "password");
        confirmPasswordInput.setAttribute("maxLength", "80");
        confirmPasswordInput.setAttribute("minLength", "8");
        confirmPasswordInput.setAttribute("required", true);
        confirmPasswordInput.classList.add("login-input");
        //select account type: Student : Writers
        let accountTypeDiv = document.createElement("div");
        accountTypeDiv.classList.add("input-div");
        let accounTypeLabel = document.createElement("label");
        accounTypeLabel.classList.add("login-label");
        accounTypeLabel.innerText = "Select account type";
        let accountTypeSelect = document.createElement("select");
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
        //submit button
        let btnDiv = document.createElement("div");
        btnDiv.classList.add("submit-btn-div");
        let submitBtn = document.createElement("button");
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
        accounTypeLabel.appendChild(accountTypeSelect);
        //label -> div
        usernameDiv.appendChild(usernameLabel);
        userPasswordDiv.appendChild(passwordLabel);
        confirmPasswordDiv.appendChild(confirmPasswordLabel);
        accountTypeDiv.appendChild(accounTypeLabel);
        //btn
        btnDiv.appendChild(submitBtn);
        //append to form 
        //options
        singInForExistingAccount.appendChild(signInTextSpan);
        loginForm.appendChild(usernameDiv);
        loginForm.appendChild(userPasswordDiv);
        loginForm.appendChild(confirmPasswordDiv);
        loginForm.appendChild(accountTypeDiv);
        loginForm.appendChild(btnDiv);
        //append form to div
        loginFormDiv.appendChild(loginForm);
        //login Div
        loginDiv.appendChild(logoDiv);
        loginDiv.appendChild(loginTextDiv)
        loginDiv.appendChild(loginFormDiv);
        loginDiv.appendChild(singInForExistingAccount);
        containerDiv.appendChild(loginDiv)
        loginBtnSection.appendChild(containerDiv);

};
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
