# Healthcare Dashboard

A responsive and modern healthcare dashboard built with React. This application displays static healthcare data with a clean UI, showcasing various components such as health metrics, calendar, upcoming schedules, and more.

## Features

- Dashboard overview with patient statistics
- Health status cards with vitals like heart rate, temperature, etc.
- Anatomy section for visual insights
- Calendar view for appointments
- Upcoming schedule section
- Activity feed for recent actions
- Fully responsive layout
- Mobile-friendly sidebar with hamburger toggle

## Tech Stack

- React
- JavaScript
- HTML & CSS 
- Bootstrap & Font Awesome Icons

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Karthikanegouni/HealthCare.git
cd HealthCare
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The app will run at `http://localhost:3000`.

## Deployment

This app is deployed using [Vercel](https://vercel.com/)

**Live URL:** [ViewDemo](#)

## Screenshots
![Screenshot from 2025-05-27 11-15-50](https://github.com/user-attachments/assets/dad4f14b-0b21-46f8-89dd-cbec9cdf91ba)



## Folder Structure

```
├── package.json
├── package-lock.json
├── public
│   └── healthcare.png
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   ├── avatar.png
│   │   ├── bone.png
│   │   ├── check.png
│   │   ├── doctor.png
│   │   ├── eye.png
│   │   ├── heart.png
│   │   ├── human-body.png
│   │   ├── lungs.png
│   │   └── teeth.png
│   ├── components
│   │   ├── DashboardMainContent
│   │   │   ├── ActivityFeed.css
│   │   │   ├── ActivityFeed.jsx
│   │   │   ├── AnatomySection.css
│   │   │   ├── AnatomySection.jsx
│   │   │   ├── AppointmentCard.css
│   │   │   ├── AppointmentCard.jsx
│   │   │   ├── CalendarView.css
│   │   │   ├── CalendarView.jsx
│   │   │   ├── DashboardMainContent.css
│   │   │   ├── DashboardMainContent.jsx
│   │   │   ├── HealthStatusCards.css
│   │   │   ├── HealthStatusCards.jsx
│   │   │   ├── SimpleAppointmentCard.css
│   │   │   ├── SimpleAppointmentCard.jsx
│   │   │   ├── UpcomingSchedule.css
│   │   │   └── UpcomingSchedule.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── Sidebar.css
│   │   └── Sidebar.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```
