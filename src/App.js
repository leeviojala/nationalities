import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { ListView } from "./components/ListView";
import { UserCard } from "./components/UserCard";

function App() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUser, setShowUser] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("fi");
  const getData = async (selectedCountry) => {
    const data = await fetch(
      `https://randomuser.me/api?nat=${selectedCountry}&results=5`
    );
    const json = await data.json();
    console.log(json.results);

    setData(json.results);
  };
  const openUserDialog = (user) => {
    setSelectedUser(user);
    setShowUser(true);
  };
  const handleClose = () => {
    setShowUser(false);
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    getData(e.target.value);
  };
  useEffect(() => {
    getData("fi");
  }, []);

  return (
    <Container className="App">
      <Select value={selectedCountry} onChange={(e) => handleCountryChange(e)}>
        <MenuItem value={"fi"}>FI</MenuItem>
        <MenuItem value={"de"}>DE</MenuItem>
        <MenuItem value={"es"}>ES</MenuItem>
        <MenuItem value={"us"}>US</MenuItem>
        <MenuItem value={"au"}>AU</MenuItem>
        <MenuItem value={"dk"}>DK</MenuItem>
        <MenuItem value={"ir"}>IR</MenuItem>
        <MenuItem value={"no"}>NO</MenuItem>
      </Select>
      <ListView users={data} openDialog={openUserDialog}></ListView>
      <Dialog onClose={handleClose} open={showUser}>
        <UserCard user={selectedUser}></UserCard>
      </Dialog>
    </Container>
  );
}

export default App;
