#!/bin/bash

echo ""
echo "your account has been created successfully"
curl -X POST -d 'user=example3' -d 'email=example2@hotmail.com' -d 'password=123456' -d 'password2=123456' http://localhost:5000/User/SignIn

sleep 1

echo ""
echo "sorry this user or email is already registered"
curl -X POST -d 'user=example1' -d 'email=example1@hotmail.com' -d 'password=123456' -d 'password2=123456' http://localhost:5000/User/SignIn

sleep 1
echo ""
echo "passwords are differents"
curl -X POST -d 'user=example10' -d 'email=example10@hotmail.com' -d 'password=123456a' -d 'password2=123456' http://localhost:5000/User/SignIn
