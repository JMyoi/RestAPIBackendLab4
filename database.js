// database.js
// This file sets up and initializes our LowDB database
// 
// ⚠️ IMPORTANT: LowDB 7.x is ESM-only!
// - Must use import/export (not require/module.exports)
// - Must have "type": "module" in package.json

// TODO: Import JSONFilePreset from 'lowdb/node'
// Hint: import { JSONFilePreset } from 'lowdb/node';
import { JSONFilePreset } from 'lowdb/node';

// TODO: Define your default data structure
// This is what your database looks like when first created
// Replace 'yourResource' with your chosen resource name (e.g., tasks, books, movies)

const defaultData = { 
  job: [
    {
      id:1,
      employerName: "Amazon",
      jobTitle: "Software Developer",
      jobLocation: "New York",
      jobSalary: 100000,
      jobLink: "https://www.amazon.jobs/en/jobs/3092174/software-engineer",
      jobDescription: "Twitch is the world’s biggest live streaming service, with global communities built around gaming, entertainment, music, sports, cooking, and more. It is where thousands of communities come together for whatever, every day. We’re about community, inside and out. You’ll find coworkers who are eager to team up, collaborate, and smash (or elegantly solve) problems together. We’re on a quest to empower live communities, so if this sounds good to you, see what we’re up to on LinkedIn and X,  and discover the projects we’re solving "

    }, 
    {
      id:2,
      employerName: "The DYO Inc.",
      jobTitle: "Junior Software Engineer",
      jobLocation: "New York",
      jobSalary: 70000,
      jobLink: "https://app.joinhandshake.com/e/988295",
      jobDescription: "We're looking for a Junior Software Engineer to join our team and contribute to an exciting project that combines modern web technologies with 3D visualization and e-commerce capabilities"
    }, 
    {
      id:3,
      employerName: "Crunchy Tech",
      jobTitle: "Software Engineering Intern",
      jobLocation: "California",
      jobSalary: 60000,
      jobLink: "https://app.joinhandshake.com/jobs/10496109?searchId=",
      jobDescription: "Crunchy Tech is looking for a driven and talented Computer Science or Computer Engineering student to join our team for a one-semester internship during the Spring 2026 term. This is an excellent opportunity for a student in their junior or senior year to gain hands-on experience in a fast-paced, innovative tech environment. "
    }
  ] 
};

// TODO: Initialize the database with JSONFilePreset
// Hint: await JSONFilePreset('db.json', defaultData)
// Note: Top-level await works in ESM!
const db = await JSONFilePreset('db.json', defaultData);

// Export the database so other files can use it
export default db;

/*
 * ====================================
 * LowDB 7.x Quick Reference
 * ====================================
 * 
 * READING DATA:
 *   await db.read();
 *   const items = db.data.yourResource;
 * 
 * CREATING (using update - recommended):
 *   await db.update(({ yourResource }) => yourResource.push(newItem));
 * 
 * CREATING (manual approach):
 *   await db.read();
 *   db.data.yourResource.push(newItem);
 *   await db.write();
 * 
 * UPDATING:
 *   await db.read();
 *   const index = db.data.yourResource.findIndex(item => item.id === id);
 *   db.data.yourResource[index] = updatedItem;
 *   await db.write();
 * 
 * DELETING:
 *   await db.update(({ yourResource }) => {
 *     const index = yourResource.findIndex(item => item.id === id);
 *     yourResource.splice(index, 1);
 *   });
 * 
 * ⚠️ GOTCHA: The db.json file won't exist until you write data for the first time!
 * 
 * ⚠️ LIMITATIONS (for learning only, not production):
 *   - Max ~1,000 records before performance issues
 *   - ~10MB file size limit
 *   - Full file rewrite on every save
 *   - No concurrent write support
 */
