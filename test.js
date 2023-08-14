var timeLimit = function(fn, t) {
	return async function(...args) {
        new Promise((resolve,rejected) => {
          setTimeout(() => {
            rejected("Time Limit Exceeded")
          },t)
        })

     
        fn(...args)
        .then((result) => {
          clearTimeout(timer); // Clear the timer if fn completes before the time limit
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timer); // Clear the timer in case of an error too
          reject(error);
        });
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
