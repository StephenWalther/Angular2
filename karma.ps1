# run with
# powershell -Command "./karma.ps1"

Start-Process "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Argument "node_modules/.bin/karma start karma.conf.js"
Start-Process "chrome" -Argument ".\_reports\html-results.html"