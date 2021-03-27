import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";

function App() {
  const [surveyJSON, setsurveyJSON] = useState(null);

  useEffect(() => {
    window.addEventListener("message", function (data) {
      console.log(JSON.parse(data.data));
      setsurveyJSON(JSON.parse(data.data));
    });
  }, []);

  return (
    <div>
      <Survey.Survey
        json={JSON.stringify(surveyJSON)}
        onComplete={() => console.log("submit")}
      />
    </div>
  );
}

export default App;
