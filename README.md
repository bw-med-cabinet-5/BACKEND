# Med-Cabinet-BACKEND


## END_POINTS

Heroku- "https://med-cabinet-production.herokuapp.com/"


|    METHOD     |      URL      |  Description |
| ------------- | ------------- | -------------|
| POST          | /api/register | creates a user|
| POST          | /api/login    | Auth user    | 
| GET          | /api/users     | Retrieves User|

### To Register
Select "POST" as the request.
 The JSON format should look similar to the following -
{
"first_name": "Your First Name Here",
"last_name": "Your Last Name Here",
"email": "Your Email Here",
"password": "Your Password Here"
}

### To Login 
The JSON format should look similar to the following 
{
"email": "Your Email Here",
"password": "Your Password Here"
}





