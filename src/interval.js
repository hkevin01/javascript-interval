// Modernized interval logic
// Used by autoupdate feature

/**
 * Starts a periodic refresh to check tasks.
 * @param {Function} checkTasks - Function to execute on each interval.
 * @param {number} delay - Interval delay in milliseconds.
 * @returns {number} Interval ID
 */
export function startRefresh(checkTasks, delay = 1000) {
  return setInterval(() => {
    checkTasks();
  }, delay);
}

/**
 * Stops the periodic refresh.
 * @param {number} intervalId - The interval ID returned by startRefresh.
 */
export function stopRefresh(intervalId) {
  clearInterval(intervalId);
}
