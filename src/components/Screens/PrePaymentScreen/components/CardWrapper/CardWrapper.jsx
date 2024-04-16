import Typography from '@components/Shared/Typography';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const { Content } = Card;

const CardContent = styled(Content)`
    flex-direction : row;
    justify-content : space-between;
    align-items: center;
    padding : 10px;
    border-bottom-color:gray;
    border-bottom-width: 0.3px;
    margin-horizontal : 10px;
`;
export default function CardWrapper({ title, children, rightContent = () => {} }) {
  return (
    <Card style={{ margin: 10, borderRadius: 10, backgroundColor: '#fff' }}>
      <CardContent>
        <Typography size="small" weight="bold">
          {title}
        </Typography>
        {rightContent()}
      </CardContent>
      <View style={{ padding: 10 }}>{children}</View>
    </Card>
  );
}
