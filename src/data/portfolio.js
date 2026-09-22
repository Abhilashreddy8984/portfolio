// ─── portfolio.js ────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update any section.
// Replace every "YOUR_..." placeholder with real values when ready.
// ─────────────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name:        'Gaddam Abhilash Reddy',
  displayName: 'Abhilash Reddy',
  title:       'Computer Science Engineering (AI & ML) Student',
  tagline:     'Builder | Cloud & AI Enthusiast',
  bio: `I'm a B.Tech CSE (AI & ML) student at MLR Institute of Technology.
I learn by building things, experimenting with ideas, and sharing what I discover —
from software projects and AI/ML experiments to cloud deployment and hackathons.
I'm actively developing my skills across software engineering, machine learning,
and cloud technologies.`,
  email:    'abhilashreddygaddam8984@gmail.com',          // ← replace
  github:   'https://github.com/Abhilashreddy8984', // ← replace
  linkedin: 'https://linkedin.com/in/abhilash-reddy-gaddam/',  // ← replace
}

export const skills = [
  {
    category: 'Programming',
    icon: '{ }',
    items: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    items: ['Machine Learning', 'Deep Learning', 'Generative AI', 'AI Fundamentals'],
  },
  {
    category: 'Development',
    icon: '⚡',
    items: ['HTML', 'CSS', 'JavaScript', 'Backend Development', 'Git / GitHub'],
  },
  {
    category: 'Cloud',
    icon: '☁️',
    items: ['AWS', 'Cloud Deployment', 'Linux'],
  },
  {
    category: 'Problem Solving',
    icon: '🧠',
    items: ['Data Structures & Algorithms', 'LeetCode', 'Competitive Programming'],
  },
]

export const projects = [
  {
    id: 1,
    title:       'Hangman Game',
    description: 'A Python-based Hangman game developed as a programming fundamentals project. Implements word selection, input validation, and win/loss logic in a clean command-line interface.',
    tech:        ['Python'],
    github:      'https://github.com/Abhilashreddy8984', // ← replace
    demo:        null,
    status:      'complete',
  },
  {
    id: 2,
    title:       'Password Generator',
    description: 'A Python tool that generates secure, randomised passwords. Supports configurable length, character sets, and output formatting to encourage better password hygiene.',
    tech:        ['Python'],
    github:      'https://github.com/Abhilashreddy8984', // ← replace
    demo:        null,
    status:      'complete',
  },
  {
    id: 3,
    title:       'Blood Bank Management System',
    description: 'A software project for managing blood-bank operations — including donor records, blood group inventory, and request tracking — built to practise structured data management.',
    tech:        ['python'],    // ← replace (e.g. Python, SQLite)
    github:      'https://github.com/Abhilashreddy8984', // ← replace
    demo:        null,
    status:      'complete',
  },
  {
    id: 4,
    title:       'AI Chatbot',
    description: 'An AI chatbot project exploring the integration of generative AI APIs into an application. Focused on prompt engineering, API handling, and building a conversational interface.',
    tech:        ['Python', 'Generative AI', 'YOUR_API'], // ← replace API name
    github:      'https://github.com/Abhilashreddy8984', // ← replace
    demo:        null,
    status:      'in-progress',
  },
  // ─── Add future projects below this line ───
  // {
  //   id: 5,
  //   title:       'Your Next Project',
  //   description: 'Description of your project.',
  //   tech:        ['Tech1', 'Tech2'],
  //   github:      'https://github.com/...',
  //   demo:        'https://your-live-demo.com',
  //   status:      'complete',
  // },
]

export const experiences = [
  {
    id: 1,
    role:         'Member in event organisation team and scope club MLRIT',
    organization: 'AWS Cloud Trek — MLRIT',
    period:       'September 2026',
    description:  `Hosted the AWS Cloud Trek bootcamp — a two-day technical workshop organised by the AWS Student Builder Group in collaboration with SCOPE Club at MLR Institute of Technology. Learned AWS application deployment hands-on, then demonstrated and explained the deployment workflow to junior students in a beginner-friendly session.`,
    highlights: [
      'Hands-on AWS application deployment',
      'Delivered a technical walkthrough for junior students',
      'Broke down cloud concepts into approachable steps',
      'Developed technical communication skills',
      'Coordinated event logistics as an organiser',
    ],
    certificate: true,
  },
  // ─── Add future experiences below ───
  // {
  //   id: 2,
  //   role:         'Your Role',
  //   organization: 'Organisation / Event',
  //   period:       'Month YYYY',
  //   description:  'What you did.',
  //   highlights:   ['Key point 1', 'Key point 2'],
  //   certificate:  false,
  // },
]

export const hackathons = [
  {
    id: 1,
    name:   'Smart India Hackathon',
    year:   '2026',         // ← replace
    role:   'Team member',         // ← replace (e.g. Team Member)
    problem: '26076', // ← replace
    tech:   ['APP DEVELOPMENT'],       // ← replace
    outcome: 'participated',     // ← replace (do not fabricate; e.g. "Participated")
    link:   null,
  },
  
  // ─── Add more hackathons below ───
  // {
  //   id: 3,
  //   name:   'Hackathon Name',
  //   year:   '2026',
  //   role:   'Team Lead',
  //   problem: 'Problem you worked on.',
  //   tech:   ['React', 'Python'],
  //   outcome: 'Participated / Finalist / etc.',
  //   link:   'https://...',
  // },
]

export const currentlyLearning = [
  {
    topic:       'Data Structures & Algorithms',
    description: 'Practising problem solving on LeetCode and studying core DSA concepts.',
    icon:        '🧩',
  },
  {
    topic:       'AI / Machine Learning',
    description: 'Building ML models and studying supervised & unsupervised learning fundamentals.',
    icon:        '🤖',
  },
  {
    topic:       'Generative AI',
    description: 'Exploring LLMs, prompt engineering, and AI API integration in applications.',
    icon:        '✨',
  },
  {
    topic:       'AWS / Cloud Computing',
    description: 'Deepening cloud knowledge after hosting the Cloud Trek session at MLRIT.',
    icon:        '☁️',
  },
  {
    topic:       'Full-Stack Development',
    description: 'Building end-to-end web applications to connect front-end and back-end skills.',
    icon:        '⚡',
  },
  {
    topic:       'System Design Fundamentals',
    description: 'Learning how to design scalable, maintainable software systems.',
    icon:        '🏗️',
  },
]
