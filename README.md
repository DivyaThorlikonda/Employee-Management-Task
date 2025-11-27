📌 Employee Management System
A full-stack Employee Management application built using React.js, Node.js, Express, and MongoDB.
This system allows Admins to manage employees and assign tasks.

🚀 Features
->User Authentication (Login / Register)
->Add, Edit, Delete Employees
->Add, Edit, Delete Tasks
->Role-based access (Admin/Users)
->Secure APIs using JWT
->Responsive UI
->MongoDB Database Integration

🛠 Tech Stack
Frontend:
->React.js
->Axios
->React Router
->Context API
->CSS
Backend:
->Node.js
->Express.js
->MongoDB & Mongoose
->JWT Authentication
->Bcrypt.js

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/DivyaThorlikonda/Employee-Management-Task.git
2️⃣ Install frontend dependencies
cd frontend
npm install
npm start
3️⃣ Install backend dependencies
cd backend
npm install
npm start
4️⃣ Configure environment variables
Create a .env file inside backend/:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key

📸 Screenshots:
<img width="1892" height="889" alt="image" src="https://github.com/user-attachments/assets/2019e544-50f8-46c4-952d-7677789537e4" />
<img width="514" height="469" alt="image" src="https://github.com/user-attachments/assets/0c3c8008-54df-4ed1-90f5-47bc66f59300" />
<img width="505" height="403" alt="image" src="https://github.com/user-attachments/assets/8b0699d4-5263-4c82-9ff7-9ac04cf65ee3" />
<img width="650" height="448" alt="image" src="https://github.com/user-attachments/assets/a91a23a1-0bb7-40de-b47e-40e1bcea3bc9" />
<img width="1895" height="898" alt="image" src="https://github.com/user-attachments/assets/3df64539-992c-4977-804c-6b00f4b1f1a9" />
<img width="1837" height="865" alt="image" src="https://github.com/user-attachments/assets/22cbe96d-151a-4081-8c78-a7a42eb5c302" />
<img width="1901" height="843" alt="image" src="https://github.com/user-attachments/assets/f40d32b1-0c01-4e92-853f-e4f4d8f57db4" />

✔️ Bonus / Assumptions:
JWT token stored in localStorage for authentication
Protected routes using middleware
Clean folder structure for scalability
API error handling implemented

📂 Folder Structure:
Employee-Management-System/
   ├── backend/
   │     ├── controllers
   │     ├── models
   │     ├── routes
   │     ├── middleware
   │     ├── server.js
   ├── frontend/
         ├── src/
         ├── components/
         ├── pages/
         ├── context/

Submitted by:Thorlikonda Divya(22bce7269)


