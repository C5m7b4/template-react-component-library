import React from 'react';
import { AnimationTypes, Theme, ToastPosition } from '../../types';

export interface ToastContainerProps {
  position: ToastPosition;
}

const ToastContainer: React.FC<ToastContainerProps> = (props) => {
  const { position } = props;
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
