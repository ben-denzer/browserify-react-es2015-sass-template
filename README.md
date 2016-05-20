This is a boilerplate setup to help you work locally with React and SASS. 

You'll need NPM installed on your computer to use this. If you don't have it, install Node.js.

After you've cloned this repo, cd into the 'browserify-react-es2015-sass-template' folder. (Feel free to re-name it first).

Type 'npm install'.

Type 'npm start' - you can also type 'gulp' for the same result.

Open your browser to http://localhost:8080, you should see some text on the screen.

**When you're editing / creating files, don't ever edit in the 'dist' folder, files from the 'src' folder are transformed and they are piped to 'dist'. 

If you don't know SCSS that's fine, you can just type regular css into the src/myStyles.scss file and it will work normally.

**Make sure you look at your terminal or command prompt regularily. If there is an error, the live-updating will not work and you probably won't see an error in your console but you will see it in the terminal. A lot of times you have to read through a few lines of nonsense, but you'll usually find good info in the error messages. 

**When you restart the server ('npm start' or 'gulp'), you will need to refresh your browser.

Browserify can take a few seconds to compile everything, so when you update a javascript file your browser will wait for Browserify before refreshing. 

If you like to name your React files with '.jsx' instead of '.js', open up gulpfile.js and follow the instructions on line 44. 