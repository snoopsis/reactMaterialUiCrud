import React, { Component } from 'react';
import List from './Components/List/List';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {

  state = {
    items: [
      { id: 1, currentItem: {name: 'Aguinaldo', service: 'Piloto', price: 150}, editMode: false, editItem: {} },
      { id: 2, currentItem: {name: 'Marcelo',  service: 'Trolha',    price: 250}, editMode: false, editItem: {} },
      { id: 3, currentItem: {name: 'Leilane', service: 'Manequim',       price: 350}, editMode: false, editItem: {} }
    ],
    itemsLastId: 3,
    newItem: { id: '', currentItem: {name: '', service: '', price: ''}, editMode: false, editItem: ''}
  };

  deleteItemHandler = itemIndex => {
      const items = [...this.state.items];
      items.splice(itemIndex,1);
      this.setState({items: items});
  };

  newInputChangeHandler = (event,type) => {
      const newItem = {...this.state.newItem};
      newItem.currentItem[type] = event.target.value;
      this.setState({newItem: newItem});
  };

  addItemHandler = () => {
      let itemsLastId = this.state.itemsLastId;
      itemsLastId++;

      const newItem = {...this.state.newItem};
      newItem.id = itemsLastId;

      this.setState({
         items: [...this.state.items,newItem],
         itemsLastId: itemsLastId,
         newItem: { id: '', currentItem: {name: '', service: '', price: ''}, editMode: false, editItem: ''} 
      });
  };

  changeClickItemHandler = index => {
      const items = [...this.state.items];
      items[index].editItem = {...items[index].currentItem};
      items[index].editMode = true;
      this.setState({items: items});
  };

  changeEditInputHandler = (event, index, type) => {
      const items = [...this.state.items];
      items[index].editItem[type] = event.target.value;
      this.setState({items: items});
  };

  saveItemHandler = index => {
      const items = [...this.state.items];
      items[index].currentItem = {...items[index].editItem};
      items[index].editMode = false;
      this.setState({items: items});
  };

  render() {   

    return (
        <div align="center">
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            React Material UI - CRUD
          </Typography>
        </Toolbar>
      </AppBar>
            <Grid container style={{maxWidth: 800, marginTop: 20}} direction="row" justify="center" alignItems="center">
            <Grid item>
            <TextField style={{marginRight: 10, marginBottom: 20}} label="Nome" value={this.state.newItem.currentItem.name} onChange={(event)=>this.newInputChangeHandler(event,'name')}/>
            </Grid>
            <Grid item>
            <TextField style={{marginRight: 10, marginBottom: 20}} label="Servico" value={this.state.newItem.currentItem.service} onChange={(event)=>this.newInputChangeHandler(event,'service')}/>
            </Grid>
            <Grid item>
            <TextField style={{marginRight: 10, marginBottom: 20}} label="Valor" value={this.state.newItem.currentItem.price} onChange={(event)=>this.newInputChangeHandler(event,'price')}/>
            </Grid>
            <Grid item xs={12} style={{textAlign: 'center'}}>
            <Button style={{marginRight: 10, marginBottom: 20}} mini variant="fab" color="primary" onClick={this.addItemHandler}>
                <AddIcon />
            </Button>
            </Grid>
            <List items={this.state.items} delete={this.deleteItemHandler} change={this.changeClickItemHandler} changeEdit={this.changeEditInputHandler} save={this.saveItemHandler} />
        </Grid>
        </div>
    );
  };
};

export default App;
