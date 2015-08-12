define([
	"troopjs-dom/component/widget",
	"markdown"
], function (Widget, markdown) {
	return Widget.extend({
		"sig/start": function() {
			var me = this;
			var $el = me.$element;
			var $pre;
			// take the first <pre> element as vehicle for transporting markdown
			var text = ($pre = $el.find('>pre')).length ? $pre.text() : $el.text();
			return me.html(markdown.toHTML(text));
		}
	})
});