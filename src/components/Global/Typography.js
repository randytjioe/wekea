import styled from 'styled-components/native';

const Typography = styled.Text`
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '16px';
      case 'large':
        return '20px';
      case 'xlarge':
        return '24px';
      case 'title':
        return '32px';
      default:
        return '16px';
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return '#007bff';
      case 'secondary':
        return '#6c757d';
      case 'text':
        return '#0C0D34';
      case 'white':
        return '#FFFFFF';
      default:
        return '#0C0D34';
    }
  }};

  text-align: ${(props) => (props.align ? props.align : 'left')};

  font-weight: ${(props) => {
    switch (props.weight) {
      case 'title':
        return '700';
      case 'bold':
        return '600';
      case 'medium':
        return '500';
      case 'normal':
        return '400';
      case 'light':
        return '300';
      default:
        return '400';
    }
  }};

  font-family: ${(props) => {
    switch (props.weight) {
      case 'title':
        return 'Nunito_700Bold';
      case 'bold':
        return 'Nunito_600SemiBold';
      case 'medium':
        return 'Nunito_500Medium';
      case 'normal':
        return 'Nunito_400Regular';
      case 'light':
        return 'Nunito_300Light';
      default:
        return 'Nunito_400Regular';
    }
  }};

  ${(props) => props.lineThrough && 'text-decoration:line-through'}

  ${(props) => props.minWidth && `min-width: ${props.minWidth}`};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${(props) => props.minHeight && `min-height: ${props.minHeight}`};
  ${(props) => props.maxHeight && `max-height: ${props.maxHeight}`};

  ${(props) => props.flex && `flex: ${props.flex}`};
`;

export default Typography;
