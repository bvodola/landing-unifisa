import { Meteor } from 'meteor/meteor';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Routes } from '../imports/ui/App.jsx';

Meteor.startup(() => {
  // code to run on server at startup
});
// 
// // Listen to incoming HTTP requests, can only be used on the server
// WebApp.connectHandlers.use(function(req, res, next) {
//   // res.writeHead(200);
//   // res.end("Hello world from: " + Meteor.release);
//
//   match(
//     { Routes, location: req.url },
//     (err, redirectLocation, renderProps) => {
//       console.log(renderProps);
//
//       // in case of error display the error message
//       if (err) {
//         return res.writeHead(500);
//         res.end(err.message);
//       }
//
//       // in case of redirect propagate the redirect to the browser
//       if (redirectLocation) {
//         return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//       }
//
//       // generate the React markup for the current route
//       let markup;
//       if (renderProps) {
//         // if the current route matched we have renderProps
//         markup = renderToString(<RouterContext {...renderProps}/>);
//       } else {
//         // otherwise we can render a 404 page
//         markup = '404';
//         res.writeHead(404);
//         res.end('404');
//       }
//
//       // render the index template with the embedded React markup
//       return res.end(markup);
//     }
//   );
// });
