import { List } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';
import HStack from '@components/Shared/HStack/HStack';
import Typography from '@components/Shared/Typography/Typography';
import VStack from '@components/Shared/VStack';

export default function ReviewSection({ data }) {
  return (
    <VStack gap="5px">
      <HStack justify="space-between" align="center">
        <Typography size="large" weight="bold">
          Ulasan
        </Typography>
        <Typography>Lihat Semua</Typography>
      </HStack>
      <List.Section>
        {data.reviews?.map((item) => (
          <List.Item
            style={{
              borderRadius: 10,
              padding: 10,
              marginVertical: 5,
              borderWidth: 0.4,
            }}
            title={item.name}
            description={item.review}
            left={() => <List.Image source={{ uri: item.image }} />}
            right={() => (
              <HStack gap="5px">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starColor = index < data.averageRating ? '#FFc700' : '#6c757d';
                  return <Ionicons name="star" size={20} color={starColor} />;
                })}
              </HStack>
            )}
          />
        ))}
      </List.Section>
    </VStack>
  );
}
