let i = 0
function change(idInitial , index) { // onClick on any rectangle
    let m_index = Number(index);
    imageAddress = this.document.getElementById(idInitial).getElementsByTagName("div")[0];
            if(imageAddress.className == 'resize' && (m_index % 3) != 0)
                imageAddress.className = null;
            else if(imageAddress.className == 'resize' && m_index % 3 == 0)
                imageAddress.className = "star";
            else 
                imageAddress.className = "resize";
}
function incIndex() { // function called When another index is added by pressing the plus key
    let main = document.getElementById("mainl3");
    addRect(main);
    i++;
}
function addRect(main) { // This function adds another rectangle
    let idInitial = "sectionSqaure"+i;
    let newElement = document.createElement("section");
    newElement.id = idInitial;
    newElement.className = "block";
    let color = getRandomColor();
    newElement.style.backgroundColor = color;
    console.log(newElement);
    main.appendChild(newElement);
    let divPlus = document.createElement("div");
    if(!i) {
        divPlus.className = "plus";
        divPlus.setAttribute('onclick','incIndex()');
        newElement.appendChild(divPlus);
        return 0;
    }
    if(i%3 == 0 && i != 0) {
        divPlus.className = "star";
        document.getElementById(idInitial).appendChild(divPlus);
    }
    else 
        document.getElementById(idInitial).appendChild(divPlus);
    newElement.setAttribute('onclick','change("'+idInitial+'","'+i+'")');
}
function getRandomColor() { // functions that returns a random color
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    return color;
    }
function init() { // The first function call when page is loaded
    let main = document.getElementById("mainl3");
    let str = "Berghaus";
    let rectNum = str.length*2;
    for(; i < rectNum ; i++) {
        addRect(main);
    }
}




