import React from "react";
import styled from "styled-components";
import { unit } from "../../Theme";

const Spacing = ({
  children,
  top,
  left,
  right,
  bottom,
  vertical,
  horizontal,
}) => {
  const computedTop = top ? top : vertical;
  const computedBottom = bottom ? bottom : vertical;
  const computedLeft = left ? left : horizontal;
  const computedRight = right ? right : horizontal;

  const style = {
    ...(computedTop && { marginTop: computedTop * unit }),
    ...(computedBottom && { marginBottom: computedBottom * unit }),
    ...(computedLeft && { marginLeft: computedLeft * unit }),
    ...(computedRight && { marginRight: computedRight * unit }),
  };

  return <Wrapper style={style}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  flex: 1;
`;

export default Spacing;
