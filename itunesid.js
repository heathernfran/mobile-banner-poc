if ( /(iPad).*AppleWebKit.*Mobile.*Safari/.test(navigator.userAgent) ) {
  var headNode = document.getElementsByTagName("head")[0];
  var sbNode = document.createElement('meta');
  sbNode.name = 'apple-itunes-app';
  sbNode.content = 'app-id=593796072';
  headNode.appendChild(sbNode);
} else if ( /(iPhone|iPod).*AppleWebKit.*Mobile.*Safari/.test(navigator.userAgent) ) {
  var headNode = document.getElementsByTagName("head")[0];
  var sbNode = document.createElement('meta');
  sbNode.name = 'apple-itunes-app';
  sbNode.content = 'app-id=454826710';
  headNode.appendChild(sbNode);
}
