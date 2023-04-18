import { ExpandMore } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

import React, { useState } from 'react';

import styles from './Accordion.module.css';

type AccordionItem = {
  summary: string;
  content: React.ReactElement;
};

type AccordionProps = {
  width: string | {};
  items: AccordionItem[];
};

const Accordion = ({ width, items }: AccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleClick = (name: string) => {
    if (name === expanded) {
      setExpanded(false);
    } else {
      setExpanded(name);
    }
  };

  const renderAccordionItem = (item: AccordionItem, index: number) => (
    <>
      <Button
        color="primary"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem 0.5rem',
          borderRadius: 0,
          borderTop: index === 0 ? 'none' : 'solid 1px',
          borderColor: 'primary.light',
          textTransform: 'none',
        }}
        onClick={() => handleClick(item.summary)}
      >
        <Typography variant="h5">{item.summary}</Typography>
        <ExpandMore
          sx={{
            transform: item.summary === expanded ? 'rotate(180deg)' : 'none',
            transition: '0.5s',
          }}
        />
      </Button>
      <Box
        sx={{
          visibility: item.summary === expanded ? 'visible' : 'hidden',
          height: item.summary === expanded ? 'auto' : 0,
          flexGrow: item.summary === expanded ? 1 : 0,
          transition: '0.5s',
        }}
      >
        <Box
          className={
            item.summary === expanded
              ? styles.AccordianContentIn
              : styles.AccordianContentOut
          }
        >
          {item.content}
        </Box>
      </Box>
    </>
  );

  return (
    <Box
      sx={{
        width: width,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {items.map((item, index) => renderAccordionItem(item, index))}
    </Box>
  );
};

export default Accordion;
