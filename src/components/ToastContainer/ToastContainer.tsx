import React from 'react';
import { AnimationTypes, Theme, ToastPosition } from '../../types';

export interface ToastContainerProps {
  position: ToastPosition;
  autoClose: boolean;
  autoCloseDelay: number;
  showIcons: boolean;
  theme: Theme;
  animation: AnimationTypes;
  showLastOnTop: boolean;
}

const ToastContainer: React.FC<ToastContainerProps> = (props) => {
  return (
    <div>
      <h2>Toast Container</h2>
    </div>
  );
};

ToastContainer.defaultProps = {
  position: 'top-right',
  autoClose: true,
  autoCloseDelay: 10000,
  showIcons: false,
  theme: 'dark',
  showLastOnTop: false,
};

export default ToastContainer;
