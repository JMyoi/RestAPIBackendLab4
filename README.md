# Node.js / Express.js Backend Fundamentals – Simple RESTful API

This project is a beginner-friendly **Node.js + Express.js RESTful API** that demonstrates backend fundamentals such as routing, CRUD operations, and JSON data handling.  
The API uses **lowdb** — a lightweight local JSON database — to store and manage job postings.

🔗 **lowdb GitHub:** https://github.com/typicode/lowdb  

---

## 📁 Jobs Data Example

Each job entry in the database looks like this:

```json
{
  "id": 1,
  "employerName": "Amazon",
  "jobTitle": "Software Developer",
  "jobLocation": "New York",
  "jobSalary": 100000,
  "jobLink": "https://www.amazon.jobs/en/jobs/3092174/software-engineer",
  "jobDescription": "Twitch is the world’s biggest live streaming service, with global communities built around gaming, entertainment, music, sports, cooking, and more. It is where thousands of communities come together for whatever, every day. We’re about community, inside and out. You’ll find coworkers who are eager to team up, collaborate, and smash (or elegantly solve) problems together. We’re on a quest to empower live communities, so if this sounds good to you, see what we’re up to on LinkedIn and X, and discover the projects we’re solving."
}
```

---

## 🚀 API Routes

Base URL:
```
http://localhost:3000
```

### **Get all jobs**
```
GET /api/job
```

### **Get a job by ID**
```
GET /api/job/:id
```

### **Create a new job**
```
POST /api/job
```

### **Update a job by ID**
```
PATCH /api/job/:id
```

### **Delete a job by ID**
```
DELETE /api/job/:id
```

---

## 📬 Postman Collection

You can test all API routes using the Postman collection below:

🔗 **Postman Collection:**  
https://www.postman.com/postedmanjay/workspace/j-b/collection/28379540-0651991b-4918-44e8-9f84-5f286bd575b6?action=share&creator=28379540

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the server**
   ```sh
   npm start
   ```

Your server will run on:

```
http://localhost:3000/
```
