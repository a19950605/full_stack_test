


cmd=$(curl --location --request POST 'http://localhost:6868/api/subscriptions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"Free Plan",
    "general":true,
    "specialist":true,
    "physiotherapy":false,
    "extraOne":false,
    "extraTwo":false

}'
curl --location --request POST 'http://localhost:6868/api/subscriptions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"Standard Plan",
        "general":true,
    "specialist":true,
    "physiotherapy":true,
    "extraOne":false,
    "extraTwo":false

}'

curl --location --request POST 'http://localhost:6868/api/subscriptions' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"Premium Plan",
        "general":true,
    "specialist":true,
    "physiotherapy":true,
    "extraOne":true,
    "extraTwo":true

}'

)
