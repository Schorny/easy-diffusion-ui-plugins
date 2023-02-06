/*
    Copy Seed
    by Schorny

    Adds a button to copy seed from image to image settings
*/
(function() {
    "use strict"

    function applySeedToSettings(evt) {
        var seedVal = evt.currentTarget.innerHTML.replace(/\D/g,'')


        var txtElem = document.getElementById('seed');
        if(!txtElem) 
            return;
        txtElem.value = seedVal;

        var rndElem = document.getElementById('random_seed');
        if(!rndElem)
            return;
        if(rndElem.checked == true)
            $('#random_seed').click();
    }

    $(document).on('dblclick', '.imgSeedLabel', applySeedToSettings);

})()
