const { PDFNet } = require("@pdftron/pdfnet-node");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello from the server",
  });
});
app.get("/generateInvoice", (req, res) => {});

app.get("/convertFromOffice", (req, res) => {
  const licenseKey =
    "demo:1688704175131:7c64ee1203000000002ab5d1d5b7d8f319ed9ac1fc33dbdf285e8a305f";
  const { filename } = req.query;
  const inputPath = path.resolve(__dirname, `./files${filename}`);
  const outputPath = path.resolve(__dirname, `./files${filename}.pdf`);
  console.log("dong21");
  const convertToFDF = async () => {
    const pdfdoc = await PDFNet.PDFDoc.create();
    console.log("dong24");
    await pdfdoc.initSecurityHandler();
    console.log("dong26");
    await PDFNet.Convert.toPdf(pdfdoc,inputPath)
    console.log("dong28");
    pdfdoc.save(outputPath, PDFNet.SDFDoc.SaveOptions.e_linearized);
    console.log("dong30");
  };

  PDFNet.runWithCleanup(convertToFDF, licenseKey);
  console.log("dong34")
    .then(() => {
      fs.readFile(outputPath, (err, data) => {
        console.log("dong37");
        if (err) {
          console.log("dong39");
          res.statusCode = 500;
          res.end(err);
        } else {
          console.log("dong43");
          res.setHeader("ContentType", "application/pdf");
          res.end(data);
        }
      });
    })
    console.log("dong50")
    .catch((err) => {
      res.status = 500;
      res.end(err);
    });
});

app.listen(3000, () => {
  console.log("run");
});
