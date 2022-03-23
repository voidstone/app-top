import { GetStaticProps } from "next";
import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
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

export const getStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem;
  firstCategory: number;
}
