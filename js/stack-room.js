let reader = document.querySelectorAll('.reader a')
for (let i = 0; i < reader.length; i++) {
    reader[i].addEventListener('click', function () {
        //遍历循环所有,去除带有active的类
        for (let j = 0; j < reader.length; j++) {
            reader[j].classList.remove('active')
        }
        //给当前项添加active类
        this.classList.add('active')
    })
}