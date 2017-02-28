import moment from 'moment';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Connect } from '../../Redux';
import Styles from '../Styles/LegalScreenStyle';
import Markdown, { parseFile } from '../../Components/Markdown';

class DocumentScreen extends Component {

  constructor(props) {
    super(props);

    this.state = parseFile(props.file);
  }

  render() {
    const { metadata, content } = this.state;

    const updatedOn = moment(metadata.updated_at).format('MMMM Do, YYYY');

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

export default Connect(DocumentScreen);
