# 🏫 ERP Portal

A modern **Enterprise Resource Planning (ERP) Portal for educational institutions**, designed to provide administrators with a centralized interface for managing student admissions, hostel allocation, fee records, academic results, staff information, and administrator details.

The project is built as a responsive React + TypeScript frontend with a dashboard-style layout, sidebar navigation, reusable components, interactive tables, filtering, and route-based page management.

---

## 🚀 Overview

Managing academic and administrative information across separate systems can make institutional workflows difficult to monitor.

**ERP Portal** provides a unified administrative interface where important institutional records can be organized into dedicated modules.

The portal currently includes:

* 👤 Administrator Profile
* 📝 Admission Records
* 🏠 Hostel Allocation
* 💰 Fee Records
* 📊 Result Records
* 👥 Staff Details
* ⚙️ Settings and Logout navigation

The application uses React Router to provide separate routes for each module.

---

## ✨ Features

### 👤 Admin Profile

The administrator profile section displays:

* Administrator name
* Admin ID
* Designation
* Date of joining
* Highest qualification
* Official email
* Phone number
* Cabin number
* Office hours
* Years of experience
* Availability status

The profile interface also includes a profile-photo action and responsive layout.

---

### 📝 Admission Management

The admission section provides an overview of application statistics including:

* Total applications
* Pending applications
* Approved applications
* Rejected applications
* Seats filled

It also provides an admission records table containing:

* Application ID
* Student name
* Course
* Application status
* Action menu

Status indicators are visually differentiated for approved, rejected, and pending applications.

---

### 🏠 Hostel Management

The hostel module provides an interface for monitoring hostel occupancy and student assignments.

It includes:

* Total room statistics
* Occupied rooms
* Vacant rooms
* Hostel selection
* Room filtering
* Floor filtering
* Status filtering
* Student name filtering
* MIS number filtering
* Occupancy status indicators

The filtering logic dynamically narrows hostel records according to the selected hostel and filter criteria.

---

### 💰 Fee Records

The portal contains a dedicated section for managing and viewing student fee-related records.

The module is accessible through:

```text
/fee-records
```

---

### 📊 Result Records

Academic result information has its own dedicated route:

```text
/results
```

This keeps academic performance data separated from other administrative modules.

---

### 👥 Staff Management

The portal provides a dedicated staff-details section accessible through:

```text
/staff
```

This creates a centralized location for managing institutional staff information.

---

## 🧭 Application Navigation

The application uses **React Router** for client-side navigation.

Current routes include:

| Route                | Module                     |
| -------------------- | -------------------------- |
| `/`                  | Redirects to Admin Profile |
| `/admin-profile`     | Administrator Profile      |
| `/admission-record`  | Admission Records          |
| `/hostel-allocation` | Hostel Allocation          |
| `/fee-records`       | Fee Records                |
| `/results`           | Academic Results           |
| `/staff`             | Staff Details              |

The root route automatically redirects users to the administrator profile page.

---

## 🎨 User Interface

The portal follows a dashboard-oriented design with:

* Fixed top navigation
* Responsive sidebar
* Mobile hamburger menu
* Responsive tables
* Cards for statistics
* Status badges
* Dropdown menus
* Filtering controls
* Hover states
* Responsive layouts
* Icon-based navigation

The sidebar dynamically highlights the currently selected route and switches to a mobile drawer on smaller screens.

---

## 🛠️ Tech Stack

| Technology           | Purpose                                 |
| -------------------- | --------------------------------------- |
| **React 18**         | Frontend UI development                 |
| **TypeScript**       | Type-safe application development       |
| **Vite**             | Development server and build tool       |
| **Tailwind CSS**     | Styling and responsive UI               |
| **React Router DOM** | Client-side routing                     |
| **React Icons**      | UI icons                                |
| **Lucide React**     | Additional icon library                 |
| **Supabase JS**      | Backend/database integration capability |
| **ESLint**           | Code quality and linting                |
| **PostCSS**          | CSS processing                          |

These dependencies and development tools are defined in the project's `package.json`.

---

## 🏗️ Project Architecture

The application follows a component-based React architecture.

```text
ERP-PORTAL/
│
├── src/
│   ├── components/
│   │   ├── AdminDashboard.tsx
│   │   ├── AdminProfile.tsx
│   │   ├── AdmissionRecord.tsx
│   │   ├── HostelAllocation.tsx
│   │   ├── FeeRecords.tsx
│   │   ├── Results.tsx
│   │   └── Staff.tsx
│   │
│   ├── App.tsx
│   └── ...
│
├── public/
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

The main `App.tsx` component configures the application's router and connects the individual administrative modules.

---

## 🔄 Application Flow

```text
                  ┌──────────────────┐
                  │    ERP Portal    │
                  └────────┬─────────┘
                           │
                    Admin Dashboard
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
     Admin Profile    Admission       Hostel Allocation
                          Records
          │                │                │
          └────────────────┼────────────────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
        Fee Records      Results       Staff
```

---

## 📊 Example Modules

### Admission Dashboard

```text
Total Applications     1250
Pending                 350
Approved                700
Rejected                200
Seats Filled          700/1000
```

The admission page presents these values as summary cards followed by an application table.

### Hostel Dashboard

```text
Total Rooms             250
Occupied                200
Vacant                   50
```

Hostel records can then be filtered based on hostel, room number, floor, status, student name, or MIS number.

---

## 💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SumitHelge-star/ERP-PORTAL.git
```

### 2. Navigate to the Project

```bash
cd ERP-PORTAL
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will start the development server and provide a local URL in the terminal.

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The project also provides linting and TypeScript type-checking scripts.

```bash
npm run lint
npm run typecheck
```

---

## 🔐 Data & Backend

The current repository is primarily a **frontend ERP portal implementation** with sample/static records used to demonstrate the administrative interfaces.

`@supabase/supabase-js` is included as a project dependency, providing the foundation for connecting the frontend to Supabase services.

For a production ERP system, the next stage would be connecting the modules to persistent databases and authenticated user accounts.

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes.

The dashboard includes:

* Desktop sidebar navigation
* Mobile sidebar drawer
* Responsive cards
* Responsive tables
* Mobile-friendly controls
* Adaptive grid layouts

The navigation sidebar switches to a mobile drawer controlled by React state.

---

## 🎯 Learning Outcomes

This project demonstrates practical experience with:

* React component architecture
* TypeScript
* React Router
* Tailwind CSS
* Responsive web design
* Dashboard UI development
* State management with React hooks
* Dynamic filtering
* Interactive tables
* Conditional rendering
* Reusable UI components
* Client-side navigation
* Vite-based development

---

## 🔮 Future Improvements

The portal can be extended into a complete production-ready ERP platform with:

### 🔐 Authentication & Authorization

* Admin login
* Student login
* Faculty login
* Role-based access control
* Protected routes
* Session management

### 🗄️ Database Integration

Connect the modules to Supabase/PostgreSQL for persistent data storage.

### 📝 Admission System

* Add applications
* Approve/reject applications
* Search students
* Application status updates
* Document verification

### 🏠 Hostel Management

* Allocate rooms
* Transfer students
* Track vacancies
* Hostel-wise statistics
* Room availability management

### 💰 Fee Management

* Fee payment tracking
* Pending fee alerts
* Payment history
* Receipt generation
* Student-wise fee summaries

### 📊 Academic Management

* Semester results
* Subject-wise marks
* CGPA/SGPA calculation
* Academic performance analytics

### 👥 Staff Management

* Staff profiles
* Department management
* Attendance
* Designation and role management

### 📈 Analytics

* Interactive charts
* Enrollment trends
* Fee collection statistics
* Hostel occupancy analytics
* Academic performance reports

---

## 🚀 Production Vision

```text
                    ERP PORTAL
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       Students       Faculty        Admin
          │              │              │
          └──────────────┼──────────────┘
                         │
                  Authentication
                         │
                    API / Backend
                         │
                     Database
                         │
             ┌───────────┼───────────┐
             │           │           │
          Admission    Finance     Academics
             │           │           │
          Hostel       Staff      Analytics
```

---

## 👨‍💻 Author

**Sumit Helge**

B.Tech CSE | IIIT Pune

GitHub:
https://github.com/SumitHelge-star

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for **educational and development purposes**.

