import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

/**
 * Use to create portal, for purpose to keep order on rendering template on the root element.
 * For more information you can check your navigator console in element section when you attach some element.
 * Example: like with modal when it's active
 */
const Portal: React.FC<PortalProps> = ({ children }) =>
  ReactDOM.createPortal(children, document.body);

export default Portal;
