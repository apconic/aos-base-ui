import React from 'react';
import Panel from './panel';
import { ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import { isEmpty } from 'lodash';

export default class Shortlist extends React.Component {
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
          onTouchTap={() => {
            const newItem = isSelected ? {} : item;
            this.setState({ selectedShortlistItem: newItem });
          }}
        >
          {value}
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
          style={style}
          onTouchTap={() => {
            const newItem = isSelected ? {} : item;
            this.setState({ selectedListItem: newItem });
          }}
        >
          {value}
        </ListItem>
      );
    });
  }

  render() {
    const { displayName, subtitle } = this.props;
    return (
      <Panel title={displayName} subtitle={subtitle} zDepth={1}>
        <div className="row middle-xs">
          <div className="col-xs-5 col-lg-5 col-sm-5 col-md-5">
            <div style={{ paddingBottom: '1em' }} className="row center-xs">Available</div>
            <Paper zDepth={1} style={{ height: 180, overflowY: 'auto' }}>
              {this.renderFullList()}
            </Paper>
          </div>
          <div className="col-xs-1 col-lg-1 col-sm-1 col-md-1">
            <div className="row column-lg column-md column-sm">
              <div className="row center-lg center-md center-sm ">
                <IconButton
                  style={{ marginBottom: '1em' }}
                  onTouchTap={this.onItemSelect}
                  iconClassName="material-icons"
                >arrow_forward
                </IconButton>
              </div>
              <div className="row center-lg center-md center-sm ">
                <IconButton
                  onTouchTap={this.onItemUnselect}
                  iconClassName="material-icons"
                >arrow_back
                </IconButton>
              </div>
            </div>
          </div>
          <div className="col-xs-5">
            <div style={{ paddingBottom: '1em' }} className="row center-xs">Selected</div>
            <Paper zDepth={1} style={{ height: 180, overflowY: 'auto' }}>
              {this.renderShortList()}
            </Paper>
          </div>
          <div className="col-xs-1">
            <div className="row middle-xs column-xs">
              <div className="row center-xs">
                <IconButton
                  style={{ marginBottom: '1em' }}
                  onTouchTap={this.moveUp}
                  iconClassName="material-icons"
                >arrow_upward
                </IconButton>
              </div>
              <div className="row center-xs">
                <IconButton
                  onTouchTap={this.moveDown}
                  iconClassName="material-icons"
                >arrow_downward
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
  list: React.PropTypes.array,
  displayName: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  value: React.PropTypes.any,
  docField: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  displayKey: React.PropTypes.string,
  compareKey: React.PropTypes.string,
};
