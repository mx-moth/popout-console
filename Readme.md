Pop out console
===============

Add this bookmarklet to your browser to get a simple pop out JavaScript editing window on any page

[Pop out console bookmarklet][bookmarklet]

[bookmarklet]: javascript:window.run%3Dfunction%28s%29%7Beval%28s%29%3B%7D%3Bvar%20w%3Dwindow.open%28%27%27%2C%27console%27%2C%27width%3D600%2Cheight%3D300%2Cresizable%3Dyes%2Cdependent%3Dyes%27%29%2Cd%3Dw.document%3Bd.write%28%27%3C%21doctype%20html%3E%3Ctitle%3EConsole%3C%2Ftitle%3E%3Ctextarea%20style%3D%5C%27width%3A%20100%25%3B%20height%3A%20250px%3B%5C%27%20id%3D%5C%27console%5C%27%3E%3C%2Ftextarea%3E%3Cscript%20src%3D%5C%27http%3A%2F%2Fmaelstrom.github.com%2Fpopout-console%2Fconsole.js%5C%27%3E%3C%2Fscript%3E%27%29%3Bd.close%28%29%3B
