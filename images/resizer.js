const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const main = async () => {
  const IMAGE_SHAPES_AND_SIZES = {
    SMALL: {
      height: 72,
      strategy: sharp.strategy.entropy,
    },
    MEDIUM: {
      height: 400,
      strategy: sharp.strategy.entropy,
    },
    LARGE: { height: 800, filename: "large.png" },
  };

  const files = fs.readdirSync(path.resolve(__dirname, "./data"));

  for (const file of files) {
    const person = fs.readFileSync(path.resolve(__dirname, `./data/${file}`));

    const imageKeys = Object.keys(IMAGE_SHAPES_AND_SIZES);

    const [name, extension] = file.split(".");

    for (const key of imageKeys) {
      const size = IMAGE_SHAPES_AND_SIZES[key];
      sharp.strategy.attention;

      // sharp.gravity.north
      const newImage = await sharp(person)
        .resize({
          height: size.height,
          fit: sharp.fit.cover,
          position: sharp.strategy.entropy,
        })
        .jpeg({ quality: 80 })
        .toBuffer();

      const outputPath = path.resolve(__dirname, `../public/content/${name}/${name}-${size.height}.${extension}`)
      ensureDirectoryExistence(outputPath);

      fs.writeFileSync(
        path.resolve(__dirname, `../public/content/${name}/${name}-${size.height}.${extension}`),
        newImage, 
      );
    }
  }
 
  return;
};

void Promise.resolve()
  .then(main)
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  });

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}