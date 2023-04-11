---
title: "Simple Bash Commands"
description: "I'm no bash expert, not even nearly. However there's a bunch of bash commands that I use daily (or at least semi frequently). This blog post is for you (and me)."
tags:
  - code
createdDate: April 4, 2023
---

# Simple Bash Commands

Let me preface this with: I'm no bash expert, not even nearly. However, there's a bunch of bash commands that I use daily (or at least semi frequently) that might be of use to you (and me). Where applicable I'll tell you when you can use `/bin/sh` (https://man.cx/sh) or `/bin/bash` (https://man.cx/bash)

## If/Elif/Else

I'm always writing bash scripts to do things and in almost every one I need to use a variant of the `if` statement.

A simple `if` statement looks like

Generally an `if` statement will look like:

```sh
if [ ! -z $THING ]
then
  # -z returns true if $THING is empty. We negate the result using ! -z which checks if the variable is NOT empty
  echo "$THING exists";
fi
```

An `if/else` will look like:

```sh
# THING='thing'
if [ ! -z $THING ]
then
  echo "$THING exists";
else
  echo "THING does not exist";
fi
```

And then finally an `if/elif/else` will look like:

```sh
THING='thing'
if [ $THING = 'thing' ]
then
  echo "$THING equals thing";
elif [ ! -z $THING ]
then
  echo "$THING exists";
else
  echo "THING does not exist";
fi
```

You can then nest the if statements and the next thing you'll want to learn is the various operators you can use in the if statement.

There's a bunch of every day bash commands that I use

# Git

## Undo the last git (local) commit

Sometimes you commit the wrong thing, run the above command. It will uncommit the previous commit. I find this useful, I often commit into the wrong branch or so and have to undo the change.

```sh
git reset --soft HEAD~
```

For me, when thinking about it, actual usage would look like:

```sh
git reset --soft HEAD~ # Reset the last commit
git stash
git checkout my-intended-branch
git pull my-intended-branch
git stash pop
git add .
git commit -m "I meant to commit here"
```

Something like that anyway.

## Untrack a file

There's a bunch of reasons you'd want to untrack a file, and most of them begin with `git add .`. To untrack a file in Git it's a 3 step process.

1. Add the file to your `.gitignore`
2. Tell Git to untrack the file
3. Make a commit to untrack the file remotely.

```sh
git rm --cached path/to/file
```

You can also untrack an entire folder with `-r`

```sh
git rm -r --cached path/to/folder
```

After you've done this, if you feel brave `git add . && git commit -m "untrack so and so file"` otherwise do the more sane `git commit -m "untrack so and so file" path/to/file`

## Kill Node on port (macos)

I do web development, often involving NodeJS and sometimes processes don't exit gracefully and ports aren't freed. When this happens you need to manually kill the node process using the port. The first step is finding the process using the port.

```sh
lsof -i tcp:$PORT
```

The output of this command will look like:

```sh
node      6553 matthewgould   34u  IPv6 0xb5df5886bbebd0c3      0t0  TCP localhost:hbci->localhost:55782 (ESTABLISHED)
```

The number after `node` is the port you are looking for.

Now we kill the process with fire

```sh
kill -9 6553
```

There's no output from this command, but you can check using the `lsof` command, that the port is now empty.
