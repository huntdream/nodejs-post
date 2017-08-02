var postBar = document.getElementById('post-input');
var postbtn = document.getElementById('post-btn');
var postWrapper = document.getElementById('post-wrapper');

postbtn.onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 &&this.status === 200){
            var newPost= "<div class='post'>"+this.responseText+"</div>";
            var child = postWrapper.childNodes[0];
            child.insertAdjacentHTML("beforeBegin",newPost);
            postBar.innerHTML='';
        }
    };
    xhr.open("POST","/post",true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send('article='+convertText(postBar));
};


function convertText(parent){
    var children=parent.childNodes;
    var results = [];
    var index = 0;
    console.log( children);
    for(var child in children){
        if(children.hasOwnProperty(child)){
            results[index]=children[child].textContent;
            index++;
        }
    }
    console.log(results);
    return results.join(" <br> ");
}

