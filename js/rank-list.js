// $(document).ready(function(){
//     $('.asied-nav li').each(function(i,item){
//         item.on('click',function(){
//             item.removeClass('active')
//         })
//     })
//     $this.addClass('active')
// })

let navs = document.querySelectorAll('.aside-nav li')
for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click', function () {
        //遍历循环所有,去除带有active的类
        for (let j = 0; j < navs.length; j++) {
            navs[j].classList.remove('active')
        }
        //给当前项添加active类
        this.classList.add('active')
    })
}