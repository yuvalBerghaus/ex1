let i = 0
let colors = []
function change(idInitial , index) { // onClick on any rectangle
    let m_index = Number(index);
    sectionID = this.document.getElementById(idInitial);
    imageAddress = this.document.getElementById(idInitial).getElementsByTagName("div")[0];
            if(imageAddress.className == 'resize' && ((m_index+1) % 3) != 0) {
                imageAddress.className = null;
                sectionID.style.backgroundColor = colors[m_index];
            }
            else if(imageAddress.className == 'resize' && ((m_index+1) % 3) == 0) {
                imageAddress.className = "star";
                sectionID.style.backgroundColor = colors[m_index];   
            }
            else {
               imageAddress.className = "resize";
                sectionID.style.backgroundColor = "white";   
            }
}
function incIndex() { // function called When another index is added by pressing the plus key
    let main = document.getElementById("mainl3");
    addRect(main);
    i++;
}
function addRect(main) { // This function adds another rectangle
    let idInitial = "sectionSqaure"+i;
    let newElement = document.createElement("section");
    let color = getRandomColor();
    let divPlus = document.createElement("div");
    newElement.id = idInitial;
    newElement.className = "block";
    newElement.style.backgroundColor = color;
    colors.push(color);
    main.appendChild(newElement);
    if(!i) {
        divPlus.className = "plus";
        divPlus.setAttribute('onclick','incIndex()');
        newElement.appendChild(divPlus);
        return 0;
    }
    if((i+1)%3 == 0 && i != 0) {
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
    for(; i < rectNum ; i++)
        addRect(main);
}




