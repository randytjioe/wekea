import { Animated } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const { default: styled } = require('styled-components/native');

const BulletCardWrapper = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  z-index: 100;
  align-self: center;
  margin-bottom: 20px;
`;

const BulletCardItem = styled(Animated.View)`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: #eee;
  margin-horizontal: 5px;
`;
const ImageItem = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const BackButton = styled(Ionicons)`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
`;

export { BackButton, BulletCardItem, BulletCardWrapper, ImageItem };
