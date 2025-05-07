import {
  action1,
  action2,
  techno1,
  techno2,
  techno3,
  techno4,
  card1,
  card2,
  card3,
  card4,
  img1,
  img2,
  img3,
  img4,
  bussiniess1,
  bussiniess2,
  loaction,
  audio,
  mail,
} from "../assets/images";
// import {
//   about1,
//   about2,
//   person1,
//   person2,
//   team1,
//   team2,
//   team3,
//   team4,
//   team5,
//   team6,
// } from "../assets/images";
import kenaImages from "../assets/images/ken42-logo-1-final.svg";
import optimile from "../assets/images/optimile-logo-1.svg";
import pinchine from "../assets/images/pichain-1.svg";
import tsbridge from "../assets/images/ts-bridge-logo.svg";

export const LINKS = [
  { href: "#Home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#Solution", label: "Solution" },
  { href: "#Feature", label: "Feature" },
  { href: "#contact", label: "Contact" },
];
export const COMPANY_LOGOS = [
  { src: tsbridge, alt: "TS Bridge Logo" },
  { src: pinchine, alt: "Pinchine Logo" },
  { src: kenaImages, alt: "Kena Images Logo" },
  { src: optimile, alt: "Optimile Logo" },
];

export const cards = [
  {
    src: action2,
    alt: "TS Bridge Logo",
    title: "Revolutionized Kenverse’s AI capabilities in just 6 months",
    description:
      "From concept to deployment, T²C engineered an AI transformation that positioned Kenverse as a market leader.",
  },
  {
    src: action1,
    alt: "TS Bridge Logo",
    title: "Transformed Optimile into a seamless logistics powerhouse",
    description:
      "Reimagined and redefined by T²C, Optimile now sets the standard for seamless logistics.",
  },
];

export const Technology = [
  {
    src: techno4,
    alt: "TS Bridge Logo",
    title: "TurboSend",
    description:
      "Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.",
  },
  {
    src: techno1,
    alt: "TS Bridge Logo",
    title: "TurboAuth ",
    description:
      "From Google to OAuth, we integrate every major SSO option, ensuring secure, seamless access for all users.",
  },
  {
    src: techno2,
    alt: "TS Bridge Logo",
    title: "TurboStream",
    description:
      "Deliver video content without lag or interruptions. TurboStream powers your platform with flawless video performance.",
  },
  {
    src: techno3,
    alt: "TS Bridge Logo",
    title: "TurboCloud",
    description:
      "Monitor, optimize, and scale your cloud infrastructure effortlessly. TurboCloud ensures your system runs at peak efficiency.",
  },
];
export const WhyWeCard = [
  {
    icon: img1,
    title: "Tech & Talent Unified",
    description:
      "We turn concepts into fully scalable products that are engineered for success - no matter the industry.",
    src: card1,
    alt: "card1",
  },
  {
    icon: img2,
    title: "Scale Right, Scale Fast",
    description:
      " Harness the power of AI from day one. Our AI-driven solutions ensure you’re always one step ahead.",
    src: card2,
    alt: "card2",
  },
  {
    icon: img3,
    title: "AI-Powered Innovation",
    description:
      "Turbocharge your tech stack with accelerators designed to optimize speed, efficiency, and reliability.",
    src: card3,
    alt: "card3",
  },
  {
    icon: img4,
    title: "Supercharge Your Product",
    description:
      "Access every technology, every skill set, and every tool - fully integrated and ready to execute.",
    src: card4,
    alt: "card4",
  },
];

export const businessCards = [
  {
    title: "Plug and Play Solutions",
    heading: "Instant Integration, Immediate Impact:",
    description:
      "Dive into the market without delay, utilizing our fully integrated tech stack that meshes seamlessly with your operations.",
    src: bussiniess1,
    alt: "card4",
    btnText: "Accelerate with plug & play",
  },
  {
    title: "Customizable Solutions",
    heading:
      "Customizable solutions designed for your business's unique demands & growth trajectory.",
    description:
      "Build, Expand:Engineered for long-term evolution, these solutions ensure your technology infrastructure grows as dynamically as your business.",
    src: bussiniess2,
    alt: "card4",
    btnText: "Customize your Path",
  },
];

export const testimonialCard = [
  {
    description:
      "“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”",
    name: "Ganesh Iyer",
    company: "Eyemyeye",
  },
  {
    description:
      "“We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It’s like having a powerhouse tech team on demand.”",
    name: "Yaser Mohammed",
    company: "PiChain",
  },
  {
    description:
      "“Partnering with T²C was a game-changer. Their accelerators, like TurboStream, optimized our video streaming capabilities, helping us deliver a flawless user experience. They didn’t just meet our expectations they redefined what’s possible in tech collaboration.”",
    name: "Jaykanth Raj",
    company: "Stealth Mode Startup",
  },
];

export const contactCard = [
  {
    icon: loaction,
    title: "Location",
    description:
      "Turbostart Technology Development Centre Pvt Ltd CIN: U72900TZ2022PTC029746 Address: 1st Floor, Mayflower Valencia, Avinashi Road, Coimbatore - 641004, TN, IN",
  },
  {
    icon: audio,
    title: "Contact Number",
    description: "+91 7598 443 162",
  },
  {
    icon: mail,
    title: "Email Address",
    description: "t2c@tsquaredc.com",
  },
];

// export const about_section = [
//   {
//     title: "OUR APPROACH",
//     heading: "What we want   to achieve",
//     description:
//       "At T2C, our goal is to redefine the boundaries of what technology can do for businesses globally. We are dedicated to crafting solutions that combine not only innovative but also robust enough to handle the dynamic needs of modern enterprises. We focus on seamless integration and strategic innovation, so your business can operate more efficiently and grow without limits.",
//     scr: about1,
//     alt: "about_img",
//   },
//   {
//     title: "OUR MISSION",
//     heading: "Why that's importantto us",
//     description:
//       "Our mission at T2C is to empower businesses to excel in a digital-first world. We're passionate about making complex systems simple and accessible to solve complex challenges and unlock new opportunities. This belief drives us to deliver high-performance, scalable solutions that prioritize customer success. At T2C, we create value that contributes to sustainable, long-term growth for every partner we serve.",
//     scr: about2,
//     alt: "about_img",
//   },
// ];

// export const advisor = [
//   {
//     name: "Venkat Raju",
//     description:
//       "Venkat Raju brings deep expertise in programming, data communications, service delivery, and product development at global tech and telecom firms. He is well versed with digital transformation, technology architecture, innovation, and value-added network solutions across industries.",
//     scr: person1,
//     alt: "Person_img",
//   },
//   {
//     name: "Ganesh Raju K",
//     description:
//       "Ganesh Raju’s keen interest in technology drives his efforts to foster innovation and support aspiring entrepreneurs. With nearly two decades of experience at PwC India, he brings strategic depth to advancing tech-driven solutions. His commitment to continuous learning shapes the future of entrepreneurship and education.        ",
//     scr: person2,
//     alt: "Person_img",
//   },
//   {
//     name: "Rajagopal Koushik",
//     description:
//       "Koushik Rajagopal is a technology-driven leader with 15+ years of expertise in IT infrastructure, information security, and disaster recovery. His innovative approach ensures smooth business continuity and operational excellence.",
//     scr: person1,
//     alt: "Person_img",
//   },
// ];

// export const Team = [
//   {
//     name: "Rajagopal Koushik",
//     role: "Product Lead",
//     scr: team1,
//     alt: "team_img",
//   },
//   {
//     name: "Ravindra Pai",
//     role: "Vice President",
//     scr: team2,
//     alt: "team_img",
//   },
//   {
//     name: "Gokul Sundar",
//     role: "Solution Architect",
//     scr: team3,
//     alt: "team_img",
//   },
//   {
//     name: "Jeevankur Talukdar",
//     role: "AI Lead",
//     scr: team4,
//     alt: "team_img",
//   },
//   {
//     name: "Raktim Bharatee",
//     role: "Senior Tech Lead",
//     scr: team5,
//     alt: "team_img",
//   },
//   {
//     name: "Govardhana Kemmathirumar ",
//     role: "Salesforce Lead",
//     scr: team6,
//     alt: "team_img",
//   },
// ];
