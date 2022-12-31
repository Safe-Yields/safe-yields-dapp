import { Flex, Loader, Table } from '@mantine/core';
import { InfoCard } from 'components/InfoCard';
import { PageContainer } from 'components/PageContainer';
import useMetaMaskSafeTokenBalance from 'hooks/useMetaMaskSafeTokenBalance';
import useSafeTokenPrice from 'hooks/useSafeTokenPrice';
import { AppLayout } from 'layout';
import type { NextPageWithLayout } from 'next';

import useSafeNFTFairPrice from '../hooks/useSafeNFTFairPrice';

const Home: NextPageWithLayout = () => {
  const { data: fairPrice } = useSafeNFTFairPrice();
  return (
    <PageContainer title='Dashboard'>
      <Flex gap={'md'} wrap={'wrap'}>
        <InfoCard header={'Safe Price'}>
          <h1>{useSafeTokenPrice().data ?? <Loader size='lg' color='green' />}</h1>
        </InfoCard>
        <InfoCard header={'Safe NFT Fair Price'}>
          {fairPrice ?
            <Table fontSize={'xl'}  highlightOnHover>
              <thead>
              <tr>
                <th>Tier</th>
                <th>Price</th>
              </tr>
              </thead>
              <tbody>
              {fairPrice.map((price, tier) =>
                <tr key={tier}>
                  <td>{tier+1}</td>
                  <td>{price}</td>
                </tr>,
              )}
              </tbody>
            </Table>
            : <Loader size='lg' color='green' />}
        </InfoCard>

        <InfoCard header={'Your Safe Holdings'}>
          <h1>{useMetaMaskSafeTokenBalance().data ?? <Loader size='lg' color='green' />}</h1>
        </InfoCard>
      </Flex>
    </PageContainer>
  );
};

export default Home;

Home.getLayout = AppLayout;
