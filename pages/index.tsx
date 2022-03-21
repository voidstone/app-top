import { useEffect, useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("Counter " + counter);
  });

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
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
      <Rating rating={2} />
    </>
  );
}
