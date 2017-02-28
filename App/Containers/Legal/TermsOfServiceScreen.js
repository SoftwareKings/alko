import React, { Component } from 'react';

import DocumentScreen from './DocumentScreen';
import file from './terms-of-service.md';

class TermsOfServiceScreen extends Component {

  render = () => <DocumentScreen file={file} />

}

export default TermsOfServiceScreen;
