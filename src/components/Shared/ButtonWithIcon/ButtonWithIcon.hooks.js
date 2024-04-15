const { useMemo } = require('react');

const useButtonWithIcon = ({ variant, size, mode }) => {
  const variants = useMemo(() => {
    switch (variant) {
      case 'success':
        return {
          backgroundColor: '#4caf50',
          borderColor: '#4caf50',
          color: 'white',
        };
      case 'warning':
        return {
          backgroundColor: '#ff9800',
          borderColor: '#ff9800',
          color: 'white',
        };
      case 'danger':
        return {
          backgroundColor: '#f44336',
          borderColor: '#f44336',
          color: 'white',
        };

      default:
        return {
          backgroundColor: '#4caf50',
          borderColor: '#4caf50',
          color: 'white',
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
          fontSize: 12,
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
          backgroundColor: variants.backgroundColor,
          borderColor: variants.borderColor,
          color: variants.color,
        };
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          borderColor: variants.borderColor,
          color: variants.backgroundColor,
        };
      default:
        return {
          backgroundColor: variants.backgroundColor,
          borderColor: variants.borderColor,
          color: variants.color,
        };
    }
  }, [mode]);
  return {
    variants,
    sizes,
    modes
  };
};

export default useButtonWithIcon;
