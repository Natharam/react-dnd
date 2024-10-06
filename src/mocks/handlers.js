// handlers.js
import { http } from 'msw';

const LOCAL_STORAGE_KEY = 'documents_data';

// Define a handler for GET requests
export const handlers = [
  http.get('/api/documents', (req, res, ctx) => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    return res(ctx.json(data));
  }),

  // Define a handler for POST requests
  http.post('/api/documents', (req, res, ctx) => {
    const newDocument = req.body;
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    data.push(newDocument);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    return res(ctx.status(201), ctx.json({ message: 'Document added successfully' }));
  }),
];
