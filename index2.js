// for slow and steady random commits

import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random"; // npm install random

const path = "./data.json";
const git = simpleGit();

// Recursive function to make multiple commits
async function makeCommits(n, e, l) {
  if (n === e) return;

  // Generate random x and y values
  const x = random.int(0, 54);
  const y = random.int(0, 6);

  // Generate a random date based on parameters
  const date = moment()
    .subtract(l, "y")
    .add(l, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  // Save date to JSON
  const data = { date };
  await jsonfile.writeFile(path, data);

  // Commit and push changes
  await git.add([path]);
  await git.commit(`Update date to ${date}`, { '--date': date });
  await git.push();

  console.log(`✅ Commit ${n + 1} pushed with date: ${date}`);

  // Recurse for next commit
  await makeCommits(n + 1, e, l);
}

// Example usage: make 5 commits with l = 1 year offset
await makeCommits(0, 5, 1);
