import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { Layout, withLayout } from "../layout/Layout";

function Home() {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
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
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
