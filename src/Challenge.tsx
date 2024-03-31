import React from "react";

const stockImages = [
  {
    href: "https://images.unsplash.com/photo-1710959575225-835d7d4a3b8f",
    alt: "Image 1 Alt Text",
    imageTitle: "Image 1 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1433274562530-208df1c02e48",
    alt: "Image 2 Alt Text",
    imageTitle: "Image 2 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711639812944-ff9aacbdcd5a",
    alt: "Image 3 Alt Text",
    imageTitle: "Image 3 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711348260213-b4f6c9c1d6be",
    alt: "Image 4 Alt Text",
    imageTitle: "Image 4 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711319551813-d61213cd105f",
    alt: "Image 5 Alt Text",
    imageTitle: "Image 5 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711378153023-49097252494c",
    alt: "Image 6 Alt Text",
    imageTitle: "Image 6 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711699487054-aca10a6b85ad",
    alt: "Image 7 Alt Text",
    imageTitle: "Image 7 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711732782155-3e78be30b2b8",
    alt: "Image 8 Alt Text",
    imageTitle: "Image 8 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711652520571-112beb00db36",
    alt: "Image 9 Alt Text",
    imageTitle: "Image 9 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711058539738-48ff6b5e890a",
    alt: "Image 10 Alt Text",
    imageTitle: "Image 10 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3",
    alt: "Image 11 Alt Text",
    imageTitle: "Image 11 Title",
  },
  {
    href: "https://images.unsplash.com/photo-1711377785726-47c7dd8773ff",
    alt: "Image 12 Alt Text",
    imageTitle: "Image 12 Title",
  },
  {
    href: "https://plus.unsplash.com/premium_photo-1711581810682-945e9ab90dd6",
    alt: "Image 13 Alt Text",
    imageTitle: "Image 13 Title",
  },
];
// Adding bgcolor property to each object in stockImages

function Challenge() {
  return (
    <div className="new-grid">
      {stockImages.map((image) => {
        return (
          <div key={image.href} className="cell">
            <img alt={image.alt} src={image.href} />
          </div>
        );
      })}
      <div className="overlay"></div>
    </div>
  );
}

export default Challenge;
