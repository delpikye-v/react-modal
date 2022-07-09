import React from "react";
import "./styles.scss";
interface IReactPortalProps {
    children: React.ReactNode;
    id?: string;
}
declare const ReactPortal: React.FC<IReactPortalProps>;
export interface IModalProps {
    children: React.ReactNode;
    id?: string;
    modalId?: string;
    isOpen: boolean;
    center?: boolean;
    className?: string;
    tabIndex?: number;
    showHeader?: boolean;
    showFooter?: boolean;
    modalTitle?: string | React.ReactNode;
    modalHeader?: string | React.ReactNode;
    modalFooter?: string | React.ReactNode;
    custimizeXClose?: string | React.ReactNode;
    showExtraButton?: boolean;
    showAcceptButton?: boolean;
    showCancelButton?: boolean;
    showXClose?: boolean;
    escapeClose?: boolean;
    toggleTitleExpand?: boolean;
    fullSceen?: boolean;
    classNameAccept?: string;
    classNameCancel?: string;
    classNameExtra?: string;
    labelAccept?: string;
    labelCancel?: string;
    labelExtra?: string;
    handleToggle?: (toggle: boolean) => any;
    handleAccept?: () => any;
    handleCancel?: () => any;
    hanldeXClose?: () => any;
    handleExtra?: () => any;
    handleOpen: (isOpen: boolean) => any;
}
declare const Modal: React.FC<IModalProps>;
export { ReactPortal };
export default Modal;
