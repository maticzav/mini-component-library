import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--font-size": styles.fontSize + "px",
        "--height": styles.height + "px",
        "--border-thickness": styles.borderThickness + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={1} />
      </IconWrapper>
      <TextInput {...delegated} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  appearance: none;
  -webkit-appearance: none;

  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};

  height: var(--height);
  width: var(--width);

  /* We want to show icon as a square. */
  padding-left: var(--height);

  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
