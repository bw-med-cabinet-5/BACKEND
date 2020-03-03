# Med-Cabinet-BACKEND


## END-POINTS

Heroku- "https://med-cabinet-production.herokuapp.com/"


|    METHOD     |      URL      |  Description |
| ------------- | ------------- | -------------|
| POST          | /api/users/register | creates a user|
| POST          | /api/users/login    | Auth user    | 
| POST          | /api/users/:id/strains| Adds selected strain with given id  |
|GET            | /api/users/:id/strains | Gets list of saved strains for the user|
|DELETE         | /api/users/:id/strains | Deletes a saved strain|
|GET            | /api/strains            | Gets list of strains|
| GET            | /api/strains/:id       |Gets a specific strain by id |
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





