//立即执行函数,发送验证码
; (function () {
    let code = document.querySelector('.code')
    code.addEventListener('click', function () {
        this.innerHTML = '60秒后重新获取'
        let num = 60
        let timer = setInterval(function () {
            num--
            code.innerHTML = `${num}秒后重新获取`
            if (num === 0) {
                code.innerHTML = `重新获取`
                clearInterval(timer)
            }
        }, 1000)
    })
}())

    ; (function () {
        //验证用户名
        let username = document.querySelector('.username input')
        username.addEventListener('change', vertifyName)
        //封装验证函数
        function vertifyName() {
            // 取username临近的下一个元素
            let msg = username.nextElementSibling
            //正则表达式    1.定义规则 2.检测
            let reg = /^[a-zA-Z0-9-_]{3,10}$/
            if (!reg.test(username.value)) {
                msg.innerHTML = '请输入3~10个字符的用户名'
                return false
            }
            msg.innerHTML = ''
            return true
        }
        //验证手机号
        let phone = document.querySelector('.phonenum input')
        let msg = document.querySelector('.phonenum span')
        phone.addEventListener('change', vertifyPhone)
        function vertifyPhone() {
            //手机号的正则表达式
            let reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
            if (!reg.test(phone.value)) {
                msg.innerHTML = '请输入11位数字的手机号'
                return false
            }
            msg.innerHTML = ''
            return true
        }
        //验证短信验证码
        let message = document.querySelector('.message-vertify input')
        message.addEventListener('change', vertifyMsg)
        function vertifyMsg() {
            let msg = document.querySelector('.message-vertify span')
            let reg = /^\d{6}$/
            if (!reg.test(message.value)) {
                msg.innerHTML = '请输入6位正确的验证码'
                return false
            }
            msg.innerHTML = ''
            return true
        }
        //验证密码
        let psw = document.querySelector('.password input')
        psw.addEventListener('change', vertifyPsw)
        function vertifyPsw() {
            let msg = psw.nextElementSibling
            let reg = /^[a-zA-Z0-9-_]{6,20}$/
            if (!reg.test(psw.value)) {
                msg.innerHTML = '请输入6~20位的密码'
                return false
            }
            msg.innerHTML = ''
            return true
        }
        //再次验证密码
        let confirm = document.querySelector('.confirmpsw input')
        confirm.addEventListener('change', vertifyConfirm)
        function vertifyConfirm() {
            let msg = confirm.nextElementSibling
            if (confirm.value !== psw.value) {
                msg.innerHTML = '两次密码不一致，请输入正确密码'
                return false
            }
            msg.innerHTML = ''
            return true
        }

        //提交按钮模块
        let form = document.querySelector('form')
        let check = document.querySelector('.done input')
        form.addEventListener('submit', function (e) {
            //vertifyName() === false
            if (!vertifyName()) {
                //阻止提交
                e.preventDefault()
            }
            if (!vertifyPhone()) e.preventDefault
            if (!vertifyMsg()) e.preventDefault
            if (!vertifyPsw()) e.preventDefault
            if (!vertifyConfirm()) e.preventDefault
            //我同意模块
            if (!check.checked) {
                alert('请勾选该协议')
                e.preventDefault
            }
        })
    }())



