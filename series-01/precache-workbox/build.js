const workboxBuild = require('workbox-build');
var fs = require('fs');
var additionalManifestEntries = JSON.parse(fs.readFileSync('./precache-manifest.json', 'utf8'));

// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  workboxBuild
    .injectManifest({
      swSrc: 'src/sw-template.js', // this is your sw template file
      swDest: 'dist/sw.js', // this will be created in the build step
      globDirectory: 'dist',
      additionalManifestEntries: additionalManifestEntries,
    })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${size} bytes.`);
    })
    .catch(console.error);
};
buildSW();
