const string =  
`
.container{
    width: 100vw;
    height: 85vh;
    position: relative;
}

    .eyeContainer{
        display: flex;
        position: relative;
        top: 12.5vw;
        margin-left: 32%;
    }

        .eyeLeft{
            height: 6.75vw;
            width: 6.75vw;

            border: 0.5vw solid black;
            border-radius: 50%;
            background-color: rgba(45, 45, 45, 1);

            margin-right: 22vw;
        }

        .eyeRight{
            height: 6.75vw;
            width: 6.75vw;
            border: 0.5vw solid black;
            border-radius: 50%;
            background-color: rgba(45, 45, 45, 1);
        }

            .eyeLight{
                position: relative;
                top: 0.3vw;
                left: 0.3vw;
                height: 3.1vw;
                width: 3.1vw;
                border: 0.1vw solid black;
                border-radius: 50%;
                background-color: white;
            }

    .nose{
        position: relative;
        top: 8vw;
        margin-left: 48.5vw;

        width: 0;
        height: 0;
        border: 1.8vw solid transparent;

        border-top-color: rgba(0,0,0,1);
        border-radius: 45%;
    }

    .faceContainer{
        display: flex;
        position: relative;
        top: 12.5vw;
        margin-left: 25vw;
    }

        .faceLeft{
            height: 9.30vw;
            width: 9.30vw;

            border: 0.3vw solid black;
            border-radius: 50%;
            background-color: rgba(250, 0, 0, 1);

            margin-right: 30.48vw;
        }

        .faceRight{
            height: 9.30vw;
            width: 9.30vw;

            border: 0.3vw solid black;
            border-radius: 50%;
            background-color: rgba(250, 0, 0, 1);
        }

    .mouth{
        position: relative;
        top: -1.5vw;
        margin-left: 63.7vw;
        transform: translateX(-63.7%);
    }

        .mouthTop{
            display: flex;
            position: relative;
            z-index: 2;
        }
        
            .mouthTopLeft{
                width: 9.35vw;
                height: 2.6vw;
                border-left: 0.001vw;
                border-bottom: 0.3vw;
                border-color: black;
                border-style: solid;
                transform: rotate(-20deg);
                border-radius: 80% 0% 0% 120%;

                background-color: rgb(255, 230, 0);

            }

            .mouthTopRight{
                width: 9.35vw;
                height: 2.6vw;
                border-right: 0.001vw;
                border-bottom: 0.3vw;
                border-color: black;
                border-style: solid;
                transform: rotate(20deg);
                border-radius: 0% 80% 120% 0%;

                background-color: rgb(255, 230, 0);
                
            }

        .mouthBottom{
            position: relative;
            top: -2vw;
            margin-left: 2vw;
        }

            .mouthBottomTop{
                height: 2.5vw;
                width: 14.3vw;

                border-radius: 50% 50% 0% 0%;

                background-color: rgb(155, 0, 10);
            }

            .mouthBottomBottom{
                display: flex;
            }            

                .mouthBottomBottomLeft{
                    height: 15.5vw;
                    width: 7.15vw;
                    
                    border-left: 0.3vw;
                    border-bottom: 0.3vw;
                    border-style: solid;
                    border-color: black;
                    border-radius: 0% 0% 0% 200%;
                    background-color: rgb(155, 0, 10);

                    /* transform: translateX(1px); */
                    margin-left: 1px;

                    overflow: hidden;
                }

                .mouthBottomBottomRight{
                    height: 15.5vw;
                    width: 7.15vw;

                    border-right: 0.3vw;
                    border-bottom: 0.3vw;
                    border-style: solid;
                    border-color: black;
                    border-radius: 0% 0% 200% 0%;
                    background-color: rgb(155, 0, 10);

                    /* transform: translateX(-1px); */
                    margin-left: -1px;

                    overflow: hidden;
                }

                .tongueLeft{
                    height: 15.5vw;
                    width: 15.5vw;

                    border: 1px solid red;
                    border-radius: 50%;
                    
                    background-color: rgb(255, 70, 95);
                }

                .tongueRight{
                    height: 15.5vw;
                    width: 15.5vw;

                    border: 1px solid red;
                    border-radius: 50%;

                    /* transform: translate(-55%,0.5px); */
                    margin-left: -125%;
                    margin-bottom: 0.5px;

                    background-color: rgb(255, 70, 95);
                }

@keyframes turnRight {
    0%{
        transform: translateX(0%);
    }
    50%{
        transform: translateX(-8%);
    }
    100%{
        transform: translateX(0%);
    }
}
@keyframes turnLeft {
    0%{
        transform: translateX(0%);
    }
    50%{
        transform: translateX(8%);
    }
    100%{
        transform: translateX(0%);
    }
}
@keyframes mouthScale{
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.03);
        margin-left: 2.5vw;
    }
    100%{
        transform: scale(1);
    }
}
@keyframes theScale{
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
}
`
export default string