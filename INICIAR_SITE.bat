@echo off
echo Iniciando servidor local...
echo.
echo O site estará disponível em: http://localhost:8000
echo.
echo Pressione CTRL+C para parar o servidor.
echo.

cd /d "%~dp0"

REM Tentar com Python 3
python -m http.server 8000

REM Se Python não funcionar, tentar com Python 2
if errorlevel 1 (
    python2 -m SimpleHTTPServer 8000
)

REM Se nenhum Python funcionar, aviso
if errorlevel 1 (
    echo.
    echo ERRO: Python não foi encontrado!
    echo Instale Python de https://www.python.org/
    echo.
    pause
)
