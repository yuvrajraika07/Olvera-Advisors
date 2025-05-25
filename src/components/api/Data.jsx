import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import howards from "../../assets/images/howards.png";
import commonwealth from "../../assets/images/commonwealth.png";
import ellery from "../../assets/images/ELLERY_LOGO.png";
import gingerSmart from "../../assets/images/GINGERANDSMART_HI_RES_LOGO.png";

const navInfo = [
  { href: "#Home", label: "Home" },
  { href: "#AboutUs", label: "About us" },
  { href: "#Services", label: "Our Services" },
  { href: "#Careers", label: "Our Experience" },
  { href: "#Testimonials", label: "Resources" },
];

const navSocialIcons = [
  {
    href: "https://www.facebook.com/",
    icon: <BsFacebook size={25} />,
  },
  {
    href: "https://www.instagram.com/0_james_0/",
    icon: <BsInstagram size={25} />,
  },
  {
    href: "https://www.linkedin.com/in/yuvrajkhatanaraika01/",
    icon: <BsLinkedin size={25} />,
  },
];

const aboutImages = [
  {
    logo: howards,
    name: "Howards",
  },
  {
    logo: commonwealth,
    name: "Commonwealth Bank",
  },
  {
    logo: ellery,
    name: "Ellery",
  },
  {
    logo: gingerSmart,
    name: "GingerAndSmart",
  },
];

const servicesTotalData = [
  {
    totalCount: "150+",
    name: "Projects",
  },
  {
    totalCount: "80+",
    name: "Clients",
  },
  {
    totalCount: "200+",
    name: "Professionals",
  },
  {
    totalCount: "97%",
    name: "Clients",
  },
];

const services = [
  {
    id: "",
    name: "Sustainability",
  },
  {
    id: "02",
    name: "Small Business",
  },
  {
    id: "03",
    name: "Forensic Services",
  },
  {
    id: "04",
    name: "Risk Management",
  },
  {
    id: "05",
    name: "CFO Advisory",
  },
];

export { navInfo, navSocialIcons, aboutImages, servicesTotalData, services };
