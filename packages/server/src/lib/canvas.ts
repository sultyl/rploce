import { Response } from 'fets';
import { router } from '../lib/server.js';
import { canvas } from '../lib/canvas.js';
import { socketServer } from '../server';

const CANVAS_PATH = '/canvas';

router.route({
  path: CANVAS_PATH,
  method: 'GET',
  schemas: {
    responses: {
      200: {
        type: 'array',
        items: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      } as const,
    },
  },
  handler() {
    return Response.json(canvas);
  },
});

// This is declared to emit canvas updates to all connected clients
function emitCanvasUpdate(updatedCanvas) {
  socketServer.emit('canvas-update', updatedCanvas);
}

// Simulated update of the canvas (you should replace this with your actual canvas update logic)
router.route({
  path: '/update-canvas',
  method: 'POST',
  handler(req) {
    // Assuming req.body contains the updated canvas data
    // Update the canvas
    const updatedCanvas = req.body;

    // Emit an event to notify all clients of the update
    emitCanvasUpdate(updatedCanvas);

    // Respond with a success message
    return Response.json({ message: 'Canvas updated successfully' });
  },
});
