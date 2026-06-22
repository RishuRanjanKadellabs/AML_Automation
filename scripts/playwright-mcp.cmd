@echo off
setlocal EnableExtensions
cd /d "%~dp0\.."
set DOTENV_CONFIG_QUIET=1
set NPM_CONFIG_LOGLEVEL=error
"C:\Program Files\nodejs\node.exe" "%CD%\node_modules\@playwright\test\cli.js" run-test-mcp-server -c "%CD%"
