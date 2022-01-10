import React from 'react';
import { ToastContainerProps } from '../../interfaces';

const ToastContainer: React.FC<ToastContainerProps> = (props) => {
  const { position } = props;
  console.log('position', position);
  return (
    <div>
      <h2>Toast Container</h2>
    </div>
  );
};

ToastContainer.defaultProps = {
  position: 'top-right',
};

export default ToastContainer;
