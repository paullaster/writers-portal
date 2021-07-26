//This order js file
if(this.loaded = true){
    let mainBody = document.getElementById('body');
    let signInBtn = document.getElementById('signin-btn');
    signInBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        resetPage();
        mainBody.classList.add("bg-color");
         //creating login section
         let loginBtnSection = document.createElement('section');
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
        //creating students login
        let studentLogin = document.createElement('div');
        let studentLoginText = document.createElement("span");
        studentLoginText.innerText = "Student login"
        studentLogin.classList.add("student-login-btn");
        //Writers login
        let writersLogin = document.createElement('div');
        let writersLoginText = document.createElement("span");
        writersLoginText.innerText = "Writers login"
        writersLogin.classList.add("writers-login-btn");
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

    });
    let resetPage = ()=>{
        mainBody.innerHTML = "";
    }
}else{
    alert("The content is still loading");
};
