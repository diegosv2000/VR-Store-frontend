import React from 'react';
import { Card, InputForm, TextArea } from 'components';
import search from 'assets/search.svg';
import plus from 'assets/plus.svg';
import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridGap: '1rem',
    width: '100%',
    padding: '2.5rem',
  },
  headerAdmin: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& h2': {
      fontSize: '1.5rem',
    },
    '& div': {
      background: '#F8F8F8',
      padding: '0.5rem 1.5rem',
      fontSize: '0.8rem',
      fontWeight: '600',
      borderRadius: '0.2rem',
    },
  },
  addContent: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    float: 'right',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0, 0, 0, auto',
    '& input': {
      padding: '0.5rem',
      borderRadius: '100px',
      paddingLeft: '2.3rem',
      fontSize: '0.8rem',
      border: 'none',
      background: '#F5F5F5',
      marginRight: '1rem',
    },
    '& img': {
      position: 'relative',
      left: '2rem',
    },
  },
  addButton: {
    padding: '0.3rem 1.7rem',
    borderRadius: '0.3rem',
    border: 'none',
    background: '#4B0483',
    color: 'white',
    fontWeight: '600',
    fontSize: '0.85rem',
    cursor: 'pointer',
    '& img': {
      with: '0.85rem',
      marginRight: '0.5rem',
    },
  },
  cardsContainer: {
    padding: '1rem',
    background: '#F8F8F8',
    borderRadius: '0.5rem',
    minHeight: '32.5rem',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalForm: {
    padding: '1rem 0',
    background: 'white',
    minWidth: '25rem',
    borderRadius:'0.3rem',
    '& h2': {
      borderBottom: '1px solid #CFD1D6',
      padding: '0 1rem 0.2rem',
    },
  },
  inputsModal: {
    padding: '1rem',
    display:'grid',
    gridGap:'1rem'
  },
  upload:{
    padding:'0.2rem 1rem',
    backgroundColor:'#2DEE7A',
    color:'black',
    fontWeight:'600',
    borderRadius:'0.2rem',
    border:'none',
    margin:'0 auto 0 0'
  }
}));
const Admin = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerAdmin}>
        <h2>Todos los Productos</h2>
        <div>Hoy: May 27, 2021</div>
      </div>
      <div>
        <div className={classes.addContent}>
          <div className={classes.search}>
            <img src={search} alt="search" />
            <input placeholder="Search..." />
          </div>
          <button className={classes.addButton} onClick={handleOpen}>
            <img src={plus} alt="plus" /> Añadir producto
          </button>
        </div>
      </div>
      <div className={classes.cardsContainer}>
        <Card
          title="Mermelada de Frambuesa"
          section="Lácteos"
          src="http://assets.stickpng.com/images/5aaba1567603fc558cffbfce.png"
        />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalForm}>
            <h2>Agregar Producto</h2>
            <div className={classes.inputsModal}>
              <InputForm
                label="Nombre"
                placeholder="Fanta Light"
                type="text"
              />
              <InputForm
                label="Sección"
                placeholder="Bebidas"
                type="text"
              />
              <InputForm
                label="Precio (S/.)"
                placeholder="1.50"
                type="text"
              />
              <TextArea label="Descripción"
                placeholder="Fanta light es una bebiba..."
                type="text" /><button className={classes.upload}>Subir fotos</button>
            </div>
            <button className={classes.addButton} style={{margin:'1rem'}}>Agregar producto</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Admin;
