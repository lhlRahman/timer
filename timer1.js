const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  const delay = parseInt(args[i]);

  if (!isNaN(delay) && Number.isInteger(delay) && delay >= 0) {
    setTimeout(function() {
      process.stdout.write('\x07');
    }, delay * 1000);
  }
}
