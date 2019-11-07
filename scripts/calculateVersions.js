const versionsFile = 'gh-pages/versions.json';
const indexFile = 'gh-pages/index.html';

const indexSrc = (latestVersion) =>
  `
  <!DOCTYPE HTML>
  <html lang="en-US">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="refresh" content="0; url=releases/${latestVersion}">
          <script type="text/javascript">
              window.location.href = "releases/${latestVersion}"
          </script>
          <title>Page Redirection</title>
      </head>
      <body>
          If you are not redirected automatically, follow this <a href='releases/${latestVersion}'>link to example</a>.
      </body>
  </html>
`;

const fs = require('fs');
const version = require('../package.json').version;

let versions;
try {
  versions = JSON.parse(fs.readFileSync(versionsFile, 'utf8'));
} catch {
  versions = [];
}

const versionExists = versions.includes(version);
const newVersions = !versionExists ? versions.concat(version) : versions;
fs.writeFileSync(versionsFile, JSON.stringify(newVersions));
fs.writeFileSync(indexFile, indexSrc(version));
