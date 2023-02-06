/*
	RenameSession
    by Schorny

    Renames the current Session (changes output folder name)
*/


(function() {
    "use strict"
    function askSessionId() {
		var text = prompt('Enter new Session name', sessionId);
		sessionId = text;
	}

	$('#editor-inputs-prompt').prepend(
    	'<button id="rename-sessionid" class="UIButton">Rename Sess</button>&nbsp;'
    );
    $(document).on('click', '#rename-sessionid', askSessionId)
})()




