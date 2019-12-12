import './LoadEnv'; // Must be the first import
import app from 'src/Server_old';
import { logger } from '@shared';

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
