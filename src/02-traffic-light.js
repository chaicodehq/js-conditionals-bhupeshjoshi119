/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {

  let action;
  // Your code here
  switch (color) {
  case 'GREEN':
    action = "Go";
    break;
  case 'Green':
    action = "Go";
    break;
  case 'green':
    action="Go";
    break;

  case 'YELLOW':
    action="Slow Down";
    break;

  case 'Yellow':
    action="Slow Down";
    break;

  case 'yellow':
    action="Slow Down";
    break;


  case 'red':
    action = "STOP";
    break;
  case 'Red':
    action = "STOP";
    break;
  
  case 'RED':
    action="STOP";
    break;


  case 'flashing red':
    action = "STOP AND PROCEED WITH CAUTION";
    break;

  case 'Flashing Red':
    action = "STOP AND PROCEED WITH CAUTION";
    break;

  case 'FLASHING RED':
    action = "STOP AND PROCEED WITH CAUTION";
    break;
  case  'default':
    action = "Saturday";
}
  return action;
}
