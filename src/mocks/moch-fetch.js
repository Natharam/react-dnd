import { staticCards } from "../data/staticCards";

const LOCAL_STORAGE_KEY = 'documents_data';

// Initialize localStorage with default data if not already present
if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(staticCards));
}

export const mockFetchDocuments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(data),
      });
    }, 500); // Simulate network delay
  });
};

export const mockPostDocument = (newDocument) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
      const updatedData = [...data, newDocument];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));

      resolve({
        ok: true,
        status: 201,
        json: () => Promise.resolve({ message: 'Document added successfully' }),
      });
    }, 500); // Simulate network delay
  });
};