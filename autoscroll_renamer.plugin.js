/*
	autoscroll renamer
    by Schorny

    Shortens the label for autoscroll to save space
*/

$('label[for="auto_scroll"]').each(
	function(idx, e) {
		var $e = $(e);
		if($e.text().length > 3) {
			$e.text('autoscroll');
		}
	}
);
