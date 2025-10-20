import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import View from "./view/View";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [selectedQuestionnaire, setSelectedQuestionnaire] = useState(null);

  return (
    <div className="app">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <View
        activeSection={activeSection}
        selectedQuestionnaire={selectedQuestionnaire}
        onSelectQuestionnaire={setSelectedQuestionnaire}
      />
    </div>
  );
}

export default App;
