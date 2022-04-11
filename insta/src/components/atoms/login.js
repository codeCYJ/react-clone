import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 40px;
`;
export const Title = styled.div`
  background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png");
  height: 51px;
  width: 175px;
  background-size: 440px 411px;
  background-position: 0 -129px;
  margin: ${({ props }) =>
    props === "login" ? "38px auto 12px" : "22px auto 12px"};
`;
export const LoginBtn = styled.a`
  background-color: #0095f6;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  padding: 6px 9px;
  color: white;
  font-size: 14px;
  line-height: 18px;
  margin: 8px 0;
`;
export const SignInInput = styled.input`
  font-size: 12px;
  background-color: #fafafa;
  padding: 9px 0 7px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  line-height: 18px;
  margin-bottom: 6px;
`;
