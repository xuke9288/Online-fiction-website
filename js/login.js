let login = document.querySelector('.login')
let remember = document.querySelector('.remember')
let username = document.querySelector('[name=username]')
let password = document.querySelector('[type=password]')
let register = document.querySelector('.register')
login.addEventListener('click',function(e){
    e.preventDefault()
    if(!remember.checked){
        alert('请勾选协议')
        return
    }
    let obj = {
        uname:username.value,
        password:password.value
    }
    //将输入值以字符串形式保存至本地存储
    localStorage.setItem('data',JSON.stringify(obj))
    //跳转首页面
    location.href = '../index.html'
})
//跳转注册页面
register.addEventListener('click',function(){
    location.href = '../demos/register.html'
})
//转换获取本地存储的值
let obj = JSON.parse(localStorage.getItem('data'))
//如果获取到本地存储的值，则和原先值相同
if(obj){
    username.value = obj.uname
    password.value = obj.password
    //默认勾选状态
    remember.checked = true
}

