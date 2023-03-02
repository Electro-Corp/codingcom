import express from 'express';
import { spawn } from 'child_process';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

// Set up middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(path.resolve(), 'public')));
// Set up routes
app.post('/', (req, res) => {
  const { code } = req.body;

  const child = spawn('g++', ['-o', 'program', '-x', 'c++', '-'], { shell: true });

  child.stdin.write(code);
  child.stdin.end();
  child.on('close', (code) => {
    if (code === 0) {
      const program = spawn('./program', { shell: true });
      let output = '';

      program.stdout.on('data', (data) => {
        output += data.toString();
      });

      program.stderr.on('data', (data) => {
        output += data.toString();
      });

      program.on('close', () => {
        res.send(output);
      });
    } else {
      res.send(`Error: Compilation error (exit code ${code})`);
    }
  });
});

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
