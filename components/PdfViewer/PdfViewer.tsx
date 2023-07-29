import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from './pdf-worker';

import styles from './PdfViewer.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const [width, setWidth] = useState<number>(window.innerWidth * 0.9);

  const handleResize = () => {
    if (window.innerWidth === width) return;
    setWidth(window.innerWidth * 0.9);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Document file="./Ruesink_resume_2023.pdf">
        <Page
          className={styles.ResumePdf}
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          width={width}
        />
      </Document>
    </Box>
  );
}
