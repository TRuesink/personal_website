import { Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';

import React from 'react';
import Image from 'next/image';

type CustomTimelineItem = {
  title: string;
  imgSrc: string;
  content: React.ReactElement;
};

type CustomTimelineProps = {
  items: CustomTimelineItem[];
};

const CustomTimeline = ({ items }: CustomTimelineProps) => {
  return (
    <Timeline position="right">
      {items.map((item) => (
        <TimelineItem
          sx={{ flexGrow: 1, '::before': { content: 'unset' } }}
          key={`timeline-item-${item.title}`}
        >
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <Image alt="wmu" src={item.imgSrc} width={100} height={100} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
            <Typography variant="h4" component="span">
              {item.title}
            </Typography>
            {item.content}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomTimeline;
