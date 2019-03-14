import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.section `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const loader = keyframes `
  from { letter-spacing: -1px; }
  to { letter-spacing: 15px; }
`;

const Banner = styled.h2 `
  position: relative;
  padding: 10px 20px;
  animation: ${loader} 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;

  &::before {
    content: ';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transform: skewX(-15deg);
    background-color: #eee;
  }
`;

const SubBanner = styled.div `
  width: 60px;
  height: 100%;
  position: absolute;
  z-index: -2;
  bottom: -30%;
  transform: skewX(-15deg);
  background-color: #ccc;
`;

const subBannerLeft = keyframes `
  from { right: 82%; }
  to { right: 90%; }
`;

const LeftBanner = styled(SubBanner)`
  animation: ${subBannerLeft} 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;

  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -1px;
    left: -1px;
    border: 22px solid;
    border-color: transparent;
    border-left-color: #18506F
  }
`;

const subBannerRight = keyframes `
  from { left: 82% }
  to { left: 90% }
`;

const RightBanner = styled(SubBanner)`
  animation: ${subBannerRight} 1s cubic-bezier(0.5, 0.1, 0.15, 1) alternate infinite;

  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -1px;
    right: -1px;
    border: 22px solid;
    border-color: transparent;
    border-right-color: #18506F
  }
`;

export default function Loading() {
  return (
    <Container>
      <Banner>LOADING
        <LeftBanner></LeftBanner>
        <RightBanner></RightBanner>
      </Banner>
    </Container>
  );
}
