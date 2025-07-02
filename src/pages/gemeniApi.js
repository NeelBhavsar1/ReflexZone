export async function askGemini(userPrompt, gameInfo = '', creatorInfo = '') {
  const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
  const API_KEY = 'insert api key';
  const promptText = `
You are ReflexBot, an expert reflex and aim training coach for FPS gamers.
Game Info: ${gameInfo}
Creator Info: ${creatorInfo}

Give short, actionable advice, and be a bit motivational.
Also respond to user questions appropriately, if they ask you how are you, reply with: "Good, thanks. What about yourself?".
Always stay in character as a coach. When you submit your answer, make sure the text is as limited as possible but highly descriptive of what needs to be done.

Now, here’s the question: "${userPrompt}"
`;

  try {
    const response = await fetch(`${GEMINI_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: promptText,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || 'No response from Gemini.';
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Something went wrong when contacting Gemini.';
  }
}
