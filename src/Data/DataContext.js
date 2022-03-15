import React from "react";
import { createContext, useState } from "react";
import App from "../App";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [user, setUser] = useState({
    message: "",
    data: [
      {
        id: 0,
        name: "Null",
        phone: "Null",
        email: "Null",
      },
    ],
  });

  const [experience, setExperience] = useState({
    message: "",
    num: 0,
    data: [{}],
  });
  const [education, setEducation] = useState({
    message: "",
    num: 0,
    data: [{}],
  });

  const [eduaction, setEduaction] = useState({
    message: "",
    num: 0,
    data: [{}],
  });

  const [skill, setSkill] = useState({
    message: "",
    num: 0,
    data: [{}],
  });
  const [useredit, setUseredit] = useState({
    id: 0,
    name: "Null",
  });
  const [token, setToken] = useState("token");
  return (
    <DataContext.Provider
      value={[
        user,
        setUser,
        experience,
        setExperience,
        education,
        setEducation,
        skill,
        setSkill,
        token,
        setToken,
        useredit,
        setUseredit,
      ]}
    >
      <App />
    </DataContext.Provider>
  );
};
