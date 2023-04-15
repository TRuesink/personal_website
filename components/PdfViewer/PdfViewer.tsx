import { Box } from '@mui/material';
import React from 'react';
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from './pdf-worker';

import styles from './PdfViewer.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  return (
    <Box sx={{ width: '100%' }}>
      <Document file="./Ruesink_resume_2023.pdf">
        <Page
          className={styles.ResumePdf}
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          height={1200}
        />
      </Document>
    </Box>
  );
}
