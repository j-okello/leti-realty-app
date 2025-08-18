export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" }
    );
    const data = await response.json();

    if (!data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
