import { Grid, Loader, Title } from '@mantine/core';
import { FancyButton } from 'components/FancyButton';
import { InfoCard } from 'components/InfoCard';
import { CardContentBox } from 'components/InfoCard/CardContentBox';
import { PageContainer } from 'components/PageContainer';
import useNFTContract from 'hooks/useNFTContract';
import useNFTRewards from 'hooks/useNFTRewards';
import useSafeNFTBalance from 'hooks/useSafeNFTBalance';
import useSafeNFTBuyPrice from 'hooks/useSafeNFTBuyPrice';
import useSafeNFTFairPrice from 'hooks/useSafeNFTFairPrice';
import useSafeTokenAPR from 'hooks/useSafeTokenAPR';
import useSafeTokenBalance from 'hooks/useSafeTokenBalance';
import useSafeTokenPrice from 'hooks/useSafeTokenPrice';
import useWalletConnected from 'hooks/useWalletConnected';
import { useAtom } from 'jotai';
import { AppLayout } from 'layout';
import type { NextPageWithLayout } from 'next';
import { FC } from 'react';

import { transactionInProgressAtom } from '../components/Account/Account';
import { FormatPrice } from '../components/FormatPrice';
import { executeContractHandler } from '../handlers/executeContractHandler';
import useUsdcAllowance from '../hooks/useUsdcAllowance';
import useUsdcBalance from '../hooks/useUsdcBalance';
import useUsdcContract from '../hooks/useUsdcContract';

const TierHeader: FC<{ tier: number }> = (props) =>
  (<Title order={3} sx={theme => {
    return {
      color: theme.colors.limeGreen[1],
    };
  }}> Tier {props.tier}</Title>);


const Nft: NextPageWithLayout = () => {
  const { data: fairPrice } = useSafeNFTFairPrice();
  const injectedWalletConnected = useWalletConnected();
  const safeTokenPrice = useSafeTokenPrice()?.data;
  const safeTokenBalance = useSafeTokenBalance()?.data;
  const NFTRewards = useNFTRewards()?.data;
  const safeNFTFairPrice = useSafeNFTFairPrice()?.data;
  const nftPrice = useSafeNFTBuyPrice()?.data;
  const safeNFTBalance = useSafeNFTBalance()?.data;
  const safeTokenAPR = useSafeTokenAPR()?.data;
  const nftContract = useNFTContract();
  const usdAllowance = useUsdcAllowance(nftContract?.address)?.data;
  const usdcBalance = useUsdcBalance()?.data;
  const usdcContract = useUsdcContract();
  const [executionInProgress, setExecutionInProgress] = useAtom(transactionInProgressAtom);

  const buyNFTHandler = (tier: number) => {
    nftContract && executeContractHandler(setExecutionInProgress, () => nftContract.buy(tier, 1));
    // if (usdAllowance && nftPrice && nftContract && Number(usdAllowance) < Number(nftPrice[tier])) {
    //
    // }
  };


  const displaySafeValue = (priceData: string | null | undefined, unit = ' SAFE') =>
    <h1>{
      injectedWalletConnected ?
        priceData ? priceData.concat(unit) :
          <Loader size='lg' color='#F5F5F5' /> : '⸻'}
    </h1>;

  const enoughBalanceForTier = (tier: number) => true;
  // const enoughBalanceForTier = (tier: number) => nftPrice && usdcBalance && Number(nftPrice[tier]) <= Number(usdcBalance);

  return (
    <PageContainer title='Buy NFT'>
      <Grid grow gutter={'md'} align={'center'} justify={'space-between'} mt={'lg'} style={{ textAlign: 'center' }}>
        <Grid.Col span={12}>
          <Title order={1}>Choose the best TIER for you</Title>
        </Grid.Col>
        {[0, 1, 2, 3].map((tier) => (
          <Grid.Col span={3} key={tier}>
            <InfoCard header={<TierHeader tier={tier + 1} />}>
              <CardContentBox footer={(<FancyButton onClick={() => buyNFTHandler(tier)}
                                                    disabled={!injectedWalletConnected || executionInProgress || !enoughBalanceForTier(tier)}> Buy</FancyButton>)}>
                <FormatPrice price={!(nftPrice) || nftPrice[tier]} />
              </CardContentBox>
            </InfoCard>
          </Grid.Col>
        ))}
        <Grid.Col span={12} mt={'lg'}>
          <Title order={2}> Don’t know how our NFTs work? Read our Whitepaper</Title>
        </Grid.Col>
      </Grid>
    </PageContainer>
  );
};

export default Nft;
Nft.getLayout = AppLayout;
