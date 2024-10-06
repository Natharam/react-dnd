
# Document Card Viewer

This React application displays a list of document types as cards using data from a staticCards file. The app features drag-and-drop card reordering, loading spinners for images, and a full-screen image overlay when a card is clicked.

## Features

1. **Cards**: The data for the cards is loaded from a staticCards.js file. Each card displays a document id, a title, and an image.
   
2. **Grid Layout**: The application arranges cards in a responsive grid format, ensuring that:
   - A maximum of 3 cards per row is displayed.
   - On medium screens (e.g., tablets), 2 cards per row are shown.
   - On small screens (e.g., mobile devices), 1 card per row is shown.

3. **Image Loading with Spinner**: While each image is loading, a spinner (loading indicator) is displayed in its place. Once the image loads, the spinner is replaced by the image.

4. **Drag-and-Drop**: Users can reorder the cards by dragging and dropping them to new positions.

5. **Image Overlay**: Clicking on a card opens a full-screen overlay displaying the card's image. The overlay can be closed by pressing the `ESC` key.

## Thought Process

### 1. Rendering Cards from staticCards.js
The application fetches a staticCards file containing information about different document types. Each item in the staticCards file has:
- A `id`: a unique identifier for the document.
- A `title`: the name to display on the card.
- A `image`: the image to display on the card

The staticCards is stored statically, but it could be replaced by an API or dynamic data source in the future.

### 2. Responsive Grid Layout
The cards are displayed using CSS Grid. I ensured that:
- The grid layout has a maximum of 3 cards per row (`grid-template-columns: repeat(3, 1fr);`).
- Media queries allow for responsive adjustments on smaller screens:
  - 2 cards per row on medium screens (tablets).
  - 1 card per row on small screens (mobile).

This layout allows for smooth responsiveness across different device types and screen sizes.

### 3. Loading Spinner
To provide better user experience, a loading spinner is shown while the image for each card is being fetched. This spinner is centered inside the card, and it disappears once the image loads. Both the image and spinner occupy the same space, preventing any layout shifts.

### 4. Drag-and-Drop Feature
The `react-dnd` library is used to implement drag-and-drop functionality. This feature allows users to rearrange the cards, providing flexibility in the card order. The card positions are tracked and updated on drag events.

The drag-and-drop logic ensures that the layout is maintained during card movement, with smooth animations for user interaction.

### 5. Image Overlay
Clicking on a card displays the corresponding image in an overlay that takes up the entire screen. The overlay includes a backdrop that darkens the rest of the page to focus on the image. The user can close the overlay by either:
- Pressing the `ESC` key.
- Clicking outside the image area.

### 6. Code Structure
- `App.js`: Main component that renders the grid of cards and manages the drag-and-drop functionality.
- `modules/DragDrop.js`: Module that renders the grid of cards and manages the drag-and-drop functionality
- `Card/index.js`: Individual card component that renders the title, image (or spinner), and handles the overlay.
- `ImageOverlay/index.js`: Handles the full-screen image display when a card is clicked.
- `Loader/index.js`: Handles the loading of the image in the card
- `data/staticCards.js`: Static file that stores the document information used to generate the cards.

## Installation and Setup

### Prerequisites:
- [Node.js](https://nodejs.org/) installed on your machine.

### Steps to run the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/document-card-viewer.git
   cd document-card-viewer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm start
   ```

4. **Access the app**:
   Open your browser and go to `http://localhost:3000` to view the app.

## File Structure

```bash
src/
 ├── modules/
 │    ├── DragDrop/index.js        # DragDrop module for handling drag and drop events
 ├── components/
 │    ├── Card/index.js        # Card component for individual document cards
 │    ├── ImageOverlay/index.js  # Component that handles full-screen image overlay
 |    ├── Loader/index.js        # Component that handles loading
 ├── data/
 │    └── staticCards.js      # Static cards data for documents
 ├── App.js                # Main application component
 ├── index.js              # Entry point for React app
 ├── index.css             # Application-wide styles
public/
 └── index.html            # HTML template
README.md                  # Project documentation
package.json               # NPM dependencies and scripts
```

## Future Improvements

- **Dynamic Data**: The current implementation loads from a staticCards file. This can be updated to fetch data from an API for more dynamic content.
- **Card Customization**: Add a feature that allows users to upload custom thumbnails for each document id.
- **Reorder Persistence**: Currently, card reordering is only on the frontend. In the future, this could be saved to a backend so that the card order is persistent across sessions.
- **Accessibility**: Improve keyboard navigation for drag-and-drop functionality and ensure screen reader support for better accessibility.

## Conclusion

This project demonstrates how to build a responsive card-based layout using React, manage loading states with spinners, and implement drag-and-drop functionality. The image overlay feature enhances user interaction, allowing users to view document thumbnails in detail.
