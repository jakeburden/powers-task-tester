# Powers Lab Task Tester
> Automatically performs tasks to check that they complete.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install powers-task-tester
```

## Usage

> With npm

```bash
$ powers-task-tester <task url>
```

> or use npx

```bash
$ npx powers-task-tester <task url>
```

> Close the program

To end the program, press `ctrl-c` in the terminal window that you've run the program.

### What it does

`powers-task-tester` will automatically cycle through the page of a task. It will attempt to press the <key>q</key> and <key>e</key>.

You should see two things happen:

1. A private chromium window will open the task URL. If the task tester it working, you should see the tasks progress as expected.
1. In your terminal, you'll see a log of `amp` values and possibly a log of messages such as `Failed to load resource: the server responded with a status of 404 ()`.

If the task fails to progress in the browser window, and you see an error message rather than a log of `amp` values, something has probably gone wrong, in which case see the **Troubleshooting** section below.

### Troubleshooting

The most likely issue that one would run into is the task tester being unable to read the `amp` values of a task, thus not knowing if <key>q</key> or <key>e</key> should be pressed.

If `amp` values are not being output by a task (can be checked by looking at the devtools console), copy this commit to the task repo.

https://github.com/PowersLab1/ACH_ling/commit/e5584177304f2683655b516dfdb0325fbf870d11

For most tasks, you can copy this commit either by copy/pasting the single line of code change, or doing the following:

```bash
# In the task repo
$ git remote add ling git@github.com:PowersLab1/ACH_ling.git
$ git fetch ling
$ git cherry-pick e5584177304f2683655b516dfdb0325fbf870d11
```

## License

MIT
