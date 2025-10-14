// even safer and more robust version

import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const git = simpleGit(); // single Git instance

// Function to create one commit with a given date offset
const markCommit = async (x, y) => {
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = { date };
  await jsonfile.writeFile(path, data); // update JSON
  await git.add([path]);
  await git.commit(`Commit for ${date}`, { "--date": date });

  console.log(`✅ Commit created for date: ${date}`);
};

// Function to make multiple commits
const makeCommits = async (n) => {
  for (let i = 0; i < n; i++) {
    const x = random.int(0, 54);
    const y = random.int(0, 6);
    console.log(`Creating commit ${i + 1} (x=${x}, y=${y})`);
    await markCommit(x, y);
  }

  await git.push();
  console.log("✅ All commits pushed!");
};

// Run 100 commits
makeCommits(100).catch(err => console.error("❌ Error:", err));
