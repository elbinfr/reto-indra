import 'dotenv/config';
import { createApp } from './server';

const port = process.env.PORT || 3000;
const app = createApp('/dev/api');

app.listen(port, () => {
  console.log(`🚀[server] Listening on port: ${port}`);
});
