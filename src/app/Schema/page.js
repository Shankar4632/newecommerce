// components/ArticleSchema.js

import React from "react";

const Schema = ({ product }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        name: "Bag",
        image:
          "https://clinquant-rabanadas-a2a68c.netlify.app/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F81fPKd-2AYL._AC_SL1500_.jpg&w=256&q=75",
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        brand: {
          "@type": "Brand",
          name: "XYZ",
        },
        sku: "123456",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "20",
        },
      }),
    }}
  />
);

export default Schema;
