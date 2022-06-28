#!/bin/bash 
cd nodejs_test-main && npm i

cd .. 

docker-compose up -d




cmd='cd react_test && npm i'

cmd='cd react_test && npm start'

cd react_frontend && npm i
npm start
