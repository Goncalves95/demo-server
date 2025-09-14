Signal Effects Cleanup Functions
When working with Signal effects, you sometimes might need to perform some cleanup work before the effect function runs again (e.g., to clear some timer or something like that).

Angular's effect() allows you to do that!

It does provide you with an onCleanup hook which you can execute as part of your effect function to define what should happen before the effect code runs the next time:

effect((onCleanup) => {
  const tasks = getTasks();
  const timer = setTimeout(() => {
    console.log(`Current number of tasks: ${tasks().length}`);
  }, 1000);
  onCleanup(() => {
    clearTimeout(timer);
  });
});