declare module 'react-bootstrap/Modal' {
  import { FC, ReactNode } from 'react';

  interface ModalProps {
    show: boolean;
    onHide: () => void;
    centered?: boolean;
    children: ReactNode;
  }

  interface ModalHeaderProps {
    children: ReactNode;
  }

  interface ModalTitleProps {
    children: ReactNode;
  }

  interface ModalBodyProps {
    children: ReactNode;
  }

  interface ModalFooterProps {
    children: ReactNode;
  }

  const Modal: FC<ModalProps> & {
    Header: FC<ModalHeaderProps>;
    Title: FC<ModalTitleProps>;
    Body: FC<ModalBodyProps>;
    Footer: FC<ModalFooterProps>;
  };

  export default Modal;
}
