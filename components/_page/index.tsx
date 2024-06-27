import { Button } from "../button";
import { Card } from "../card";
import { CountEditorWrap } from "../count-editor-wrap";
import { Headline } from "../headline";
import { SpecialInput } from "../special-input";
import styles from "./page.module.css";

export const Page = () => {
  return (
    <div className={styles.page}>
      <div style={{
        marginBottom: "30px"
      }}>
        <Card title="My first title">
          <Headline text="My test headline" />
          <SpecialInput />
          <Button label="Click me" /> 
        </Card>
      </div>
      <div style={{
        marginBottom: "30px"
      }}>
        <Card title="Holiday counter" backgroundColoring="white">
          <CountEditorWrap />
        </Card>
      </div>
    </div>
  );
};
