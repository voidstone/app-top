import React from "react";
import { Htag, Button, P, Tag } from "../components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">text of Title</Htag>
      <Button appearance="primary" arrow="right">
        Нажми плз
      </Button>
      <Button appearance="ghost" arrow="right">
        Нажми плз
      </Button>
      <P size="s">fdfefe</P>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag size="s" color="red">
        red
      </Tag>
      <Tag size="s" color="ghost">
        ghost
      </Tag>
    </div>
  );
}
