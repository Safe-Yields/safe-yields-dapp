import { SimpleGrid, Text, Title } from '@mantine/core';
import { FC, useState } from 'react';

import useStyles from './CountdownTimer.styles';

export const CountdownTimer: FC<{ endDate: number }> = ({ endDate }) => {

  const { classes, cx } = useStyles();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timer = () => {
    const now = new Date().getTime();
    const t = endDate - now;

    const d = t>0 ? Math.floor(t / (1000 * 60 * 60 * 24)) : 0;
    const h = t>0 ?  Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0;
    const m =  t>0 ? Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)) :0;
    const s =  t>0 ? Math.floor((t % (1000 * 60)) / 1000) :0;

    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);

    if (t < 0) {
      clearInterval(interval);
    }
  };

  const interval = setInterval(timer, 1000);

  return (
    <SimpleGrid cols={3}>
      {
        [{ label: 'day', value: days },
          { label: 'hours', value: hours },
          { label: 'minutes', value: minutes }].map((item, index) => (
          <div className={classes.container} key={item.label}>
            <Title order={3} className={classes.number}>{item.value}</Title>
            <Text className={classes.label}>{item.label}</Text>
          </div>
        ))
      }
    </SimpleGrid>
  );

};
