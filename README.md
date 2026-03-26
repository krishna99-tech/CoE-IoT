# COE-IOT Research Laboratory

Official website for the **Center of Excellence on IoT & Smart Factory**. This repository contains the source code for the lab's portfolio, showcasing projects, workshops, team members, and research facilities.

## 🚀 Features

- **Dynamic Content**: Most sections (Projects, Workshops, Members, PCBs, Gallery) are populated dynamically using JSON data files, making it easy to update content without modifying HTML.
- **Interactive Photo Stream**: A dedicated "Photo Stream" page with a full-featured carousel, fullscreen mode, zoom capabilities, and auto-play functionality.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Industry Collaboration**: Showcases partnerships with organizations like ZF Commercial Vehicle Control Systems India Limited and Innovate+ Solutions.

## 📂 Project Structure

```text
├── index.html          # Main landing page
├── lab-images.html     # Interactive gallery/photo stream page
├── README.md           # Project documentation
├── *.json              # Data files for dynamic content (projects, members, etc.)
└── Images/             # Directory containing all project and lab imagery
```

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Variables, Flexbox, Grid), JavaScript (ES6 Fetch API)
- **Icons**: Font Awesome 6.4.0
- **Typography**: Google Fonts (Open Sans, Poppins)

## 🔧 Configuration

To update the website content, modify the corresponding JSON files:

- `projects.json`: Add or edit lab projects.
- `workshops.json`: Update information about conducted workshops.
- `members.json`: Manage the team member list.
- `pcbs.json`: Showcase latest PCB designs.
- `gallery.json`: Main lab gallery images.
- `lab-images.json`: Images specifically for the Photo Stream page.
- `leadership.json`: Update leadership details.

## 🌐 Deployment

This site is designed to be hosted on **GitHub Pages**. Simply push the changes to the `main` branch, and the site will be live at `https://coe-iot.vercel.app/`.

