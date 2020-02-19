// 难度级别
var simple = 3;
var middle = 6;
var hard = 9;
var very_haed = 12;

// 扫雷版面
var raws = 9;
var columns = 9;

// 雷的个数及雷所在位置
var numOfTrap = middle;
var posOfTrapList = new Array();
for(num=0; num<numOfTrap; num++){
    var posOfTrap = Math.floor(Math.random()*(raws*columns))
    posOfTrapList[num] = posOfTrap;
}

// 计算无雷columndiv上的数值
function value_column(index) {
    if(index%9===0){
        var slounding_coumns = [index-9, index-8, index+1, index+9, index+10];
    } else if((index+1)%9===0){
        var slounding_coumns = [index-10, index-9, index-1, index+8, index+9];
    }else{
        var slounding_coumns = [index-10, index-9, index-8, index-1, index+1, index+8, index+9, index+10];
    }
    
    var slounding_traps = 0;
    for(var i=0; i<slounding_coumns.length; i++){
        if(slounding_coumns[i]>=0 && slounding_coumns[i]<=(raws*columns-1) && posOfTrapList.includes(slounding_coumns[i])===true){
           slounding_traps += 1; 
        }
    }
    return slounding_traps;
}

// 添加鼠标点击事件
divList = new Array();
for(var i=1; i<=raws; i++){
    for(var j=1; j<=columns; j++){

        var index = (i-1)*9+j-1;
        divList[index] = document.getElementById(i+''+j+'div');

        if(posOfTrapList.includes(index)){
            divList[index].onmousedown = function() {
                this.style.backgroundColor = 'red';
                this.textContent = 'Over!';
                alert("Game Over!");
            }
        }
        else{
            divList[index].onmousedown = function() {
                this.style.backgroundColor = 'green';
                this.textContent = value_column(divList.indexOf(this));
            }
        }
        
    }
}