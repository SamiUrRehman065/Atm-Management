const  loginArea= document.getElementById("login-area"),
       dashboard= document.getElementById("dashboard"),
       withdraw= document.getElementById("withdraw"),
       deposit= document.getElementById("deposit"),
       balance= document.getElementById("balance"),
       withdrawInput= document.getElementById("withdraw-input"),
       depositInput= document.getElementById("deposit-input"),
       withdrawBtn= document.getElementById("withdraw-btn"),
       depositBtn= document.getElementById("deposit-btn"),
       submitBtn=document.getElementById("submit-btn"),
       alert=document.getElementById("warning-area"),
       returnBtn=document.getElementById("return-btn"),
       text= document.getElementById("text"),
       alert2=document.getElementById("warning-area2"),
       returnBtnlogin=document.getElementById("return-btnlogin"),
       text2= document.getElementById("text2"),
       email= document.getElementById("email"),
       pass= document.getElementById("pass");


submitBtn.addEventListener('click', () => {
        
        const inputEmail = email.value;
        const inputPassword = pass.value;
    
    
        const isValidCredentials = validateCredentials(inputEmail, inputPassword);
    
        if (isValidCredentials) {
            loginArea.style.display = "none";
            dashboard.classList.remove('d-none');
        } else {
            wrongCredentials();
        }
     });
    
    
const validateCredentials = (inputEmail, inputPassword) => {
        const validEmail = "fa23bscs0022@maju.edu.pk";
        const validPassword = "123456789";
    
        return inputEmail === validEmail && inputPassword === validPassword;
     }
    

const wrongCredentials = (value) => {
        alert2.classList.remove('d-none');
        loginArea.classList.add('d-none');
        text2.innerText=`Invalid Credentials.Try again with correct credentials `;
        returnBtnlogin.innerText="Back To Login page";
     }    

      
const backToLoginPage = () => {
        alert2.classList.add('d-none'); 
        loginArea.classList.remove('d-none'); 
     }
    
    
returnBtnlogin.addEventListener('click', () => {
        backToLoginPage();
        return;
     });
     

depositBtn.addEventListener('click', ()=> {
        const value= depositInput.value;
        const depositValue= Number(deposit.innerText)+Number(value);
        const balanceValue= Number(balance.innerText)+Number(value);
        deposit.innerText= depositValue;
        balance.innerText= balanceValue;
        depositInput.value='';
     });


withdrawBtn.addEventListener('click', ()=> {
        const value= withdrawInput.value;
        if(Number(value)<=0){
           showAlert(value);
           return;
        }else if(Number(value) > Number(balance.innerText)){
            lowBalance(value);
            return;
        }
        else{
        const withdrawValue= Number(withdraw.innerText)+Number(value);
        const balanceValue= Number(balance.innerText)-Number(value);
        withdraw.innerText= withdrawValue;
        balance.innerText= balanceValue;
        withdrawInput.value='';
        }
     });    


const backToDashboard = () => {
        dashboard.classList.remove('d-none'); 
        alert.classList.add('d-none'); 
     }
    
    
returnBtn.addEventListener('click', () => {
        backToDashboard();
        return;
     });


const showAlert = (value) => {
       alert.classList.remove('d-none');
       dashboard.classList.add('d-none');
       text.innerText=`You enter ${Number(value)} : value must be positive and greater than 0.`;
     }    


const lowBalance= (value) => {
       alert.classList.remove('d-none');
       dashboard.classList.add('d-none');
       text.innerText=`Low Balance you enter ${Number(value)}: Your current Balance is ${balance.innerText}.`;
     }  