var s=" ";
i=1;
var b=Math.floor((Math.random()*100)+1)
document.getElementById("check").onclick= function()
{
    var a= parseInt(document.getElementById("n1").value);
    if(a>100)
    {
        ans=i+" Sorry...Guess the number between 1-100";
        i++;
        document.getElementById("result").textContent= ans;
    }    
    else if(a<1)
    {
        ans=i+" Sorry...Guess the number between 1-100";
        i++;
        document.getElementById("result").textContent= ans;
    }    
    else if(a>b)
    {
        ans=i+" Oops!!... try with a smaller number";
        i++;
        document.getElementById("result").textContent= ans;
    }
    else if(a<b)
    {
        ans=i+" Oops!!... try with a larger number";
        i++;
        document.getElementById("result").textContent= ans;
    }
    else if(a==b)
    {
        ans="Congratulations!!! you have got the number in "+i+" attempts";
        document.getElementById("result").textContent= ans;
    }
  
}