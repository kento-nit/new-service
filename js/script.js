
function answer(i){
    const form = document.forms.userAnswer;
    //const comment=["タプルを作る際は要素を括弧()で囲います。","コメント作成中2","コメント作成中3","コメント作成中4","コメント作成中5","コメント作成中6","コメント作成中7","コメント作成中8"];
    //const answer=[1,0,1,1,1,0,1,0];
    document.getElementById('comment1').style.visibility = 'visible';
    document.getElementById('radio').style.visibility = 'hidden';
    if (form.question.value == i){
        document.getElementById('true').style.visibility = 'visible';
        //return true;    
    }else{
        document.getElementById('false').style.visibility = 'visible';
        //return false;    
    }
    //var header=document.getElementById('comment2');
    //header.insertAdjacentHTML('beforebegin',comment[i]);
}
/*
window.onload = function(){
    var header=document.getElementById('text');
    header.insertAdjacentHTML('afterbegin','<p>Gwen</p>');
    }
function getAnswer(i){
    document.getElementById('').innerHTML = answer[i];
}
function getText(i){
    document.getElementById('').innerHTML = text[i];
    document.write(input);
}
function writeText(i){
    var header=document.getElementById('text');
    header.insertAdjacentHTML('afterbegin',text[i]);
}
function getComment(i){
    document.getElementById('comment2').innerHTML = comment[i];
}
function writeComment(i){
    var header=document.getElementById('comment2');
    header.insertAdjacentHTML('beforebegin','<p>Gwen</p>');
}
function nextQ(){
    i++;
    const text=["問題を表示1","問題を表示2","問題を表示3","問題を表示4"];
    var header=document.getElementById('text');
    header.insertAdjacentHTML('afterbegin',text[i]);
}
*/
