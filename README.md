# Random Streak 🎯

![Node.js](https://img.shields.io/badge/Node.js-v22.19.0-green)
![License](https://img.shields.io/badge/License-ISC-blue)

A Node.js script to automatically generate multiple commits with randomized dates to simulate a **streak** on GitHub. Perfect for visualizing contributions on your GitHub profile graph.

---

## 🚀 Features

* Generates commits with **randomized dates**.
* Updates a JSON file (`data.json`) with each commit date.
* Automatically **pushes commits to GitHub**.
* Fully **asynchronous**, safe for large numbers of commits.
* Easily extendable for **graphs or analytics**.

---

## 🛠 Installation

```bash
git clone https://github.com/Krnkreddy/Random-streak.git
cd Random-streak
npm install
```

> Make sure `"type": "module"` is set in `package.json` for ES module support.

---

## ⚡ Usage

```bash
node index.js
```

* Default: **100 commits** with random dates.
* Modify the number in `makeCommits(n)` to adjust.

---

## 📁 Files

* `index.js` — Main script for generating commits.
* `data.json` — Stores the latest commit date.
* `package.json` — Project configuration and dependencies.

---

## 💡 How It Works

1. Generates a random date using **years, weeks, days offsets**.
2. Updates `data.json` with the new date.
3. Commits with that date.
4. Pushes to GitHub.
5. Optionally, use `drawGraph("Krnk Reddy")` to visualize contributions.

---

## ⚠️ Notes

* Ensure **Git is installed** and configured.
* Run in a repository where you have **push permissions**.
* Avoid excessive commits on public repositories.

---

## 📜 Credits

* Inspired by the [goGreen GitHub project](https://github.com/fenrir2608/goGreen).
* Tutorial & guidance: [YouTube video](https://youtu.be/LlkcvvGbs9I?si=m6N6yA8JUVdw8A_d).

---

## 📝 License

This project is licensed under the **ISC License**.