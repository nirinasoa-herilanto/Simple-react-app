import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
  markupTo: HTMLElement;
}

/**
 * Use to create portal, for purpose to keep order on rendering template on the root element.
 * For more information you can check your navigator console in element section when you attach some element.
 * Example: like with modal when it's active
 */
const Portal: React.FC<PortalProps> = ({ children, markupTo }) =>
  ReactDOM.createPortal(children, markupTo);

export default Portal;
