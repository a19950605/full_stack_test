# nodejs_test

how to run


1. run start.sh , the shell script will install the dependencies for  nodejs

2. run post.sh to create 3 records 



api endpoint: http://localhost:6868/api/subscriptions


there are 3 api create,get all and delete :
###create
http method: post
url= /
#####dummy request body:
```json
{
    "title":"Premium Plan",
    "general":true,
    "specialist":true,
    "physiotherapy":true,
    "extraOne":true,
    "extraTwo":true

}

```
#####response
```json
{
    "id": 11,
    "title": "Premium Plan",
    "general": true,
    "specialist": true,
    "physiotherapy": true,
    "extraOne": true,
    "extraTwo": true
}
```

###get all plans
http method: get
url= /


no requesst body required

demo response 
if null
```json
[]
```
otherwise
```json
[
    {
        "id": 1,
        "title": "Premium Plan",
        "general": 1,
        "specialist": 1,
        "physiotherapy": 1,
        "extraOne": 1,
        "extraTwo": 1
    }
]
```


###delete
http method: delete
url= /:deleteId

sample

#####success
```json
{
    "message": "sub was deleted successfully!"
}

```

#####no record
```json
{
    "message": "Not found sub with id 1."
}
```