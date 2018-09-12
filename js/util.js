/* Util
 * Author: bhuelga
 */

/*   Constants   */



/*   Utility Functions   */


/* Stagger Show Or Hide
 * --------------------
 * Staggers the hiding or show of a list of elements.
 */
var staggerShowOrHide = function(elements, show=true, reverse=false, betweenDelay=25, selfDelay=100) {
	if (reverse) elements = $(elements).get().reverse();
	$(elements).each(function(i) {
		setTimeout(() => {
			if (show)
				$(this).show(selfDelay);
			else
				$(this).hide(selfDelay);
		}, betweenDelay * i);
	});
}