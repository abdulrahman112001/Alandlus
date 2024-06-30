import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { FaBars } from "react-icons/fa6";

export default function MainDrawer() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link href="/" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="الرئيسية"
                className={` text-[#0F2239] text-start cursor-pointer font-[800] text-[18px] ${
                  router.pathname === "/" ? "text-blue-500" : ""
                }`}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/places" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="اعمالنا"
                className={` text-[#0F2239] text-start  cursor-pointer font-[800] text-[18px] ${
                  router.pathname === "/places" ? "text-blue-500" : ""
                }`}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/aboutUs" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="من نحن"
                className={` text-[#0F2239] text-start  cursor-pointer font-[800] text-[18px] ${
                  router.pathname === "/aboutUs" ? "text-blue-500" : ""
                }`}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/privacyPolicy" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="السياسة والخصوصية"
                className={` text-[#0F2239] text-start  cursor-pointer font-[800] text-[18px] ${
                  router.pathname === "/privacyPolicy" ? "text-blue-500" : ""
                }`}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/termsConditions" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="الشروط والاحكام"
                className={` text-[#0F2239] text-start  cursor-pointer font-[800] text-[18px] ${
                  router.pathname === "/termsConditions" ? "text-blue-500" : ""
                }`}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/contactUs" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="تواصل معنا"
                className={` text-[#0F2239] text-start  cursor-pointer font-[800] text-[18px] ${
                  router.pathname === "/contactUs" ? "text-blue-500" : ""
                }`}
              />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div className="w-full flex justify-end">
      <Button
        onClick={toggleDrawer(true)}
        className="w-[40px] h-[40px] my-[10px] bg-[#0d5ef4] text-white text-[20px] rounded-none"
      >
        <FaBars />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
