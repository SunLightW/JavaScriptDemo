// SMALL
function f1() {
    var img =document.getElementById("img1")
    // var now_height = img.style.height;
    // // alert(now_height);
    var now_width = window.getComputedStyle(img,null).width;
    var now_height = window.getComputedStyle(img,null).height;
    img.style.width = '200px';
    img.style.height = '100px';
}

// big
function f2() {
    var img =document.getElementById("img1")
    // var now_height = img.style.height;
    // // alert(now_height);
    var now_width = window.getComputedStyle(img,null).width;
    var now_height = window.getComputedStyle(img,null).height;
    img.style.width = '1920px';
    img.style.height = '1080px';
}

//hide
function f3() {
    var img =document.getElementById("img1")
    // var now_height = img.style.height;
    // // alert(now_height);
    img.style.visibility="hidden";
}

//visible
function f4() {
    var img =document.getElementById("img1")
    // var now_height = img.style.height;
    // // alert(now_height);
    img.style.visibility="visible";
}


//2S  hidden
function f5() {
    var img =document.getElementById("img1")
    // var now_height = img.style.height;
    // // alert(now_height);
    img.style.visibility="hidden";
}
setTimeout("f5()",2000);//2S

function f6() {

}

function f7() {

}

function f8() {

}

function f9() {

}


function f10() {

}


function f11() {

}


function f12() {

}
