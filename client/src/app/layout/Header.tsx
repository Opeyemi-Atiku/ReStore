import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void
}

export default function Header({darkMode, setDarkMode}: Props) {

    function handleChange() {
        setDarkMode(!darkMode)
    }

    return (
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6">RE-STORE</Typography>
          <Switch
            checked={darkMode}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Toolbar>
      </AppBar>
    );
}