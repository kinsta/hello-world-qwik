import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';

import './global.css';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Qwik project | Kinsta</title>
        <script src="https://cdn.tailwindcss.com" />
        <link rel="icon" href="https://kinsta.com/wp-content/uploads/2023/12/cropped-kinsta-favicon-32x32.png"
            sizes="32x32" />
        <link rel="stylesheet" href="https://cdn.kinsta.com/fonts/reckless.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </head>
      <body lang="en" class="bg-[#1c1819] flex flex-col justify-center min-h-screen text-[#a68b85]">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
