import { Home, Info, Users, Phone, History, MessageCircle } from "lucide-react";

export const Menus = [
  {
    name: "Home",
    desc: "Return to the homepage.",
    icon: Home,
    link: "/",
  },
  {
    name: "About Us",
    desc: "Learn more about our company.",
    icon: Info,
    link: "/about-us",
  },
  {
    name: "Our Team",
    desc: "Meet our team of professionals.",
    icon: Users,
    link: "/our-team",
  },
  {
    name: "Contact Us",
    desc: "Get in touch with us.",
    icon: Phone,
    link: "/contact-us",
  },
  {
    name: "Trade History",
    desc: "View your trade history.",
    icon: History,
    link: "/trade-history",
  },
  {
    name: "Testimonials",
    desc: "Testimony from students.",
    icon: MessageCircle, 
    link: "/testimonials",
  },
];
