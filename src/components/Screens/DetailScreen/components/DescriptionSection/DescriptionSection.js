import Typography from '@components/Shared/Typography/Typography';
import VStack from '@components/Shared/VStack';
import { DataTable } from 'react-native-paper';

export default function DescriptionSection({ data }) {
  return (
    <VStack gap="10px">
      <Typography size="medium" weight="bold">
        Deskripsi & Spesifikasi
      </Typography>
      <Typography size="medium" weight="light" color="secondary">
        {data?.description}
      </Typography>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            <Typography size="medium" weight="bold">
              Spesifikasi
            </Typography>
          </DataTable.Title>
        </DataTable.Header>

        {data?.specifications?.map((item) => (
          <DataTable.Row>
            <DataTable.Cell>{item?.title}</DataTable.Cell>
            <DataTable.Cell>{item?.description}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </VStack>
  );
}
