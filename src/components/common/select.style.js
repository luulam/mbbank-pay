import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { spacing } from "theme/index";

export const Container = styled(Select)`
  background: #f2f2f2;
  border-radius: 6px;
  padding: ${spacing[1]};
  padding-left: ${spacing[3]};
  padding-right: ${spacing[3]};
  align-items: center;
  justify-content: center;
  :before {
    display: none;
  }

  :after {
    display: none;
  }

  div:focus {
    background-color: transparent;
  }
`;

export const Item = styled(MenuItem)`
  /* background: red; */
`;
