# Snake Client Project

A simple Snake game client built with Node.js that connects to a multiplayer Snake server. This project was part of a learning exercise to understand TCP networking, event handling, and modular code organization in JavaScript.

## Features

- Connects to a Snake game server using TCP (via Node's `net` module)
- Controls the snake using WASD keys
- Sends pre-defined messages to the server using custom keybindings
- Clean modular structure using constants and input modules

### Prerequisites

- Node.js installed on your system
- Access to a Snake game server (you'll need the correct IP and port)

## Project Structure

snake-client/
│
├── client.js         # Handles the TCP connection
├── constants.js      # Stores static configuration like IP and PORT
├── input.js          # Handles keyboard input and message sending
└── play.js           # Entry point to run the client


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.
- You should see "Connecting ..." and then your snake will appear on the server screen.

Controls

W - Move Up

A - Move Left

S - Move Down

D - Move Right

Q - Say "Watch out!"

E - Say "I'm coming!"

Z - Say "LOL"

X - Say "So fast!"

C - Say "Nice move!"

Ctrl + C - Quit the game