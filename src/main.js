import {string} from './style'


const player = {
    //声明变量
    n: 1,
    id: undefined,
    ui: {
        showString: document.querySelector('.show-string'),
        style: document.querySelector('style'),
        btnPlay: document.querySelector('.play'),
        pause: document.querySelector('.pause')
    },
    //初始化方法
    init: () => {
        player.play()
        player.bindEvents()
    },
    //绑定按钮的事件
    bindEvents: () => {
        player.ui.btnPlay.onclick = () => {
            player.clearClock()
            player.play()
        }
        player.ui.pause.onclick = player.clearClock
    },
    //重复执行run函数
    play: () => {
        player.id = setInterval(player.run)
    },
    //在页面上展示内容
    run: () => {
        if (player.n > string.length) {
            player.clearClock()
            return
        }
        player.ui.showString.innerText = string.substring(0, player.n)
        player.ui.style.innerHTML = string.substring(0, player.n)
        player.n += 1
        player.ui.showString.scrollTop = 9999
    },
    //清除计时器
    clearClock: () => {
        window.clearInterval(player.id)
    }
}


player.init()