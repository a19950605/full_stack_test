# Full stack test

##### to run the test
Clone the repository first, then:




## shell script start
1. run ```start.sh``` , the shell script will install the dependencies for nodejs and start the docker container. After that, the dependencies of react frontend will be installed and start the application
2. run ```post.sh``` to create demo records on mysql


### to run seperately

## frontend
the react frontend should be started after running start.sh

to install the dependencies and start seperately, use the command below
1. run ```  npm i```
2. run ``` npm start```

## backend
run this command to build the docker container 

1. docker-compose up -d
2. run post.sh to create dummy data


frontend :http://localhost:3000
api endpoint: http://localhost:6868/api/subscriptions


there are 3 api create,get all and delete :
### create
http method: post


url= /
##### dummy request body:
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
##### response
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

### get all plans

http method: get

url= /


No requesst body required

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


### delete
http method: delete



url= /:deleteId

sample

##### success
```json
{
    "message": "sub was deleted successfully!"
}

```

##### no record
```json
{
    "message": "Not found sub with id 1."
}
```
