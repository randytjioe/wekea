import styled from 'styled-components/native';

const StickyBottom = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 6px;
  background-color: #fff;
  border-top: 0.2px solid #eee;
`;

const CheckoutButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-horizontal: 10px;
  flex: 1;
`;

export { CheckoutButton, StickyBottom };
