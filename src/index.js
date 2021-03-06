const impl = require('./layout');

// registers the extension on a cytoscape lib ref
let register = function( cytoscape ){
  if( !cytoscape ){ return; } // can't register if cytoscape unspecified

  cytoscape( 'layout', 'elk', impl ); // register with cytoscape.js
};

if( typeof cytoscape !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
  // eslint-disable-next-line no-undef
  register( cytoscape );
}

module.exports = register;
