// #################################################
//               General To All
// #################################################

const pages = {}
const base_url = "http://localhost/Up2date/";

pages.loadFor = (page) => { 
    eval("pages.load_" + page + "();")
}

<<<<<<< Updated upstream
let inUser = document.querySelector('.username')
let labelUser = document.querySelector('.labeluser')
let inPass = document.querySelector('.password')
=======
let inUser = document.getElementById('username')
let labelUser = document.querySelector('.labeluser')
let inPass = document.getElementById('password')
>>>>>>> Stashed changes
let labelPass = document.querySelector('.labelpass')
let showPass =  document.querySelector('.show-pass')
let btnSubmit =  document.querySelector('.btnSubmit')

// #################################################
//               Get API
// #################################################

pages.getAPI = async(api_url) => { 
    
    try{
        return await axios(api_url) 
    }catch(error){
        pages.Console("Error from linking (GET)", error)
    }
}

// #################################################
//               Post API
// #################################################

pages.postAPI = async(api_url, api_data, api_token = null) => {  
    
    try {
        return await axios.post(
            api_url, 
            api_data, 
            {
                headers:{
                    'Authorization': "token" + api_token 
                    
                }
            }
        )
    } catch (error) {
        workshop_pages.Console("Error from linking (POST)", error);
    }
    
}

// #################################################
//               Login Page
// #################################################

pages.load_login = async() =>{
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
<<<<<<< Updated upstream
    const user_name = document.getElementById("username");
    btnLogin.addEventListener("click", async function(){
        const username = user_name.value;
        const user_url = base_url + "backend/get_user.php?username=" + username
        const resp = await pages.getAPI(user_url)
        if(resp.data.length == 0){
            
        }
=======
    btnSubmit.addEventListener("click", async function(){
        const username = inUser.value;
        const password = inPass.value;
        const user_url = base_url + "backend/get_user.php?username=" + username + "&password=" + password
        const resp = await pages.getAPI(user_url)
        console.log(resp.data[0])
>>>>>>> Stashed changes
    })
}

// #################################################
//               Landing Page
// #################################################

<<<<<<< Updated upstream
let headerImgProfile = document.querySelector('.header-img-profile')
let profileimg = document.querySelector('.profileimg')
let headerOverlay = document.querySelector('.header-overlay')

profileimg.addEventListener('click',()=>{
    headerImgProfile.classList.toggle('active')
    headerOverlay.classList.toggle('active')
})

headerOverlay.addEventListener('click',()=>{
    headerImgProfile.classList.toggle('active')
    headerOverlay.classList.toggle('active')
})
=======
// let headerImgProfile = document.querySelector('.header-img-profile')
// let profileimg = document.querySelector('.profileimg')
// let headerOverlay = document.querySelector('.header-overlay')

// profileimg.addEventListener('click',()=>{
//     headerImgProfile.classList.toggle('active')
//     headerOverlay.classList.toggle('active')
// })

// headerOverlay.addEventListener('click',()=>{
//     headerImgProfile.classList.toggle('active')
//     headerOverlay.classList.toggle('active')
// })
>>>>>>> Stashed changes
