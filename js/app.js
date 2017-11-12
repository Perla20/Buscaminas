var tableBombIt = [
                    ' ',
                    '*',
                     '1',
                     ' ',
                     '/n',
                      ' ',
                      ' ',
                      '*',
                      '2',
                      '/n',
                      '1',
                      '*',
                      ' ',
                      ' ',
                      '/n',
                      ' ',
                      '3',
                      '*',
                      ' ',
                    ];
var containerBombIt = document.getElementById('container-bomb-it');
var bombIt = document.getElementById('bomb-it');
var drawGameZone = function(array){
  for ( i = 0; i < tableBombIt.length; i++) {
    var cell= document.createElement('div');
    var enter = document.createElement('br');
    if(array[i] == '1'|| array[i] =='2'|| array[i] == '3') {
    cell.className = 'number';
  }else if(array[i] == ' '){
    cell.className = 'emptySpace';
  }else if (array[i] == '*'){
    cell.className = 'bomb';
  }else if (array[i] == '/n'){
    bombIt.appendChild(enter);
    continue;
  }
  bombIt.appendChild(cell);
}
};
var showNumber = function(){
  this.className = 'number numberShow';
};
var changeColor = function(){
  this.style.backgroundColor = 'blue';
};
var boom = function(){
containerBombIt.removeChild(bombIt);
}

drawGameZone(tableBombIt);
