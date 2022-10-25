const string = 
`
.faceLeft{
    animation-name: turnRight;
    animation-timing-function: ease;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
.faceRight{
    animation-name: turnLeft;
    animation-timing-function: ease;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
.mouthBottom{
    animation-name: mouthScale;
    animation-timing-function: ease;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
.eyeLeft{
    animation-name: theScale;
    animation-timing-function: ease;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
.eyeRight{
    animation-name: theScale;
    animation-timing-function: ease;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
.patch{
    position: fixed;
    width:2vw;
    height: 14.6vw;
    background-color: rgb(255, 70, 95);

    top: 2.9vw;
    left: 5.7vw;
    z-index: 3;
}
`

export default string