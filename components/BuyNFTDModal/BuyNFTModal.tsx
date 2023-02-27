import { AddressZero, MaxUint256 } from '@ethersproject/constants';
import { Box, createStyles, Grid, Group, Image, Modal, Text, useMantineTheme } from '@mantine/core';
import { useAtom } from 'jotai/index';
import { FC, useState } from 'react';

import { executeContractHandler } from '../../handlers/executeContractHandler';
import useFetchFromApi from '../../hooks/useFetchFromApi';
import useNFTContract from '../../hooks/useNFTContract';
import useNFTRewards from '../../hooks/useNFTRewards';
import useSafeNFTBalance from '../../hooks/useSafeNFTBalance';
import useSafeNFTTotalSupply from '../../hooks/useSafeNFTTotalSupply';
import useSafeTokenAPR from '../../hooks/useSafeTokenAPR';
import useSafeTokenBalance from '../../hooks/useSafeTokenBalance';
import useSafeTokenPrice from '../../hooks/useSafeTokenPrice';
import useUsdcAllowance from '../../hooks/useUsdcAllowance';
import useUsdcBalance from '../../hooks/useUsdcBalance';
import useUsdcContract from '../../hooks/useUsdcContract';
import useWalletConnected from '../../hooks/useWalletConnected';
import { transactionInProgressAtom } from '../Account/Account';
import { FancyButton } from '../FancyButton';

const useStyles = createStyles<string>((theme, params, getRef) => {
  return {
    modalTable: {
      color: theme.colors.veryDarkGreen[0],
      textAlign: 'center',
    },
    nftIconContainer: {
      width: '94.03px',
      height: '113.62px',
      background: 'linear-gradient(180deg, #D9D9D9 9.78%, rgba(217, 217, 217, 0) 89.67%)',
      borderRadius: '10px',
      justifyContent: 'center',
      textAlign: 'center',
    },
  };
});

export const BuyNFTModal: FC<{ opened: boolean, handleModalClose: () => boolean, tier: number, referralAddress?: string }> =
  ({
     opened,
     handleModalClose,
     tier,
     referralAddress,
   }) => {
    const { classes, cx } = useStyles();
    const theme = useMantineTheme();
    const injectedWalletConnected = useWalletConnected();
    const safeTokenPrice = useSafeTokenPrice()?.data;
    const safeTokenBalance = useSafeTokenBalance()?.data;
    const NFTRewards = useNFTRewards()?.data;
    const nftRegularPostPresalePrice = useFetchFromApi('nft/price')?.data;
    const nftDiscountedPrice = useFetchFromApi('nft/presale-price')?.data;
    const safeNFTBalance = useSafeNFTBalance()?.data;
    const safeNFTTotalSupply = useSafeNFTTotalSupply()?.data;
    const safeTokenAPR = useSafeTokenAPR()?.data;
    const nftContract = useNFTContract();
    const usdAllowance = useUsdcAllowance(nftContract?.address)?.data;
    const usdcBalance = useUsdcBalance()?.data;
    const usdcContract = useUsdcContract();
    const [executionInProgress, setExecutionInProgress] = useAtom(transactionInProgressAtom);
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const totalPrice = (parseFloat(nftDiscountedPrice[tier]) * quantity).toFixed(2);
    const balanceIfPurchased = safeNFTBalance ? (parseInt(safeNFTBalance[tier]) + quantity) : 0;
    const totalSupplyOfTierIfPurchased = safeNFTTotalSupply ? parseInt(safeNFTTotalSupply[tier]) + quantity : 0;
    const ownershipIfPurchased = (balanceIfPurchased / totalSupplyOfTierIfPurchased * 100).toFixed(5);

    const contractsLoaded = !!nftRegularPostPresalePrice && !!usdcBalance && !!usdAllowance;

    const enoughBalanceForTier = (tier: number) => contractsLoaded && Number(nftRegularPostPresalePrice[tier]) <= Number(usdcBalance);
    const enoughAllowanceForTier = (tier: number) => contractsLoaded && (Number(usdAllowance) >= Number(nftRegularPostPresalePrice[tier]));

    const buyNFTHandler = (tier: number) => usdAllowance && nftRegularPostPresalePrice && nftContract && usdcContract && (Number(usdAllowance) >= Number(nftRegularPostPresalePrice[tier])) &&
      executeContractHandler(setExecutionInProgress, () => nftContract.buy(tier, quantity, referralAddress || AddressZero));

    const approveSpendUsdcForNFTHandler = (tier: number) => usdAllowance && nftRegularPostPresalePrice && nftContract && usdcContract && Number(usdAllowance) < Number(nftRegularPostPresalePrice[tier]) &&
      executeContractHandler(setExecutionInProgress, () => usdcContract.approve(nftContract.address, MaxUint256));

    return (
      <Modal opened={opened}
             onClose={() => handleModalClose()}
             closeOnClickOutside={true}
             centered={true}
             title='Buy NFT'
             overlayColor={theme.colors.dark[9]}
             overlayOpacity={0.55}
             overlayBlur={3}
      >
        <Grid mt='130px' align='center' justify='center' gutter='xs'>
          <Grid.Col span={2}>
            <Box className={cx(classes.nftIconContainer)}>
              <Image src={'/assets/nft-icon.png'} alt='NFT icon' fit='contain' />
              <Text size='sm' color={theme.colors.veryDarkGreen[0]} style={{ fontWeight: 700 }}>Tier{` ${tier+1}`}</Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={10}>
            <Grid align='center' justify='center' gutter='sm' className={cx(classes.modalTable)}>
              <Grid.Col span={3}>
                <Text size='xs'>Price</Text>
              </Grid.Col>
              <Grid.Col span={3}>
                <Text size='xs'>Quantity</Text>
              </Grid.Col>
              <Grid.Col span={3}>
                <Text size='xs'>Total</Text>
              </Grid.Col>
              <Grid.Col span={3}>
                <Text size='xs'>Ownership</Text>
              </Grid.Col>
              <Grid.Col span={3}>
                {nftDiscountedPrice &&
                  <>
                    <Text size='sm' color={theme.colors.veryDarkGreen[0]} style={{ fontWeight: 700 }}>
                      {(parseFloat(nftDiscountedPrice[tier])).toFixed(2)}
                    </Text>
                    <Text>USDC</Text>
                  </>
                }
              </Grid.Col>
              <Grid.Col span={3}>
                <Group spacing='xs' position='center'>
                  <Text size='md' style={{ cursor: 'pointer', userSelect: 'none' }} onClick={handleDecrease}>∨</Text>
                  <Text size='sm' style={{ minWidth: '15px', textAlign: 'center' }}>{quantity}</Text>
                  <Text size='md' style={{ cursor: 'pointer', userSelect: 'none' }} onClick={handleIncrease}>∧</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={3}>
                <Text size='sm'>{totalPrice}</Text>
              </Grid.Col>
              <Grid.Col span={3}>
                <Text
                  size='xs'>{ownershipIfPurchased}%</Text>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
        <FancyButton style={{ height: '24px', position: 'fixed', bottom: '15px', right: '30px' }}
                     onClick={() => handleModalClose() && !enoughAllowanceForTier(tier) ? approveSpendUsdcForNFTHandler(tier) : buyNFTHandler(tier)}>
          {!contractsLoaded ? 'Buy' :
            !enoughBalanceForTier(tier) ? 'No balance' : !enoughAllowanceForTier(tier) ? 'Approve' : 'Buy'
          }</FancyButton>
      </Modal>
    );
  };
