// FROM pages/dynamic-render

import path from "path";

const fs = require("fs");
const listTxt = fs.readFileSync(
  path.join(process.cwd(), "pages/dynamic-render/list.txt"),
  "utf8"
);
