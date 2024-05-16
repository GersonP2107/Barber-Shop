const { google } = require('googleapis');
const { OAuth2 } = google.auth;

// Configuración de las credenciales de cliente
const oAuth2Client = new OAuth2(
  '354324250594-rmkhjtgus0723ecrm5jkf9gb9ar15p5g.apps.googleusercontent.com',
  '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v',
  'http://localhost:4321/reserved/',
);

// URL de autorización
const authorizeUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/calendar']
});

console.log('Autoriza esta app visitando esta URL:', authorizeUrl);

// Introduce el código de autorización desde la URL de redireccionamiento
const code = 'CODIGO_DE_AUTORIZACION';

// Intercambio de código de autorización por tokens de acceso y de actualización
const { tokens } = await oAuth2Client.getToken(code);
oAuth2Client.setCredentials(tokens);

console.log('Token de acceso:', tokens.access_token);
console.log('Token de actualización:', tokens.refresh_token);
