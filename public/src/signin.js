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
if(this.loaded = true){
    signInBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        resetPage();
        loginChoicesPage();
        //riderecting to student login page
        studentLogin.addEventListener('click', (e)=>{
            e.preventDefault();
            resetLoginSection();
            studentLoginPage();
        });
        writersLogin.addEventListener('click', (e)=>{
            e.preventDefault();
            resetLoginSection();
            writersLoginPage();
        })
    });
    
}else{
    alert("The content is still loading");
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
        logoContainer.classList.add("logo-container")
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

        let studentLoginText = document.createElement("span");
        studentLoginText.innerText = "Student login"
        studentLogin.classList.add("login-btn");
        //Writers login
        let writersLoginText = document.createElement("span");
        writersLoginText.innerText = "Writers login"
        writersLogin.classList.add("login-btn");
        //Appending the elements to the page
        logoContainer.appendChild(loginPageLogo);
        sectionDiv.appendChild(logoContainer);
        sectionDiv.appendChild(para);
        studentLogin.appendChild(studentLoginText);
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
    let accountTextSpan = document.createElement("span");
    accountTextSpan.innerText = "Create account";
    //password reset option
    resetPassword.classList.add("options");
    let resetPasswordText = document.createElement("span");
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
    let accountTextSpan = document.createElement("span");
    accountTextSpan.innerText = "Create account";
    //password reset option
    resetPassword.classList.add("options");
    let resetPasswordText = document.createElement("span");
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