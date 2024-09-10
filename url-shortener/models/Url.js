import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  analytics: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

const Url = mongoose.model('Url', UrlSchema);

export default Url;
