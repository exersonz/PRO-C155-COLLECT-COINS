AFRAME.registerComponent("game-play", {
    schema: {
        //used to se the elementId of the entity to which the component will be attached
        elementId: {type: "string", default: "#coin1"}
    },
    isCollided: function(elementId){
        const element = document.querySelector(elementId); //selecting a particular element using querySelector() and then add a listener on that element
        element.addEventListener("collide", e => {
            //checking if the variable elementId has the string #coin
            if(elementId.includes("#coin")) //we use the JavaScript method includes() which finds whether one string is part of another string value
            {
                element.setAttribute("visible", false);
                console.log(elementId + " collision");
            }
            //checking if the variable elementId has the string #fish
            else if(elementId.includes("#fish"))
            {
                console.log( elementId + " collision");
            }
        });
    },
    //calling isCollided() inside update() handler
    update: function(){
        this.isCollided(this.data.elementId);
    }
});