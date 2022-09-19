/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    padding: "0px",
    height: "8px",
    radius: "4px",
  },
  medium: {
    padding: "0px",
    height: "12px",
    radius: "4px",
  },
  large: {
    padding: "4px",
    height: "24px",
    radius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--height": SIZES[size].height,
        "--padding": SIZES[size].padding,
        "--radius": SIZES[size].radius,
      }}
    >
      <LineContainer>
        <Line style={{ "--value": value + "%" }} />
      </LineContainer>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  width: 370px;

  padding: var(--padding);

  overflow: hidden;
  border-radius: var(--radius);

  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
`;

const LineContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--value);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
