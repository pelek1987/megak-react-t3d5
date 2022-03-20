import { useState, useEffect } from "react";
import { UsersList } from "../UsersList";
import {Button} from "@mui/material";

export const UsersContainer = () => {
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    const response = await fetch("data/users.json");
    const usersData = await response.json();
    setUsers(usersData);
  };

  const handleSortUsers = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if(a.username < b.username) return -1;
      if(a.username > b.username) return 1;
      return 0;
    });
    setUsers(sortedUsers);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
      <>
        <Button onClick={handleSortUsers} variant="outlined">Sort by username</Button>
        <UsersList users={users} />;
      </>
  )
};
