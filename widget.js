define([
	"troopjs-dom/component/widget",
	"markdown"
], function (Widget, markdown) {
	return Widget.extend({
		"sig/start": function() {
			var me = this;
			return me.html(markdown.toHTML(me.$element.html()));
		}
	})
});