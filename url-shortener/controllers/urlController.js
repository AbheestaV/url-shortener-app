import Url from '../models/Url.js';
import { customAlphabet } from 'nanoid';
import redisClient from '../redisClient.js';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 7);

export const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = nanoid();

  try {
    let url = await Url.findOne({ originalUrl });
    if (url) return res.status(200).json(url);

    url = new Url({ originalUrl, shortUrl: `${process.env.BASE_URL}/${shortUrl}` });
    await url.save();

    return res.status(201).json(url);
  } catch (error) {
    console.error(error);
    return res.status(500).json('Server Error');
  }
};

export const redirectToOriginalUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    redisClient.get(shortUrl, async (err, originalUrl) => {
      if (originalUrl) {
        await Url.findOneAndUpdate({ shortUrl }, { $inc: { clicks: 1 } });
        return res.redirect(originalUrl);
      } else {
        const url = await Url.findOne({ shortUrl: `${process.env.BASE_URL}/${shortUrl}` });
        if (url) {
          redisClient.setex(shortUrl, 3600, url.originalUrl); // Cache for 1 hour
          await Url.findByIdAndUpdate(url._id, { $inc: { clicks: 1 } });
          return res.redirect(url.originalUrl);
        } else {
          return res.status(404).json('URL not found');
        }
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json('Server Error');
  }
};
