- Chandra Kiran G (S20190010029)
- Bhavesh Kumar C (S0190010034)
- Sai Bhargava Reddy K (S20190010083)
- Navdeep K (S20190010099)
- Karthik K (S20190010100)
- Venkata Varun K (S20190020222)





## Tech Stack Used for the App

#### Frontend

- ReactJS

- TypeScript

- Redux

- Axios

#### Backend

- Node

- MongoDB

- SocketIO

- Express JS

- Passport JS

- GCS



## Instructions

1. Unzip the folder `foodie-app`

2. Install the required modules for both frontend and backend through the following command:
   
   ```bash
   npm run init-project
   ```

3.  Download and install MongoDB locally.

4. Create `.env-dev` to store env variables for running the development server and set the following contents:
   
   ```python
   MONGODB_URI=<mongodb uri | default local = mongodb://localhost:2717 >
   DB_NAME=<foodie
   PORT=9000
   CLIENT_URL=http://localhost:3000
   SESSION_SECRET=<any secret key>
   SESSION_NAME=foodie
   FIREBASE_PROJECT_ID=<firebase project id found on your firebase config settigs>
   FIREBASE_STORAGE_BUCKET_URL=<firebase bucket url found on your firebase config settigs>
   CLOUDINARY_NAME=<Name>
   CLOUDINARY_API_KEY=<API Key>
   CLOUDINARY_API_SCERET=<API Secret>
   ```

5. Finally run the project using:
   
   ```bash
   npm start
   ```
   
   
