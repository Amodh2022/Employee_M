import { IconType } from "react-icons";
import { HiPlus } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GrStatusUnknown } from "react-icons/gr";
import { GoChevronDown } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";

const icons = new Map<string, IconType>([
  ["plus", HiPlus],
  ["dashboard", MdDashboard],
  ["personList", BsFillPersonLinesFill],
  ["downArrow", GoChevronDown],
  ["group", FaUsers],
  ["signOut", BiLogIn],
]);

export const getIcon = (name: string) => {
  return icons.get(name) || GrStatusUnknown;
};
