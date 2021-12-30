import express from 'express';
import React from 'react';
import {renderToString, renderToNodeStream} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
// Import the StyledComponents SSR util
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';
import {HelmetData} from 'react-helmet';
import {HelmetProvider} from 'react-helmet-async';

import App from './App';

let assets: any;

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST!);

const server = express()
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
    .get('/*', (req: express.Request, res: express.Response) => {
        // Create the server side style sheet
        const helmetContext = {helmet: {} as HelmetData};
        const sheet = new ServerStyleSheet();
        const context = {};
        const markup = renderToString(
            sheet.collectStyles(
                <StyleSheetManager sheet={sheet.instance}>
                    <HelmetProvider context={helmetContext}>
                        <StaticRouter context={context} location={req.url}>
                            <App />
                        </StaticRouter>
                    </HelmetProvider>
                </StyleSheetManager>
            )
        );
        // Generate all the style tags so they can be rendered into the page
        const styleTags = sheet.getStyleTags();
        const {helmet} = helmetContext;
        res.send(
            `<!doctype html>
    <html lang="" ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
            assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
        }
        <!-- Render the style tags gathered from the components into the DOM -->
        ${styleTags}
          ${
              process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${markup}</div>
    </body>
</html>`
        );
    });

export default server;
