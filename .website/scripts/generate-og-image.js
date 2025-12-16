import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WIDTH = 1200;
const HEIGHT = 630;

// Create SVG with text
const textSvg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title {
      font-family: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
      font-size: 48px;
      font-weight: 500;
      fill: #1a1a1a;
    }
  </style>
  <text x="340" y="332" class="title">awesome-byoc</text>
</svg>
`;

async function generateOgImage() {
  const faviconPath = join(__dirname, '../public/favicon.png');
  const outputPath = join(__dirname, '../public/og-image.png');

  // Create white background
  const background = sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  });

  // Resize favicon to 120x120
  const favicon = await sharp(faviconPath)
    .resize(120, 120)
    .toBuffer();

  // Create text overlay
  const textOverlay = Buffer.from(textSvg);

  // Composite everything
  await background
    .composite([
      {
        input: favicon,
        left: 200,
        top: 255  // Vertically centered (630-120)/2 = 255
      },
      {
        input: textOverlay,
        left: 0,
        top: 0
      }
    ])
    .png()
    .toFile(outputPath);

  console.log('OG image generated at:', outputPath);
}

generateOgImage().catch(console.error);
