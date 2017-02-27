import moment from 'moment';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Connect } from '../../Redux';
import Styles from '../Styles/LegalScreenStyle';
import Markdown, { parseFile } from '../../Components/Markdown';

import file from './terms-of-service.md';

class TermsOfServiceScreen extends Component {

  constructor(props) {
    console.log('hello');
    super(props);

    this.state = {
      termsOfService: parseFile(file),
    };
  }

  render() {
    const { metadata, content } = this.state.termsOfService;

    const updatedOn = moment(metadata.updated_at).format('MMMM Do, YYYY');

    console.tron.display({
      name: 'Terms of Service',
      value: { metadata, content },
    });

    return (
      <View style={Styles.mainContainer}>
        <Markdown content={content} style={Styles}>
          <Text style={Styles.documentName}>{metadata.document}</Text>
          <Text style={Styles.updatedOn}>Last updated on {updatedOn}</Text>
        </Markdown>
      </View>
    );
  }

}

export default Connect(TermsOfServiceScreen);
