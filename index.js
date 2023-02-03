function player1()
{
    document.getElementById("start").style.display ="none";

    document.getElementById("turn").innerHTML= "Player 1's turn";
}

function player1turn(id)
{
    document.getElementById(id).innerHTML="X";
    document.getElementById(id).disabled= true;
    check();
    
    player2();
}

function player2()
{
    document.getElementById("turn").innerHTML= "Player 2's turn";

    player2turn();
}


function player2turn()
 
{
      var position=Math.floor(Math.random() * 9);
     
      switch (position) 
       {
           case 0:
            {
                if(document.getElementById("btn1").innerHTML == "" && document.getElementById("btn1").disabled == false)
                {
                    document.getElementById("btn1").innerHTML="0";
                    document.getElementById("btn1").disabled= true;
                    check();
                    player1();
                }
                else
                {
                    player2turn();
                }
                break;
            }
           case 1:
            {
                if(document.getElementById("btn2").innerHTML == "" && document.getElementById("btn2").disabled == false)
                {
                    document.getElementById("btn2").innerHTML="0";
                    document.getElementById("btn2").disabled= true;
                    check();
                    player1();
                }
                else
                {
                    player2turn();
                }
                break;
            }
            case 2:
            {
                if(document.getElementById("btn3").innerHTML == "" && document.getElementById("btn3").disabled == false)
                {
                    document.getElementById("btn3").innerHTML="0";
                    document.getElementById("btn3").disabled= true;
                    check();
                    player1();
                }
                else
                {
                   player2turn();
                }
                break;
            }
            case 3:
            {
                if(document.getElementById("btn4").innerHTML == "" && document.getElementById("btn4").disabled == false)
                {
                    document.getElementById("btn4").innerHTML="0";
                    document.getElementById("btn4").disabled= true;
                    check();
                    player1();
                }
                else
                {
                   player2turn();
                }
                break;
            }
            case 4:
            {
                if(document.getElementById("btn5").innerHTML == "" && document.getElementById("btn5").disabled == false)
                {
                    document.getElementById("btn5").innerHTML="0";
                    document.getElementById("btn5").disabled= true;
                    check();
                    player1();
                }
                else
                {
                   player2turn();
                }
                break;
            }
            case 5:
            {
                if(document.getElementById("btn6").innerHTML == "" && document.getElementById("btn6").disabled == false)
                {
                    document.getElementById("btn6").innerHTML="0";
                    document.getElementById("btn6").disabled= true;
                    check();
                    player1();
                }
                else
                {
                   player2turn();
                }
                break;
            }
            case 6:
            {
                if(document.getElementById("btn7").innerHTML == "" && document.getElementById("btn7").disabled == false)
                {
                    document.getElementById("btn7").innerHTML="0";
                    document.getElementById("btn7").disabled= true;
                    check();
                    player1();
                }
                else
                {
                   player2turn();
                }
                break;
            }
            case 7:
            {
                if(document.getElementById("btn8").innerHTML == "" && document.getElementById("btn8").disabled == false)
                {
                    document.getElementById("btn8").innerHTML="0";
                    document.getElementById("btn8").disabled= true;
                    check();
                    player1();
                }
                else
                {
                   player2turn();
                }
                break;
            }
            case 8:
            {
                if(document.getElementById("btn9").innerHTML == "" && document.getElementById("btn9").disabled == false)
                {
                    document.getElementById("btn9").innerHTML="0";
                    document.getElementById("btn9").disabled= true;
                    check();
                    player1();
                }
                else
                {
                   player2turn();
                }
                
            }
            

        }
}

function check()
{
    var btn1 = document.getElementById("btn1").innerHTML
    var btn2 = document.getElementById("btn2").innerHTML
    var btn3 = document.getElementById("btn3").innerHTML
    var btn4 = document.getElementById("btn4").innerHTML
    var btn5 = document.getElementById("btn5").innerHTML
    var btn6 = document.getElementById("btn6").innerHTML
    var btn7 = document.getElementById("btn7").innerHTML
    var btn8 = document.getElementById("btn8").innerHTML
    var btn9 = document.getElementById("btn9").innerHTML

    if(btn1=="X" && btn2=="X" && btn3=="X")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 1 wins";
        
    }
    else if(btn4=="X" && btn5=="X" && btn6=="X")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 1 wins";
        
    }

    else if(btn7=="X" && btn8=="X" && btn9=="X")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 1 wins";
        
    }

    else if(btn1=="X" && btn4=="X" && btn7=="X")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 1 wins";
        
    }

    else if(btn2=="X" && btn5=="X" && btn8=="X")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 1 wins";
        
    }

    else if(btn3=="X" && btn6=="X" && btn9=="X")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 1 wins";
        
    }

    else if(btn1=="X" && btn5=="X" && btn9=="X")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 1 wins";
    
    }

    else if(btn3=="X" && btn5=="X" && btn7=="X")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 1 wins";
        
    }

    if(btn1=="0" && btn2=="0" && btn3=="0")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 2 wins";
        
    }

    else if(btn4=="0" && btn5=="0" && btn6=="0")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 2 wins";
        
    }

    else if(btn7=="0" && btn8=="0" && btn9=="0")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 2 wins";
        
    }

    else if(btn1=="0" && btn4=="0" && btn7=="0")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 2 wins";
        
    }

    else if(btn2=="0" && btn5=="0" && btn8=="0")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 2 wins";
        
    }

    else if(btn3=="0" && btn6=="0" && btn9=="0")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 2 wins";
        
    }

    else if(btn1=="0" && btn5=="0" && btn9=="0")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 2 wins";
        
    }

    else if(btn3=="0" && btn5=="0" && btn7=="0")
    {
        disable();
        document.getElementById("result").innerHTML= "Player 2 wins";
        
    }

}
function disable()
{
    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
}

function reset()
{
    document.getElementById("btn1").disabled= false;
    document.getElementById("btn2").disabled= false;
    document.getElementById("btn3").disabled= false;
    document.getElementById("btn4").disabled= false;
    document.getElementById("btn5").disabled= false;
    document.getElementById("btn6").disabled= false;
    document.getElementById("btn7").disabled= false;
    document.getElementById("btn8").disabled= false;
    document.getElementById("btn9").disabled= false;
    document.getElementById("btn1").innerHTML= "";
    document.getElementById("btn2").innerHTML= "";
    document.getElementById("btn3").innerHTML= "";
    document.getElementById("btn4").innerHTML= "";
    document.getElementById("btn5").innerHTML= "";
    document.getElementById("btn6").innerHTML= "";
    document.getElementById("btn7").innerHTML= "";
    document.getElementById("btn8").innerHTML= "";
    document.getElementById("btn9").innerHTML= "";
    document.getElementById("result").innerHTML= "";
    player1();
}