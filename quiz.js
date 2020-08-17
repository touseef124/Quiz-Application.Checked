var score=0;
function result(){
    var answer1=document.getElementById("ans1");
    var answer2=document.getElementById("ans2");
    var answer3=document.getElementById("ans3");
    if(answer1.checked==true){
        score++;
    }
    else{}
    if(answer2.checked==true){
        score++;
    }
    else{}
    if(answer3.checked==true){
        score++;
    }
    else{}

    alert("your score is  "+score);
    score=0;


}