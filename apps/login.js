let inUser = document.querySelector('.username')
let labelUser = document.querySelector('.labeluser')
let inPass = document.querySelector('.password')
let labelPass = document.querySelector('.labelpass')
let showPass =  document.querySelector('.show-pass')
let btnLogin =  document.querySelector('.btn-login')

const pages = {}
const base_url = "http://localhost/Up2date/";

<<<<<<< Updated upstream

pages.Console = (title, values, one_value = true) => {
    console.log('---' + title + '---')
    if(!(Array.isArray(values))){
        console.log(values)
    }
    else{
        for(let i = 0; i<values.length; i++){
            console.log(values[i])
        }
    }
    console.log('--/' + title + '---')
}

pages.getAPI = async(api_url) => { 
    
    try{
        return await axios(api_url) 
    }catch(error){
        pages.Console("Error from linking (GET)", error)
    }
=======
pages.getAPI = async(api_url) => { 
    
    try{
        return await axios(api_url) 
    }catch(error){
        pages.Console("Error from linking (GET)", error)
    }
>>>>>>> Stashed changes
}

pages.loadFor = (page) => { 
    eval("pages.load_" + page + "();")
}

pages.load_landing = async() =>{
    inUser.addEventListener('keypress',()=>{
        labelUser.classList.add('on')
    })
    
    inPass.addEventListener('keypress',()=>{
        labelPass.classList.add('on')
        showPass.classList.add("active")
    })
    
    showPass.addEventListener('click',()=>{
        showPass.classList.toggle('on')
        if(inPass.type == "text"){
            inPass.type = "password"
        }else{
            inPass.type = "text"
    
        }
    
    })
    const user_name = document.getElementById("username");
    btnLogin.addEventListener("click", async function(){
        const username = user_name.value;
<<<<<<< Updated upstream
        if(username == ""){
            pages.Console("No Access")
        }
        else{
            const user_url = base_url + "backend/get_user.php?username=" + username
            const resp = await pages.getAPI(user_url)
            pages.Console(resp.data[0])
            // if(resp){
            //     pages.Console("No Access")
            // // }else{
            // //     location.assign('./landing-page.html')
            // // }
=======
        const user_url = base_url + "backend/get_user.php?username=" + username
        const resp = await pages.getAPI(user_url)
        if(resp.data.length == 0){
            
>>>>>>> Stashed changes
        }
    })
}


