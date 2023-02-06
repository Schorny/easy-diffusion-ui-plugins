/*
	ClearAllEmpty
    by Schorny

    Adds a "Clear All Empty" Button
*/
(function() {
    "use strict"

    function clearAllEmpty() {
		$('.imageTaskContainer').each(function(idx, e) {
			var $e = $(e);
			var $pb = $e.find('.progress-bar');
			if($pb.hasClass('active')) {
				return;
			}

			if($e.find('.img-preview').find('img').length==0) {
				$e.remove();
			}
		});
    }

    $('#clear-all-previews').after(
    	'&nbsp;<button id="clear-all-empty-previews" class="secondaryButton"><i class="fa-solid fa-trash-can"></i> Clear Empty</button>'
    );
    $(document).on('click', '#clear-all-empty-previews', clearAllEmpty)

})()




