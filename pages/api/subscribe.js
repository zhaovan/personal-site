const apiKey = process.env.BUTTONDOWN_API_KEY;

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Please enter an email!' });
  }

  try {
    const apiRes = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + apiKey,
      },
    });

    if (apiRes.status == 400 && apiRes.statusText == 'Bad Request') {
      return res.status(500).json({ error: "You've already subscribed!" });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: error.message || error.toString() });
  }
};
