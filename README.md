### ✅ `server/README.md`

```markdown
# ⚙️ Chat Server – Real-Time Chat Backend

This is the **backend** server for a real-time chat application, built with **Node.js**, **Express**, and **Socket.io**. It handles real-time, bidirectional communication with connected clients.

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **Socket.io**
- **CORS**

---

## 📂 Folder Structure

```

server/
├── index.js          # Main server logic
├── package.json      # Project metadata and dependencies
└── README.md

````

---

## 🚀 Features

- 🔌 WebSocket connection with clients
- 💬 Real-time messaging between all connected users
- 📶 Broadcast support for sending messages to all clients
- 📡 Connection/disconnection logging
- 🔐 CORS configuration

---

## ⚙️ Setup Instructions

### 1. Navigate to the server folder
```bash
cd server
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm run dev    # Uses nodemon for live reload
# or
node index.js
```

The server will run at:
🌐 `http://localhost:4000`

---

## 📦 Dependencies

* **express**: Web server framework
* **socket.io**: Real-time communication engine
* **cors**: To handle cross-origin requests
* **nodemon** *(dev only)*: Automatically restarts server on changes

---

## 🔗 Socket.io Setup

Socket.io is initialized with proper CORS setup to allow frontend connections:

```js
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // React app running with Vite
    methods: ["GET", "POST"]
  }
});
```

---

## 📜 API/Socket Events

### ✅ Server-Side Events

* `connection`: When a client connects
* `disconnect`: When a client disconnects
* `send_message`: Receives message from one client
* `receive_message`: Broadcasts message to all clients

---

## 🧪 Development Notes

### Add your own:

* User authentication (e.g., JWT)
* Chat room management
* Typing indicators
* Database storage (MongoDB, PostgreSQL, etc.)

---

## 📸 Example Log Output

```
Server running at http://localhost:4000
User connected: z3Tu2JWm3l
User disconnected: z3Tu2JWm3l
```

---

## 🧠 Future Improvements

* 🗂 Namespaces and rooms
* ✅ Typing status and user presence
* 🧾 Message persistence with MongoDB
* 🔐 Auth middleware

---

## 📜 License

MIT License – use freely, customize openly!

---

## 🙌 Acknowledgments

* [Socket.io Docs](https://socket.io/docs/)
* [Express Docs](https://expressjs.com/)
* [Vite](https://vitejs.dev/) for blazing-fast frontend development`
