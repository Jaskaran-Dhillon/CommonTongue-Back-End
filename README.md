# CommonTongue  Back-end
This is the back-end server for the CommonTongue application. Handles user login, signup, and translation requests.

## Local Development
Steps:\
1.) Clone the repository\
2.) Install the node packages with `npm install`\
3.) Create a .env in the root directory, add the following variables\
- `DB_HOST`="localhost"
- `DB_NAME`="Name of the database you're created in PostgreSQL"
- `DB_PASSWORD`="Your PostgreSQL account password"
- `SECRET`="Some long complicated string"
- `PORT`="Any post other than the one the client side code is running on (3000 by default)"
- `AZURE_KEY`="The api key for Azure's translator api"
- `AZURE_REGION`="The region selected for Azure's translator api"
- `NODE_ENV`="development"

### `Note #1`: This was made for windows users, the account name is hard-coded to `postgres`, change this if you are on macOS.

# Deployment
Steps:\
1.) Connect repository to hosting service\
2.) Connect the git repository, add the following environment variables:
- `SECRET`="Some long complicated string (must be same as the one for the WS server)"
- `DATABASE_URL`="The url of the PostgreSQL DB you've hosted"
- `AZURE_KEY`="The api key for Azure's translator api"
- `AZURE_REGION`="The region selected for Azure's translator api"

### `Note #2`: The env var `NODE_ENV` must be `production` when deploying.


