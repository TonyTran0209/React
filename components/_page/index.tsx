"use client";
import { Card } from "../card";
import styles from "./page.module.css";
import { InputTransparent } from "../input-transparent";
import { Typography } from "../typography";
import { Button } from "../button";
import { LinkWithBorder } from "../link-with-border";
import { Counter } from "../counter";

export const Page = () => {
  return (
    <div className={styles.page}>
      <Card title="The Hello">
        <Typography spacingBottom="3" fontSize="40" color="black">
          Welcome!
        </Typography>
        <Typography spacingBottom="3" fontSize="20" color="grey-1">
          My goal for today:
        </Typography>
        <InputTransparent />
        <div className={styles.buttonRow}>
          <Button label="Visit website" />
        </div>
      </Card>

      <Card title="The Linklist" backgroundColoring="brightRed">
        <LinkWithBorder label="JIRA" href="https://www.google.com" />
        <LinkWithBorder label="Confluence" href="https://www.google.com" />
        <LinkWithBorder label="Gitlab" href="https://www.google.com" />
        <LinkWithBorder label="Shopmacher Website" href="https://www.google.com" />
      </Card>

      <Card title="The Linklist" backgroundColoring="white">
        <Counter />
      </Card>

      <Card title="The Time" backgroundColoring="red">
        The Time
      </Card>
    </div>
  );
};
