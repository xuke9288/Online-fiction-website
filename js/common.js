let denglu = document.querySelector('.denglu')
let obj = JSON.parse(localStorage.getItem('data'))
if(obj){
    denglu.innerHTML = `<a>你好，${obj.uname}</a>`
}

let nav = document.querySelectorAll('.nav a')
for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function () {
        //遍历循环所有a,去除带有active的类
        for (let j = 0; j < nav.length; j++) {
            nav[j].classList.remove('active')
        }
        //给当前项添加active类
        this.classList.add('active')  
        // this.href == String(window.location) 
    })
}
// if ($($(this))[0].href == String(window.location))
// $(this).parent().addClass('active');