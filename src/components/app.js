const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kashish@adosphereindia.com",
    pass: "vgfx lwbl kapr onza",
  },
});

// API endpoint to handle form submission
app.post("/submit-form", (req, res) => {
  const { fname, lname, mobile, email, city, area } = req.body;

  const mailOptions = {
    from: "kashish@adosphereindia.com",
    to: "kashish@adosphereindia.com",
    subject: "Franchise Enquiry Form Submission",
    html: `
      <p>First Name: ${fname}</p>
      <p>Last Name: ${lname}</p>
      <p>Phone No.: ${mobile}</p>
      <p>Email Address: ${email}</p>
      <p>City: ${city}</p>
      <p>Area: ${area}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email: " + error.toString());
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent: " + info.response);
  });
});
