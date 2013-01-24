Pop out console
===============

Add this bookmarklet to your browser to get a simple pop out JavaScript editing window on any page

<a href="javascript:window.run=function(s) { eval(s); };var w=window.open('', 'console', 'width=600,height=300,resizable=yes,dependent=yes'), d=w.document;d.write('<!doctype html><title>Console</title><textarea style=\'width: 100%; height: 250px;\' id=\'console\'></textarea><script src=\'http://maelstrom.github.com/popout-console/console.js\'></script>');d.close();">Pop out console bookmarklet</a>
