import { Bell, Home, Landmark, Mail, Search, User } from "lucide-react";
export const SideBar = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <Search />,
  },
  {
    title: "Notification",
    path: "/notification",
    icon: <Bell />,
  },
  {
    title: "Message",
    path: "/message",
    icon: <Mail />,
  },
  {
    title: "Premium",
    path: "/premium",
    icon: <Landmark />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <User />,
  },
];
