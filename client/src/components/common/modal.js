import React from "react";
import ContainerModal from "./modal.style";
import Backdrop from "@material-ui/core/Backdrop";

const ModalCommon = ({ children, ...restProps }) => {
  return (
    <ContainerModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      disableAutoFocus
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      {...restProps}
    >
      {children}
    </ContainerModal>
  );
};

export default ModalCommon;
