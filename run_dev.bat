@echo off
CALL "C:\Bitnami\RUBYST~1.3-2\scripts\setenv.bat"
START "Dev server" cmd /C "echo Starting (this takes a minute...) & bundle exec wagon serve"