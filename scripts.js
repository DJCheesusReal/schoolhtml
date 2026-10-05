function sayHello() { 
    var url = document.getElementById("textbox").value;
    var ran = document.getElementById("myRange").value;
    document.getElementById('my-text-box').innerHTML = 
        `<img src="${url}" alt="aga" width="${ran}" onclick="this.style.display='none'">`; 
}
