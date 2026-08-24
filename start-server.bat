@echo off
REM Quick Start Guide for Windows - Set Up Local Server

REM Always serve files from the folder containing this script.
cd /d "%~dp0"

echo.
echo ========================================
echo   DATA ANALYST PORTFOLIO - LOCAL SERVER
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Python is not installed or not in PATH.
    echo Please install Python from https://www.python.org/
    echo Make sure to check "Add Python to PATH" during installation.
    pause
    exit /b 1
)

echo Starting local server...
echo.
echo Your portfolio will be available at: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
timeout /t 2

python -m http.server 8000

pause
