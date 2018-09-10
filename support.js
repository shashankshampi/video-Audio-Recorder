function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

if (hasGetUserMedia()) {
  // Good to go!
  alert('getUserMedia() is supported by your browser');
} else {
  alert('getUserMedia() is not supported by your browser');
}
