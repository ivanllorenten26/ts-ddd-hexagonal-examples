import React, { FC } from "react";
import { Text, Grid } from "@nextui-org/react";
import { Link } from "react-router-dom";

type HeaderMenuProps = {};

const HeaderMenu: FC<HeaderMenuProps> = () => {
  return (
    <div>
      <Grid.Container gap={2} justify="center">
        <Grid xs={8}>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue500 -20%, $pink500 50%",
            }}
            weight="bold"
          >
            <Link to={"/"}>Dash26 Hexagonal TS example</Link>
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <Text
            size={22}
            css={{
              textGradient: "45deg, $blue500 -20%, $blue300 50%",
            }}
            weight="bold"
          >
            <Link to={"/counter"}>Smart Counter example</Link>
          </Text>
        </Grid>
        <Grid xs={4}>
          <Text
            size={22}
            css={{
              textGradient: "45deg, $blue500 -20%, $blue300 50%",
            }}
            weight="bold"
          >
            <Link to={"/books"}>Books API Example</Link>
          </Text>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default HeaderMenu;
