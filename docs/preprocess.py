from npdoc_to_md import render_folder

render_folder(source="pages", destination="pages", recursive=True, pattern="(.npmd)$")
