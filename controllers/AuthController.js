import { ContactFormEmail } from "../utilis/EmailSender.js";

export const login = (req, res) => {
  res.send("Login route works!");
};

export const emailReceiver = async (req, res) => {
  const { fullName, email, company, message } = req.body;

  try {
    if (!fullName || !message || !email) {
      return res
        .status(400)
        .json({ message: "Missing required fields", status: false });
    }

    const to = "info@cyptionverse.com";
    const data = {
      fullName,
      email,
      company: company || "N/A",
      message,
    };

    await ContactFormEmail(to, data)
      .then(() =>
        res
          .status(200)
          .json({ message: "Email sent successfully", status: true })
      )
      .catch((error) =>
        res
          .status(500)
          .json({ message: "Error sending email", error, status: false })
      );
  } catch (error) {
    return res.status(500).json({
      message: "Failed to send email",
      error: error.message,
      status: false,
    });
  }
};
