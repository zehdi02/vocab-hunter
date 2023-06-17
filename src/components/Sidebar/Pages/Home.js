import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import JSONPretty from "react-json-pretty";

function Home() {
  const {user} = useAuth0();

  return (
    <div className="HOME">
    </div>
  );
}

export default Home;
