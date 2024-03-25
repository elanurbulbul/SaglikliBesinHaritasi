import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { pages } from "./data";
import { socialMedia } from "./data";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer>
      <BottomNavigation
        sx={{ bgcolor: "#996666" }}
        value={value}
        onChange={handleChange}
      >
        {pages.map((page) => (
          <MenuItem key={page.id} onClick={handleChange}>
            <Typography sx={{ color: "inherit", textDecoration: "none" }}>
              <Link href={page.link} sx={{ my: 5, color: "white" }}>
                {page.text}
              </Link>
            </Typography>
          </MenuItem>
        ))}
      </BottomNavigation>
      <BottomNavigation sx={{ bgcolor: "#996666" }}>
        {socialMedia.map((page) => (
          <MenuItem key={page.id} onClick={handleChange}>
            <Typography>
              <Link href={page.url} sx={{ my: 5, color: "white" }}>
                {page.icon}
              </Link>
            </Typography>
          </MenuItem>
        ))}
      </BottomNavigation>
    </footer>
  );
}
