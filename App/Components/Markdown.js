import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

type MarkdownProps = {
  content: string,
}

export default class Markdown extends Component {

  props: MarkdownProps

  render() {
    const { content, style, children } = this.props;

    return (
      <ScrollView style={style.container}>
        {children}
        {_.map(content, (line, i) => {
          if (line[0] === '#') {
            return <Text key={i} style={style.header}>{line.substr(2)}</Text>;
          } else if (line === '') {
            return <View key={i} style={style.spacer} />;
          }
          return <Text key={i} style={style.body}>{line}</Text>;
        })}
      </ScrollView>
    );
  }

}

export function parseFile(file) {
  const lines = file.split(/\n/);

  const metadata = {};
  const index = _.findIndex(lines, (line) => {
    if (line === '') {
      return true;
    }

    const parts = line.split(/: /);
    metadata[parts[0]] = parts[1];

    return false;
  });

  const content = _.slice(lines, index + 1);
  return { metadata, content };
}
