🎯 Connect 4 Game

A browser-based implementation of the classic Connect 4 game built with HTML, CSS, and JavaScript.
Play against another player on the same device — drop disks, watch for four in a row, and have fun! 🟡🔴

🕹️ Live Demo

👉 https://lohitha-2206.github.io/connect-4/

🧠 About

Connect 4 is a two-player connection game in which players take turns dropping colored discs into a vertical grid.
The first player to form a horizontal, vertical, or diagonal line of four of their own discs wins the game.

🚀 Features

✔ 7×6 grid (standard Connect 4 size)
✔ Two player mode (no AI — player vs player)
✔ Highlighted winning line
✔ Reset button to start a new game
✔ Responsive and interactive UI

📂 Project Structure
connect-4/
├── index.html
├── styles.css
├── script.js
└── README.md
🛠️ How to Play

Open the live demo or clone the repository

Click any column to drop your disc

Alternate turns between Player 1 and Player 2

First to connect 4 in a row wins!

Press Reset to restart the game at any time

💻 Installation (Optional)

If you want to run locally:

Clone the repo

git clone https://github.com/lohitha-2206/connect-4.git

Open index.html in your browser

open index.html

No additional setup or backend required!

⚙️ Technologies Used
Technology	Role
HTML	Structure
CSS	Styling
JavaScript	Game logic
🧪 How It Works (Brief)

The board is represented as a 2D array

Clicking a column drops a disc into the lowest available slot

After each move, the game checks for:

Horizontal 4-in-a-row

Vertical 4-in-a-row

Diagonal 4-in-a-row

If found, the game ends and highlights the winning pattern

🚩 Game Rules Summary

Players take turns dropping discs

Player 1 goes first

Only one disc can be dropped per turn

Diagonal, vertical, or horizontal 4 in a row = Win

Board fills from bottom to top

📌 Future Enhancements

✔ Add AI/Computer opponent
✔ Animations & sound effects
✔ Score tracking for multiple rounds
✔ Player names & color customization
✔ Mobile optimized controls
