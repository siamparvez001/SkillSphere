# SkillSphere

SkillSphere is an online learning platform where people can explore courses, watch lessons, and build new skills. The platform has courses on Web Development, Design, Marketing, Data Science, and more.

## Live URL

🔗 https://skill-sphere-theta-henna.vercel.app

---

## Key Features

- Browse all available courses on the courses page
- View top 3 popular courses on the home page
- See trending courses and top instructors
- Search courses by title on the all courses page
- Filter courses by category
- User registration with email and password
- User login with email and password
- Google sign in option on login and register page
- Protected route — only logged in users can see course details
- My profile page shows user info and enrolled courses
- Update profile name and photo from the profile page
- Toast notifications for login, register, and error messages
- Loading spinner while data is being fetched
- Custom 404 not found page
- Fully responsive on mobile, tablet, and desktop
- Deployed on Vercel — no errors on page reload

---

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| All Courses | `/all-courses` |
| Course Details | `/all-courses/[id]` |
| Login | `/signin` |
| Register | `/register` |
| My Profile | `/profile` |
| Update Profile | `/profile/update` |

---

## NPM Packages Used

| Package | Why it was used |
|---------|-----------------|
| `next` | Main framework for building the app |
| `react` | UI library |
| `react-dom` | Renders React components in the browser |
| `firebase` | User authentication (email/password and Google) |
| `react-hot-toast` | Shows toast notifications |
| `react-icons` | Icons used across the UI |
| `tailwindcss` | CSS framework for styling |

---

## How to Run Locally

1. Clone the repository

```bash
git clone <your-repo-link>
cd skill-sphere
```

2. Install packages

```bash
npm install
```

3. Create a `.env.local` file and add your Firebase config

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server

```bash
npm run dev
```

5. Open your browser and go to `http://localhost:3000`

---

## Folder Structure

```
skill-sphere/
├── app/
│   ├── page.jsx          (Home)
│   ├── all-courses/
│   │   ├── page.jsx      (All Courses)
│   │   └── [id]/
│   │       └── page.jsx  (Course Details)
│   ├── signin/
│   │   └── page.jsx
│   ├── register/
│   │   └── page.jsx
│   ├── profile/
│   │   ├── page.jsx
│   │   └── update/
│   │       └── page.jsx
│   └── not-found.jsx
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── data/
│   └── courses.json
└── public/
```

---

## Environment Variables

All sensitive keys are stored in `.env.local` and are not pushed to GitHub. The `.env.local` file is included in `.gitignore`.