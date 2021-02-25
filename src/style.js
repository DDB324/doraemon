const string = `
.head {
    background: #83c2f1;
    width: 370px;
    height: 320px;
    border-radius: 50%;
    border: 5px solid #34373c;
    position: relative;
    z-index: 1;
}

.face {
    background: #ffffff;
    width: 310px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid #34373c;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
}

.left-eye {
    background: #ffffff;
    width: 75px;
    height: 100px;
    position: absolute;
    border: 5px solid #34373c;
    border-radius: 50%;
    transform: rotate(5deg);
    right: 50%;
    top: -20%;
}

.left-eye::before {
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 38px;
    background: #34373c;
    border-radius: 50%;
    bottom: 15%;
    left: 50%;
}

.left-eye::after {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 18px;
    background: #ffffff;
    border-radius: 50%;
    bottom: 27%;
    left: 60%;
}

.right-eye {
    background: #ffffff;
    width: 75px;
    height: 100px;
    position: absolute;
    border: 5px solid #34373c;
    border-radius: 50%;
    transform: rotate(-5deg);
    left: 50%;
    top: -20%;
}

.right-eye::before {
    content: '';
    display: block;
    position: absolute;
    width: 25px;
    height: 38px;
    background: #34373c;
    border-radius: 50%;
    bottom: 15%;
    right: 50%;
}

.right-eye::after {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 18px;
    background: #ffffff;
    border-radius: 50%;
    bottom: 27%;
    left: 20%;
}

.nose {
    width: 47px;
    height: 47px;
    border: 6px solid #34373c;
    background: #f06274;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 14%;
}

.nose::before {
    content: '';
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 50%, rgba(240, 98, 116, 1) 100%);
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    left: 40%;
    top: 15%;
}

.nose::after {
    content: '';
    display: block;
    position: absolute;
    width: 5px;
    height: 100px;
    background: #34373c;
    left: 50%;
    transform: translateX(-50%);
    top: 40px;
}

.mouth {
    width: 30px;
    height: 30px;
    position: absolute;
    background: rgb(255, 255, 255);
    background: linear-gradient(-45deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(253, 144, 158, 1) 50%, rgba(253, 144, 158, 1) 100%);
    border-top: 5px solid #34373c;
    border-left: 5px solid #34373c;
    transform: translateX(-50%) rotate(45deg);
    left: 50%;
    top: 66%;
    border-top-left-radius: 25px;
}

.mouth::before {
    content: '';
    display: block;
    width: 60px;
    height: 30px;
    background: #fc8fa0;
    transform: rotate(-50deg) skew(-45deg);
    border-bottom-left-radius: 80%;
    border-top-right-radius: 100%;
    position: absolute;
    left: -55%;
    top: 25%;
    border-left: 7px solid #34373c;
    border-bottom: 5px solid #34373c;
}

.mouth::after {
    content: '';
    display: block;
    width: 60px;
    height: 30px;
    background: #fc8fa0;
    transform: rotate(-40deg) skew(45deg);
    border-bottom-right-radius: 80%;
    border-top-left-radius: 100%;
    position: absolute;
    right: -105%;
    top: 6%;
    border-right: 7px solid #34373c;
    border-bottom: 5px solid #34373c;
}

.left-blusher {
    width: 60px;
    height: 45px;
    background: rgb(253, 200, 205);
    background: radial-gradient(circle, rgba(253, 200, 205, 1) 0%, rgba(253, 200, 205, 1) 50%, rgba(255, 255, 255, 1) 100%);
    position: absolute;
    top: 25%;
    left: 15%;
    border-radius: 50%;
    animation: change 1s 0.1s infinite alternate;
}

.left-blusher::before {
    content: '';
    display: block;
    width: 3px;
    height: 20px;
    background: #df7e91;
    transform: rotate(25deg);
    position: absolute;
    top: 20%;
    left: 30%;
    border-radius: 1px;
}

.left-blusher::after {
    content: '';
    display: block;
    width: 3px;
    height: 20px;
    background: #df7e91;
    transform: rotate(25deg);
    position: absolute;
    top: 20%;
    left: 60%;
    border-radius: 1px;
}

.right-blusher {
    width: 60px;
    height: 45px;
    background: rgb(253, 200, 205);
    background: radial-gradient(circle, rgba(253, 200, 205, 1) 0%, rgba(253, 200, 205, 1) 50%, rgba(255, 255, 255, 1) 100%);
    position: absolute;
    top: 25%;
    left: 65%;
    border-radius: 50%;
    animation: change 1s infinite alternate;
}

.right-blusher::before {
    content: '';
    display: block;
    width: 3px;
    height: 20px;
    background: #df7e91;
    transform: rotate(25deg);
    position: absolute;
    top: 20%;
    left: 60%;
    border-radius: 1px;
}

.right-blusher::after {
    content: '';
    display: block;
    width: 3px;
    height: 20px;
    background: #df7e91;
    transform: rotate(25deg);
    position: absolute;
    top: 20%;
    left: 30%;
    border-radius: 1px;
}

.left-beard1 {
    width: 100px;
    height: 5px;
    background: #34373c;
    transform: rotate(20deg);
    position: absolute;
    border-radius: 2px;
    top: 20%;
    left: -5%;
}

.left-beard2 {
    width: 100px;
    height: 5px;
    background: #34373c;
    position: absolute;
    border-radius: 2px;
    top: 38%;
    left: -5%;
}

.left-beard3 {
    width: 90px;
    height: 5px;
    background: #34373c;
    transform: rotate(-20deg);
    position: absolute;
    border-radius: 2px;
    top: 56%;
    left: 0;
}

.right-beard1 {
    width: 100px;
    height: 5px;
    background: #34373c;
    transform: rotate(-20deg);
    position: absolute;
    border-radius: 2px;
    top: 20%;
    right: -5%;
}

.right-beard2 {
    width: 100px;
    height: 5px;
    background: #34373c;
    position: absolute;
    border-radius: 2px;
    top: 38%;
    right: -5%;
}

.right-beard3 {
    width: 90px;
    height: 5px;
    background: #34373c;
    transform: rotate(20deg);
    position: absolute;
    border-radius: 2px;
    top: 56%;
    right: 0;
}

.neck {
    width: 300px;
    height: 120px;
    border: 15px solid transparent;
    border-bottom-color: #f56475;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.neck::before {
    content: '';
    display: block;
    width: 300px;
    height: 120px;
    border: 5px solid transparent;
    border-bottom-color: #34373c;
    border-radius: 50%;
    position: absolute;
    bottom: -2%;
    left: 50%;
    transform: translateX(-50%);
}

.neck::after {
    content: '';
    display: block;
    width: 300px;
    height: 120px;
    border: 5px solid transparent;
    border-bottom-color: #34373c;
    border-radius: 50%;
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
}

.neck-left {
    width: 5px;
    height: 15px;
    background: #34373c;
    position: absolute;
    bottom: 8%;
    left: 4%;
    transform: rotate(20deg);
}

.neck-right {
    width: 5px;
    height: 15px;
    background: #34373c;
    position: absolute;
    bottom: 8%;
    right: 4%;
    transform: rotate(-20deg);
}

.body {
    width: 350px;
    height: 500px;
    background: #8ac2f1;
    border: 5px solid #34373c;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    top: 68%;
    left: 50%;
    transform: translateX(-50%);
}

.body::before {
    content: '';
    display: block;
    width: 240px;
    height: 450px;
    background: #ffffff;
    border: 5px solid #34373c;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.small-bell {
    width: 55px;
    height: 55px;
    background: #f2db88;
    border-radius: 50%;
    border: 5px solid #34373c;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
}

.small-bell::before {
    content: '';
    display: block;
    width: 5px;
    height: 12px;
    background: #34373c;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}

.small-bell::after {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 5px solid #34373c;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 45%;
}

.small-line1 {
    width: 120px;
    height: 100px;
    border: 5px solid #34373c;
    border-radius: 50%;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%) rotate(10deg);
}

.small-line2 {
    width: 120px;
    height: 100px;
    border: 5px solid #34373c;
    border-radius: 50%;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%) rotate(10deg);
}

@keyframes change {
    from {
        transform: scale(0.8);
    }
    to {
        transform: scale(1);
    }
}`

export {string}