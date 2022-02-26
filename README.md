# nb\_cell\_dialog

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/innovationOUtside/nb_cell_dialog/master)

Pop cells into a floating dialog widget from toolbar buttons:

![](.images/popout.gif)

- Rocket button will pop-out markdown and cell output.
- terminal button will pop out code cell and its output. Note: this is non-runnable.

Close the dialog and the cell is put back where it came from (most of the time: I think there's an edge effect if you pop the last cell in the notebook using the terminal button).

Should install and enable the extension automatically in Binder.

## Install

Install locally as:

`pip install git+https://github.com/innovationOUtside/nb_cell_dialog.git`

Again, it should install and enable automatically.

If not, this maybe?

```
jupyter nbextension uninstall output_dialog/
jupyter nbextension install output_dialog/ --user
jupyter nbextension enable output_dialog/index
```

Or if you're working from the downloaded files:

`jupyter nbextension enable output_dialog/static/index`

# See Also

- https://github.com/xiaohk/stickyland
