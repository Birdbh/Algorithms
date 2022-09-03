let yOrigin = 10;
let xOrigin = 10;

class elementDisplay{

    constructor(radius, xposition, yposition, value){
        this.radius = radius;
        this.xposition = xposition;
        this.yposition = yposition;
        this.value = value;
        this.color = this.random_color();
    }

    random_color() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

}

function constructBinaryTree(array){

    let binaryTreeLevels = 1 + Math.floor(Math.log2(array.length));
    let arrayIndex = array.length - 1;


    /*var container = document.getElementById("container"),
        strBlocksHTML = ' ';*/


    for(let currentLevel =  0; currentLevel <= binaryTreeLevels - 1; currentLevel++){

        let container = document.createElement("span");
        container.style.textAlign = "center";
        container.style.borderColor = "black";
        container.style.borderStyle = "dashed";

        for(let PositionInsideLevel = 1; PositionInsideLevel <= Math.pow(2,currentLevel); PositionInsideLevel++){

            if(arrayIndex >= 0){

                let div = new elementDisplay(4, null, null, array[arrayIndex]);


                let element = document.createElement('div');
                //'span'


                element.innerHTML = div.value;

                element.style.color = div.color;
                element.style.float = "left";
                
                //document.body.appendChild(element);

                //strBlocksHTML += element.innerHTML;

                container.appendChild(element);

                arrayIndex--;

                document.getElementById('js').innerHTML = "string";
            }

        }
        //let element = document.createElement('br');
        document.body.appendChild(container);
        //strBlocksHTML += '<div></div>'
    }
    //container.innerHTML = strBlocksHTML;
}

