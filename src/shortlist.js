import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from './panel';
import { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { isEmpty } from 'lodash';
import ArrowForward from 'material-ui-icons/ArrowForward';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ArrowUpward from 'material-ui-icons/ArrowUpward';
import ArrowDownward from 'material-ui-icons/ArrowDownward'

export default class Shortlist extends Component {
  constructor(props) {
    super(props);
    const { list, value } = props;
    this.state = { list: this.getUpdatedList(list, value), shortlist: value || [],
      selectedListItem: {}, selectedShortlistItem: {} };
    this.onItemSelect = this.onItemSelect.bind(this);
    this.onItemUnselect = this.onItemUnselect.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.indexOf = this.indexOf.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const { list, value } = newProps;
    this.setState({ list: this.getUpdatedList(list, value), shortlist: value || [] });
  }

  onItemSelect() {
    const { shortlist, selectedListItem, list } = this.state;
    if (!isEmpty(selectedListItem)) {
      shortlist.push(selectedListItem);
      const index = list.indexOf(selectedListItem);
      list.splice(index, 1);
      this.setState({ selectedListItem: {} });
      const { onChange, docField } = this.props;
      onChange(docField, shortlist);
    }
  }

  onItemUnselect() {
    const { list, selectedShortlistItem, shortlist } = this.state;
    if (!isEmpty(selectedShortlistItem)) {
      list.push(selectedShortlistItem);
      const index = shortlist.indexOf(selectedShortlistItem);
      shortlist.splice(index, 1);
      this.setState({ selectedShortlistItem: {} });
      const { onChange, docField } = this.props;
      onChange(docField, shortlist);
    }
  }

  getUpdatedList(list, shortlist) {
    if (shortlist) {
      const newList = list;
      shortlist.forEach((item) => {
        const index = this.indexOf(newList, item);
        if (index >= 0) {
          newList.splice(index, 1);
        }
      });
      return newList;
    }
    return list;
  }

  indexOf(arr, item) {
    const { compareKey } = this.props;
    const givenItem = JSON.stringify(item);
    let index = -1;
    if (compareKey) {
      for (let i = 0; i < arr.length; i++) {
        const currentItem = arr[i];
        if (item[compareKey] === currentItem[compareKey]) {
          index = i;
          break;
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        const currentItem = JSON.stringify(arr[i]);
        if (currentItem === givenItem) {
          index = i;
          break;
        }
      }
    }
    return index;
  }

  moveDown() {
    const { selectedShortlistItem, shortlist } = this.state;
    const index = shortlist.indexOf(selectedShortlistItem);
    if (!isEmpty(selectedShortlistItem) && (index < shortlist.length - 1)) {
      shortlist.splice(index, 1);
      shortlist.splice(index + 1, 0, selectedShortlistItem);
      const { onChange, docField } = this.props;
      onChange(docField, shortlist);
      this.forceUpdate();
    }
  }

  moveUp() {
    const { selectedShortlistItem, shortlist } = this.state;
    const index = shortlist.indexOf(selectedShortlistItem);
    if (!isEmpty(selectedShortlistItem) && index) {
      shortlist.splice(index, 1);
      shortlist.splice(index - 1, 0, selectedShortlistItem);
      const { onChange, docField } = this.props;
      onChange(docField, shortlist);
      this.forceUpdate();
    }
  }

  renderShortList() {
    const { selectedShortlistItem, shortlist } = this.state;
    const { displayKey } = this.props;
    return shortlist.map((item) => {
      const isSelected = (selectedShortlistItem === item);
      const style = isSelected ? { backgroundColor: 'lightskyblue' } :
      { backgroundColor: 'white' };
      const value = item[displayKey];
      return (
        <ListItem
          key={value}
          style={style}
          button
          onClick={() => {
            const newItem = isSelected ? {} : item;
            this.setState({ selectedShortlistItem: newItem });
          }}
        >
          <ListItemText>{value}</ListItemText>
        </ListItem>
      );
    });
  }

  renderFullList() {
    const { selectedListItem, list = [] } = this.state;
    const { displayKey } = this.props;
    return list.map((item) => {
      const isSelected = (selectedListItem === item);
      const style = isSelected ? { backgroundColor: 'lightskyblue' } :
      { backgroundColor: 'white' };
      const value = item[displayKey];
      return (
        <ListItem
          key={value}
          button
          style={style}
          onClick={() => {
            const newItem = isSelected ? {} : item;
            this.setState({ selectedListItem: newItem });
          }}
        >
          <ListItemText>{value}</ListItemText>
        </ListItem>
      );
    });
  }

  render() {
    const { displayName, subtitle } = this.props;
    return (
      <Panel title={displayName} subtitle={subtitle} elevation={2}>
        <div className="row middle-xs">
          <div className="col-xs-5 col-lg-5 col-sm-5 col-md-5">
            <div style={{ paddingBottom: '1em' }} className="row center-xs">Available</div>
            <Paper elevation={1} style={{ height: 180, overflowY: 'auto' }}>
              {this.renderFullList()}
            </Paper>
          </div>
          <div className="col-xs-1 col-lg-1 col-sm-1 col-md-1">
            <div className="row column-lg column-md column-sm">
              <div className="row center-lg center-md center-sm ">
                <IconButton
                  style={{ marginBottom: '1em' }}
                  onClick={this.onItemSelect}
                ><ArrowForward />
                </IconButton>
              </div>
              <div className="row center-lg center-md center-sm ">
                <IconButton
                  onClick={this.onItemUnselect}
                ><ArrowBack />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="col-xs-5">
            <div style={{ paddingBottom: '1em' }} className="row center-xs">Selected</div>
            <Paper elevation={1} style={{ height: 180, overflowY: 'auto' }}>
              {this.renderShortList()}
            </Paper>
          </div>
          <div className="col-xs-1">
            <div className="row middle-xs column-xs">
              <div className="row center-xs">
                <IconButton style={{ marginBottom: '1em' }} onClick={this.moveUp}>
                  <ArrowUpward />
                </IconButton>
              </div>
              <div className="row center-xs">
                <IconButton onClick={this.moveDown}>
                  <ArrowDownward />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    );
  }
}

Shortlist.propTypes = {
  list: PropTypes.array,
  displayName: PropTypes.string,
  subtitle: PropTypes.string,
  value: PropTypes.any,
  docField: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  displayKey: PropTypes.string,
  compareKey: PropTypes.string,
};
