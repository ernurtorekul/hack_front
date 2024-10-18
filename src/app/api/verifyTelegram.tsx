import { NextApiRequest, NextApiResponse } from "next";
import * as crypto from "crypto";

// Replace with your Telegram Bot token
const BOT_TOKEN = process.env.BOT_TOKEN;

// Function to verify Telegram user and decode the initData
async function verifyTelegramData(initData: string | undefined) {
  if (!initData) {
    throw new Error("initData is required");
  }

  const key = crypto.createHash('sha256').update(BOT_TOKEN!).digest(); // BOT_TOKEN is not undefined
  const iv = Buffer.from(initData.substring(0, 16), 'hex');
  const data = Buffer.from(initData.substring(16), 'hex');

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  const decoded = Buffer.concat([decipher.update(data), decipher.final()]);
  
  return decoded.toString();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { data, hash } = req.body;

    if (!data || !hash) {
      return res.status(400).json({ error: "Missing data or hash" });
    }

    // Decode and verify the data here
    try {
      const decodedData = await verifyTelegramData(data);

      // Extract user info from the decoded data
      const user = JSON.parse(decodedData);

      // Respond with user info or save it to a session/database
      res.status(200).json(user);
    } catch (err) {
      // Log the error for debugging purposes and send it in the response
      console.error("Verification error:", err);
      res.status(500).json({ error: "Failed to verify user", message: err instanceof Error ? err.message : "Unknown error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
