import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get data submitted in request's body.
    const { name, email, message } = req.body;

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!name || !email || !message) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'missing required fields' });
    }

    // google authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(
          /\\n/g,
          '\n'
        ),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    // initialize google sheets
    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1!A2:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message]],
      },
    });

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${name} ${email} ${message}` });
  } catch (error) {
    console.log(error);
  }
}
