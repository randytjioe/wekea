import { useMemo } from 'react';

const useBadge = ({ variant, size, mode }) => {
  const variants = useMemo(() => {
    switch (variant) {
      case 'success':
        return {
          color: '#4caf50',
          borderColor: '#4caf50',
        };
      case 'warning':
        return {
          color: '#ff9800',
          borderColor: '#ff9800',
        };
      case 'danger':
        return {
          color: '#f44336',
          borderColor: '#f44336',
        };
      default:
        return {
          color: '#4caf50',
          borderColor: '#4caf50',
        };
    }
  }, [variant]);

  const sizes = useMemo(() => {
    switch (size) {
      case 'sm':
        return {
          padding: 1,
          paddingHorizontal: 4,
          fontSize: 10,
        };
      case 'md':
        return {
          padding: 2,
          paddingHorizontal: 6,
          forntSize: 12,
        };
      case 'lg':
        return {
          padding: 3,
          paddingHorizontal: 8,
          fontSize: 14,
        };
      default:
        return {
          padding: 2,
          paddingHorizontal: 6,
          fontSize: 12,
        };
    }
  }, [size]);

  const modes = useMemo(() => {
    switch (mode) {
      case 'contained':
        return {
          backgroundColor: variants.color,
          color: '#fff',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: variants.color,
        };
      default:
        return {
          backgroundColor: 'transparent',
          color: variants.color,
        };
    }
  }, [mode]);
  return {
    variants,
    sizes,
    modes,
  };
};

export default useBadge;
