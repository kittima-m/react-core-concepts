import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";
import TabButton from "../TabButton/TabButton";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelectExample(selectedButton) {
    // selectedButton => 'components', 'jsx','props','state'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          ButtonsContainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelectExample("components")}
                label="Components"
              ></TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelectExample("jsx")}
                label="JSX"
              ></TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelectExample("props")}
                label="Props"
              ></TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelectExample("state")}
                label="State"
              ></TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
