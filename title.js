var i=0;
setInterval(function(){
    var titles=[
"|G|",
"|GA|",
"|GAP|",
"|GAPFORE|",
"|GAPFOREVER|",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);

