AFRAME.registerComponent("target-coins", {
    init: function(){
        for(var i = 1; i <= 10; i++)
        {
            var id = `coins${i}`; //ids for each coin created

            //position variables
            var posX = Math.random() * 15 + -10;
            var posY = Math.random() * 5 + -4;
            var posZ = Math.random() * 30 - 15;

            var position = {x: posX, y: posY, z: posZ};
            this.createCoins(id, position);
        }
    },
    createCoins: function(id, position) {
        //getting island element
        const islandEntity = document.querySelector("#island");

        //creating coin model entity
        var coinEl = document.createElement("a-entity");

        //setting multiple attributes
        coinEl.setAttribute("id", id);
        coinEl.setAttribute("position", position);
        coinEl.setAttribute("material", "color", "#ff9100");
        coinEl.setAttribute("geometry", {primitive: "circle", radius: 1});
        coinEl.setAttribute("animation", {
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        });
        
        //setting the static body attribute of physics system
        coinEl.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 2
        });

        //append the coin entity as a child of the island entity
        islandEntity.appendChild(coinEl)
    }
});