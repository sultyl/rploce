import { createRouter, useCORS } from 'fets';
import type { IncomingMessage, ServerResponse } from 'http';
import { createServer } from 'http';
import { Server } from 'socket.io';

interface ServerContext {
  req: IncomingMessage;
  res: ServerResponse;
}

export const router = createRouter<ServerContext>({
  plugins: [useCORS({ origin: '*' })]
});

// Create an HTTP server
const httpServer = createServer(router);

// Create a WebSocket server and attach it to the HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

export { httpServer as server, io as socketServer };
