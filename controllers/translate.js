const { isBlank } = require("../util/helper");
const axios = require("../util/axios");

const validateBody = ({ to, from, message }) => {
  return !(isBlank(to) || isBlank(from) || isBlank(message));
};

const translateText = async ({ from, to, message }) => {
  return await axios.post(
    `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${from}&to=${to}`,
    [{ Text: message }],
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.AZURE_KEY,
        "Ocp-Apim-Subscription-Region": process.env.AZURE_REGION,
      },
    }
  );
};

exports.translateMessage = async (req, res) => {
  const body = req.body;
  try {
    const validRequest = validateBody(body);
    if (validRequest) {
      const result = await translateText(body);
      res.status(200).json({ text: result.data[0].translations[0].text });
    } else {
      throw "Missing request parameters";
    }
  } catch (e) {
    console.warn(e);
    res.status(422).json({
      user: body,
      error: e,
    });
  }
};
