import { createStyles, Stack, Text } from '@mantine/core';
import { FC, ReactNode } from 'react';

type CardContentBoxProps = {
  children: ReactNode;
  footer?: ReactNode;
};

export const CardContentBox: FC<CardContentBoxProps> = ({ children, footer }) => {
  const useStyles = createStyles<string>((theme, params, getRef) => {
    return {
      cardFooter: {
        ...theme.fn.focusStyles(),
        fontStyle: 'normal',
        fontWeight: '325',
        fontSize: '14px',
        lineHeight: '17px',
        color: theme.colors.almostWhite[0],
        bottom: '10px',
        marginTop: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '10px',
        borderRadius: '10px',
        background: 'transparent',
      },
    };
  });
  const { classes, cx } = useStyles();
  return (
    <Stack spacing={4} mt={0} align={'center'}>
      {children}
      <Text className={classes.cardFooter}>{footer}</Text>
      {/* {typeof(footer)!== 'undefined' && <Text className={classes.cardFooter}>{footer}</Text>}*/}
    </Stack>
  );
};
