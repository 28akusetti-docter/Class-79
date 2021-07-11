friend_list=[];
function submit(){
    n1=document.getElementById("name1").value
    n2=document.getElementById("name2").value
    n3=document.getElementById("name3").value
    n4=document.getElementById("name4").value
    n5=document.getElementById("name5").value
    friend_list.push(n1)
    friend_list.push(n2)
    friend_list.push(n3)
    friend_list.push(n4)
    friend_list.push(n5)
    console.log(friend_list)
    document.getElementById("friends_list").innerHTML=friend_list;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort(){
    friend_list.sort();
    document.getElementById("friends_list").innerHTML=friend_list;
    console.log(friend_list)
}