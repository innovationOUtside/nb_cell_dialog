/**
 * Calysto Jupyter Notebooks Extensions
 *
 * Copyright (c) The Calysto Project
 * http://github.com/Calysto/notebook-extensions
 *
 * Released under the BSD Simplified License
 *
 **/

define(["require"], function (require) {

	function popout_code() {
		var cell = Jupyter.notebook.get_selected_cell();
		if (cell.cell_type == "code") {
			var popped = document.createElement("div");
			var popped_id = "p_" + Date.now();
			popped.setAttribute("id", popped_id);
			var _tmp_el = document.createElement("div");
			var _returner = cell.element[0].nextSibling;
			var _cell = cell.element[0];
			popped.appendChild(_cell);
			document.getElementsByTagName("body")[0].appendChild(popped);

			$("#" + popped_id).dialog({ beforeClose: function (event, ui) { _returner.parentNode.insertBefore(_cell, _returner); } });
		}
	}
	function popout() {
		var cell = Jupyter.notebook.get_selected_cell();
		if (cell.cell_type == "code") {
			var popped = document.createElement("div");
			var popped_id = "p_" + Date.now();
			popped.setAttribute("id", popped_id);
			var _home = cell.element[0].getElementsByClassName("output_area")[0];
			var _cell = cell.element[0].getElementsByClassName("output_subarea")[0];
			popped.appendChild(_cell);
			document.getElementsByTagName("body")[0].appendChild(popped);

			$("#" + popped_id).dialog({ beforeClose: function (event, ui) { _home.appendChild(_cell) } });
		} else if (cell.cell_type == "markdown") {
			var popped = document.createElement("div");
			var popped_id = "p_" + Date.now();
			popped.setAttribute("id", popped_id);
			var _home = cell.element[0].getElementsByClassName("inner_cell")[0];
			var _cell = cell.element[0].getElementsByClassName("text_cell_render")[0];
			popped.appendChild(_cell);
			document.getElementsByTagName("body")[0].appendChild(popped);
			$("#" + popped_id).dialog({ beforeClose: function (event, ui) { _home.appendChild(_cell) } });
		}

	}

	var add_toolbar_buttons = function () {
		Jupyter.actions.register({
			'help': 'Cell as dialog.',
			'icon': 'fa-rocket',
			'handler': popout
		}, 'popout', 'cell_dialog');


		Jupyter.actions.register({
			'help': 'Cell as dialog.',
			'icon': 'fa-terminal',
			'handler': popout_code
		}, 'popout_code', 'cell_dialog');


		IPython.toolbar.add_buttons_group([
			{
				'action': 'cell_dialog:popout'
			},
			{
				'action': 'cell_dialog:popout_code'
			}
		], 'cell_dialog-buttons');
	};

	var load_ipython_extension = function () {

		// Put a button on the toolbar:
		if (!IPython.toolbar) {
			$([IPython.events]).on("app_initialized.NotebookApp", add_toolbar_buttons);
			return;
		} else {
			add_toolbar_buttons();
		}
	};

	return {
		load_ipython_extension: load_ipython_extension,
	};

});
