import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Fullstack from "./Fullstack";
import All from "./All";
import Datascience from "./Datascience";
import Cyber from "./Cyber";
import Career from "./Career";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let carditems = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Frontend-Developer-Salary-in-India-USA.webp",
      title: "Frontend Developer Salary in India & USA [2024]",
      description:
        "Are you willing to start a career in frontend development? What’s a better motivating factor",
      date: "22 February 2024  No Comments",
      head: "all",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Roles-and-Responsibilities-of-a-Frontend-Developer.webp",
      title: "Top Roles and Responsibilities of a Frontend Developer [2024]",
      description:
        "In today’s digital age, where websites and mobile apps are an integral part of our",
      date: "22 February 2024  No Comments",
      head: "all",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/project_ideas_for_robotic_applications-1.webp",
      title: "10 Best HTML and CSS Project Ideas for Beginners",
      description:
        "Looking for a career in web development? The very first step would be getting a",
      date: "22 February 2024  No Comments",
      head: "all",
    },
    {
      id: 4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Difference-Between-Software-Developer-vs-Full-Stack-Developer.webp",
      title: "Difference Between Software Developer vs Full Stack Developer",
      description: "By Meghana D",
      date: "23 Feb, 2024  26 Min Read",
      head: "fullstack",
    },
    {
      id: 5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Frontend-Developer-Salary-in-India-USA.webp",
      title: "Frontend Developer Salary in India & USA [2024]",
      description: "By Lukesh S",
      date: "22 February 2024  18 Min Read",
      head: "fullstack",
    },
    {
      id: 6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Roles-and-Responsibilities-of-a-Frontend-Developer.webp",
      title: "Top Roles and Responsibilities of a Frontend Developer [2024]",
      description: "By Jaishree Tomar",
      date: "22 February 2024  18 Min Read",
      head: "fullstack",
    },
    {
      id: 7,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn in 2024",
      description: "By Meghana D",
      date: "08 Jan, 2024  No Comments",
      head: "datascience",
    },
    {
      id: 8,
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/10/Colorful-Photo-Animal-Kids-Toys-Promot-Deals-Card-600x426.png",
      title: "A Complete Guide on Data Science Syllabus | 2024",
      description: "By Archana",
      date: " 14 Dec, 2023  No Comments",
      head: "datascience",
    },
    {
      id: 9,
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/02/2.-AI-vs-ML-vs-Data-Science_-1536x804.png",
      title: "AI vs ML vs Data Science: What Should You Learn In 2024?",
      description: "By Archana",
      date: "14 Dec, 2023  No Comments",
      head: "datascience",
    },
    {
      id: 10,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      description: "By Jaishree Tomar",
      date: "04 Dec, 2023  13 Min Read",
      head: "cyber",
    },
    {
      id: 11,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      description: "By Srinithi Sankar",
      date: "14 Nov, 2023  12 Min Read",
      head: "cyber",
    },
    {
      id: 12,
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      description: "By Meghana D",
      date: "26 Oct, 2023  24 Min Read",
      head: "cyber",
    },
    {
      id: 13,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/javascript_frontend_roadmap.webp",
      title: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      description: "By Isha Sharma",
      date: "21 Feb, 2024  28 Min Read",
      head: "career",
    },
    {
      id: 14,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn.webp",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      description: "By Saakshi Priyadarshini",
      date: "20 Feb, 2024  29 Min Read",
      head: "career",
    },
    {
      id: 15,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/roles_and_responsibilities_of_full_stack_developer_1x.webp",
      title:
        "Best-Known Roles & Responsibilities of Full Stack Developers in 2024",
      description: "By Isha Sharma",
      date: "12 Feb, 2024  22 Min Read",
      head: "career",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<All carditems={carditems}></All>} />
          <Route
            path="/fullstack"
            element={<Fullstack carditems={carditems}></Fullstack>}
          />
          <Route
            path="/datascience"
            element={<Datascience carditems={carditems}></Datascience>}
          />
          <Route
            path="/cyber"
            element={<Cyber carditems={carditems}></Cyber>}
          />
          <Route
            path="/career"
            element={<Career carditems={carditems}></Career>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
