import * as React from "react";
import styled from "styled-components";
import { RecommentCard } from "../ui/common/card/RecommentCard";

const Main = styled.div``;

export const RecommentComponent = () => {
  return (
    <Main>
      <RecommentCard title={""} description={""} imageUrl={""} />
    </Main>
  );
};
