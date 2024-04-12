import asyncio
import websockets

# Define the WebSocket server handler
async def websocket_handler(websocket, path):
    print("Client connected")

    try:
        async for message in websocket:
            print(f"Received message: {message}")
            # Echo the received message back to the client
            await websocket.send(message)
    except websockets.exceptions.ConnectionClosedOK:
        print("Client disconnected")

# Start the WebSocket server
print("hello")
start_server = websockets.serve(websocket_handler, "localhost", 8080)
print("h")
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
print("hii")
