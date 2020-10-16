import styled from "styled-components";

const Styles = (View: any) => styled(View)`
  height: 100%;
  width: 100%;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export default Styles;
