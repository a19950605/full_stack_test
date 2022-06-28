cmd='docker-compose up -d'
cmd=$(curl --location --request POST 'http://localhost:6868/api/subscriptions' \
--header 'Content-Type: application/json' \
--data-raw '{
 "title":"Premium test Plan",
 "general":true,
 "specialist": true,
 "physiotherapy":true,
 "extraOne":true,
 "extraTwo":true

}')

cmd=$(curl --location --request POST 'http://localhost:6868/api/subscriptions' \
--header 'Content-Type: application/json' \
--data-raw '{
 "title":"Premium test Plan2",
 "general":true,
 "specialist": true,
 "physiotherapy":true,
 "extraOne":true,
 "extraTwo":true

}')


cmd=$(curl --location --request POST 'http://localhost:6868/api/subscriptions' \
--header 'Content-Type: application/json' \
--data-raw '{
 "title":"Premium test Plan3",
 "general":true,
 "specialist": true,
 "physiotherapy":true,
 "extraOne":true,
 "extraTwo":true

}')

cmd='cd react_test && npm i'

cmd='cd react_test && npm start'