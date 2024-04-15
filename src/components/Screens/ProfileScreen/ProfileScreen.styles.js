const { Icon, Avatar, Divider } = require('react-native-paper');
const { default: styled } = require('styled-components/native');

const IconButton = styled(Icon)`
  position: absolute;
  right: 10px;
`;

const ProfileImage = styled(Avatar.Image)`
  align-self: center;
  margin-top: 20px;
`;

const LineDivider = styled(Divider)`
  ${(props) =>
    props.marginVertical && `margin-vertical: ${props.marginVertical}px`}
`;

export { IconButton, LineDivider, ProfileImage };
