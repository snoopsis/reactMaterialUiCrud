import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const list = (props) => {

    return(
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
        <Paper>
        <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Servico</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Acoes</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {props.items.map((item, index) => {
              let itemBlock = null;
              if (item.editMode){
                  itemBlock = (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>
                            <TextField label="Nome" value={item.editItem.name} onChange={(event)=>props.changeEdit(event,index,'name')}/>
                        </TableCell>
                        <TableCell>
                            <TextField label="Servico" value={item.editItem.service} onChange={(event)=>props.changeEdit(event,index,'service')}/>
                        </TableCell>
                        <TableCell>
                            <TextField label="Valor" value={item.editItem.price} onChange={(event)=>props.changeEdit(event,index,'price')}/>
                        </TableCell>
                        <TableCell>
                            <Button mini variant="fab" color="primary" onClick={()=>props.save(index)}>
                                <SaveIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                  )
              } else {
                 itemBlock = (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.currentItem.name}</TableCell>
                        <TableCell>{item.currentItem.service}</TableCell>
                        <TableCell>{item.currentItem.price}</TableCell>
                        <TableCell>
                            <Button mini variant="fab" color="primary" onClick={()=>props.change(index)} style={{marginRight: 10}}>
                                <EditIcon />
                            </Button>
                            <Button mini variant="fab" color="primary" onClick={()=>props.delete(index)}>
                                <DeleteIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                 ) 
              }
              return itemBlock
            })}          
            </TableBody>
        </Table>
        </div>
        </Paper>
        </Grid>    
        </Grid>
    );
};

export default list;