from IPython.display import HTML
import urllib2
TOC="https://gist.githubusercontent.com/astyonax/1d7f49edefd9728b7da0/raw/"
TOC=urllib2.urlopen(TOC).read()
# TOC=""
INAV="https://gist.github.com/astyonax/815eacf44e2efd5eb0a7/raw"
INAV=urllib2.urlopen(INAV).read()
# INAV=""
style="https://gist.github.com/astyonax/d53a8eb1c556168a65f5/raw"
style=urllib2.urlopen(style).read()
HTML("""
<style>{2}</style>
<div id="toc"></div>
<script type="text/javascript">
{0}
</script>
<div id="img_nav"></div>
<script type="text/javascript">
{1}
</script>""".format(TOC,INAV,style))
