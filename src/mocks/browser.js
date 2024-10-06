// src/mocks/browser.js

import { setupWorker } from 'msw/browser'
import { handlers } from './handlers';

// Set up the worker with the mock handlers
export const worker = setupWorker(...handlers);
