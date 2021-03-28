#!/bin/bash

curl -X POST -d 'user=example1@hotmail.com' -d 'password=linuxize@example.com' http://localhost:5000/User/LogIn
sleep 2
echo "\n"
curl -X POST -d 'user=example1@hotmail.com' -d 'password=example1' http://localhost:5000/User/LogIn
