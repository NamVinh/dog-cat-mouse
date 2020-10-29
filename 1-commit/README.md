this project is just a demo how to use git

// git init
// git status
// git add

// git log
// git show
// git diff

// working directory 
// staging area
// git repository

// git checkout --<file> (old) == git restore <file> (new) working directory
// git reset HEAD <file> (old) == git restore --staged (new) unstaged

// git checkout -b <branch> (branching)
// git checkout <branch>
// git merge master <-- feature/.... 1. checkout A 2. merge
// git branch -D <branch>

// git reset --soft <to_commit> return staging area
// git reset --mixed <to_commit> return working directory
// git reset --hard <to_commit> removed

// git revert
// .gitignore

// git push
// git push origin master ( first time)
// git remote add origin ... 
// git remote -v

// git config --global credential.helper store
// not recommend (~/. git-credentials)

// git config --global credential.helper "cache --timeout=18000"

// google "gnome-keyring" "git ssh"

// git clone
// git pull

// Pull request
// 1. git checkout -b <feature-branch>
// 2. git push origin <branch>
// 3. create a pull request on github
// 4. review code
    4.1 reivew code online (github)
    4.2 fetch branch into local to test offline (optional) and git fetch branch review code
    4.3 approvethe pull request
// 5. merge to master


// Resolve conflicts
when will conflicts happen ?
 // 1. changing the same file + same line 
 // 2. A deleted file X, B modified file X

 Method 1: 
  // 1. Using ' git rebase ' 
  // 2. Resolve conflicts
  // 3. Push again with -f 

Method 2: 
  // 1. Merge updated master to feature branch
  // 2. Resolve conflicts
  // 3. Commit and push
