import setuptools

setuptools.setup(
    name="nb_cell_dialog",
    packages=['nb_cell_dialog'],
    version='0.0.1',
    include_package_data=True,
    install_requires=[
        'notebook'
    ],
    data_files=[
        # like `jupyter nbextension install --sys-prefix`
        ("share/jupyter/nbextensions/nb_cell_dialog", [
            "nb_cell_dialog/static/index.js", "nb_cell_dialog/static/nb_cell_dialog.yaml"
        ]),
        # like `jupyter nbextension enable --sys-prefix`
        ("etc/jupyter/nbconfig/notebook.d", [
            "jupyter-config/nbconfig/notebook.d/nb_cell_dialog.json"
        ])
    ],
    zip_safe=False
)