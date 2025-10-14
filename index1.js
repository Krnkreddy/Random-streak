// for simple random commits

import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const git = simpleGit(); // create one instance

const markCommit = async (x, y) => {
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = { date };
  await jsonfile.writeFile(path, data);
  await git.add([path]);
  await git.commit(`Commit for ${date}`, { "--date": date });
};

const makeCommits = async (n) => {
  for (let i = 0; i < n; i++) {
    const x = random.int(0, 54);
    const y = random.int(0, 6);
    console.log(`Creating commit ${i + 1}:`, x, y);
    await markCommit(x, y);
  }
  await git.push();
  console.log("✅ All commits pushed!");
};

makeCommits(100);
// Change the number to increase/decrease the number of commits