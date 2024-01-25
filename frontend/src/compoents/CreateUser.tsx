"use client";
import React from "react";

const CreateUser = () => {
  const handleCreateUser = () => {
    const name = Math.random().toString();
    const email = Math.random().toString() + "email@gmail.com";
    (async () => {
      const rawResponse = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      const content = await rawResponse.json();
      console.log(content);
    })();
  };
  return <button onClick={() => handleCreateUser()}>CreateUser</button>;
};

export { CreateUser };
