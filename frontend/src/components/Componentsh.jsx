import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    135deg,
    rgba(17, 24, 39, 0.95) 0%,
    rgba(31, 41, 55, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(168, 85, 247, 0.2);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3),
    0 0 100px rgba(236, 72, 153, 0.1);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 580px;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(168, 85, 247, 0.5),
      rgba(236, 72, 153, 0.5),
      transparent
    );
  }
`;

export const Containersm = styled.div`
  background: linear-gradient(
    135deg,
    rgba(17, 24, 39, 0.95) 0%,
    rgba(31, 41, 55, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  border: 2px solid rgba(168, 85, 247, 0.2);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(168, 85, 247, 0.3),
    0 0 80px rgba(236, 72, 153, 0.1);
  position: relative;
  overflow: hidden;
  width: 92%;
  max-width: 100%;
  min-height: 500px;
  z-index: 10;
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  pointer-events: none;
  ${(props) =>
    props.$signingIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    pointer-events: auto;
    `
      : `
    transform: translateX(0);
    `}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  opacity: 1;
  pointer-events: auto;
  ${(props) =>
    props.$signingIn !== true
      ? `
    transform: translateX(100%);
    opacity: 0;
    z-index: 1;
    pointer-events: none;
    `
      : `
    transform: translateX(0);
    `}
`;

export const Form = styled.form`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Formsm = styled.form`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 25px;
  height: 100%;
  text-align: center;
`;

export const title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Input = styled.input`
  background: rgba(39, 39, 42, 0.5);
  border: 2px solid rgba(113, 113, 122, 0.3);
  border-radius: 12px;
  padding: 14px 18px;
  margin: 10px 0;
  width: 100%;
  color: #ffffff;
  font-size: 15px;
  transition: all 0.3s ease;
  outline: none;
  &::placeholder {
    color: rgba(161, 161, 170, 0.6);
  }
  &:focus {
    border-color: #a855f7;
    background: rgba(39, 39, 42, 0.7);
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
  }
`;

export const Inputsm = styled.input`
  background: rgba(39, 39, 42, 0.5);
  border: 2px solid rgba(113, 113, 122, 0.3);
  border-radius: 10px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3s ease;
  outline: none;
  &::placeholder {
    color: rgba(161, 161, 170, 0.6);
  }
  &:focus {
    border-color: #a855f7;
    background: rgba(39, 39, 42, 0.7);
    box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.1);
  }
`;

export const Button = styled.button`
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 48px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
  margin-top: 10px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(147, 51, 234, 0.5);
    background: linear-gradient(135deg, #a855f7 0%, #f472b6 100%);
  }
  &:active {
    transform: translateY(0);
  }
  &:focus {
    outline: none;
  }
`;

export const Buttonsm = styled.button`
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  padding: 12px 40px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4);
  margin-top: 8px;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(147, 51, 234, 0.5);
  }
  &:active {
    transform: translateY(0);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: none;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
    transform: translateY(-2px);
  }
`;

export const Anchor = styled.a`
  color: #a855f7;
  font-size: 13px;
  text-decoration: none;
  margin: 12px 0;
  transition: all 0.3s ease;
  &:hover {
    color: #ec4899;
    text-decoration: underline;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.$signingIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #06b6d4 100%);
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) =>
    props.$signingIn !== true ? `transform: translateX(50%);` : null}

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const OverlayPanelsm = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 8px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.$signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) =>
    props.$signingIn !== true ? `transform: translateX(20%);` : null}
`;

export const LeftOverlayPanelsm = styled(OverlayPanelsm)`
  transform: translateX(-20%);
  ${(props) => (props.$signingIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanelsm = styled(OverlayPanelsm)`
  right: 0;
  transform: translateX(0);
  ${(props) =>
    props.$signingIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 0.3px;
  margin: 20px 0;
  color: rgba(255, 255, 255, 0.9);
`;

export const Paragraphsm = styled.p`
  font-size: 13px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0.3px;
  margin: 15px 0;
  color: rgba(255, 255, 255, 0.9);
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 1px;
`;

export const Titlesm = styled.h1`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
`;

// Components.jsx
