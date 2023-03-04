import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Box, { BoxProps } from "../Box";

interface ModalProps extends BoxProps {
  show: boolean;
  children: React.ReactNode;
}

const Modal = ({ show, children, className, ...props }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    show
      ? document.body.classList.add("modal-show")
      : document.body.classList.remove("modal-show");
  }, [show]);

  const modalContent = show ? (
    <Box className="modal-overlay">
      <Box {...props} className={`modal${className ? ` ${className}` : ""}`}>
        {children}
      </Box>
    </Box>
  ) : null;

  return isBrowser
    ? createPortal(
        modalContent,
        document.getElementById("modal-root") as Element
      )
    : null;
};

export default Modal;
