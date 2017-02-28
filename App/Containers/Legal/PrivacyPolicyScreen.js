import React, { Component } from 'react';

import DocumentScreen from './DocumentScreen';
import file from './privacy-policy.md';

class PrivacyPolicyScreen extends Component {

  render = () => <DocumentScreen file={file} />

}

export default PrivacyPolicyScreen;
