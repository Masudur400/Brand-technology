# 💻 BrandTec - IT Solutions Company Website

A modern and responsive **IT Company Website** built with the latest web technologies.  
BrandTec showcases IT services, solutions, and company details with a professional and user-friendly design.

---

## 🚀 Features

### 🌐 Public Features
- Responsive and modern UI.
- Homepage with company introduction.
- Services section with details of IT solutions.
- About Us page with company mission & vision.
- Contact form for customer inquiries.
- Dynamic navigation bar & footer.

### 🔒 Admin Features (If included)
- Manage services and company info.
- Update content dynamically.
- Handle messages from users.

---

## 🛠️ Tech Stack
- React.js / Next.js
- Tailwind CSS
- React Router / Next.js Routing
- Axios (for API integration)
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- sslcommerz
- Firebase
- emailjs

---

* live link : https://brand-tec.web.app/
* client site github : https://github.com/Masudur400/Brand-tec-client
* server site github : https://github.com/Masudur400/Brand-tec-server

 ---
 
 ## Run Locally
 * npm i 
 * npm run dev

---

## impotent for server
{
    "version": 2,
    "builds": [
      {
        "src": "index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "index.js",
        "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
      }
    ]
  }
