import React, { useEffect, useState } from 'react';
import { Card, InputForm, TextArea, ImgSelected } from 'components';
import search from 'assets/search.svg';
import plus from 'assets/plus.svg';
import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { storage } from 'firebase-auth';
import axios from 'axios';
import { useHistory } from 'react-router';

const months = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Oct',
  'Nov',
  'Dic',
];

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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gridGap: '1rem',
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
    borderRadius: '0.3rem',
    '& h2': {
      borderBottom: '1px solid #CFD1D6',
      padding: '0 1rem 0.2rem',
    },
  },
  inputsModal: {
    padding: '1rem',
    display: 'grid',
    gridGap: '1rem',
  },
  upload: {
    padding: '0.2rem 1rem',
    backgroundColor: '#2DEE7A',
    color: 'black',
    fontWeight: '500',
    borderRadius: '0.2rem',
    border: 'none',
    margin: '0 auto 0 0',
    fontSize: '0.8rem',
    position: 'relative',
    '& input': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      opacity: '0',
    },
  },
  imgUploads: {
    padding: '0 1rem',
    width: '100%',
    maxWidth: '25rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '&>div': {
      margin: '0.35rem 0.5rem',
    },
  },
}));

const Admin = () => {
  const [idAuth, setIdAuth] = useState(localStorage.getItem('idSeller'));
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const date = new Date();

  const dateToday = {
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear(),
  };
  const [images, setImages] = useState([]);
  const handleUpload = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImages([...images, e.target.files[0]]);
    }
  };
  const deleteImage = (img) => {
    setImages(images.filter((image) => image.name !== img));
  };
  const [data, setData] = useState({
    name: '',
    price: '',
    link: '',
    description: '',
    idPhoto: '',
  });
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [urlImages, setUrlImages] = useState([]);
  const [idPropduct, setIdProduct] = useState(null);
  const sendData = (e) => {
    e.preventDefault();

    let dataProduct = JSON.stringify({
      Name: data.name,
      Price: data.price,
      Description: data.description,
      id_photo: data.idPhoto,
      link: data.link,
    });

    let configProduct = {
      method: 'post',
      url: `https://raumented.herokuapp.com/api/addProduct/${idAuth}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: dataProduct,
    };

    axios(configProduct)
      .then(function (response) {
        setIdProduct(JSON.stringify(response.data));
        let links = [];

        images.forEach((image, index) => {
          const uploadTask = storage
            .ref(`${idAuth}/${response.data.idProduct}/${image.name}`)
            .put(image);
          uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
              console.log(error);
            },
            () => {
              storage
                .ref(`${idAuth}/${response.data.idProduct}`)
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                  links.push(url);
                  console.log('\n\nlinks'); //return 'url'; // { [`url${count}`]: url };
                  console.log(links); //return 'url'; // { [`url${count}`]: url };
                  console.log('----------\n\n'); //return 'url'; // { [`url${count}`]: url };
                  if (index === images.length - 1) {
                    let dataImages = JSON.stringify({
                      url1: links[0],
                      url2: links[1],
                      url3: links[2],
                    });
                    console.log('links');
                    console.log(links);
                    console.log('\n');
                    console.log('url1->: ', JSON.stringify(response.data));
                    let configPhotos = {
                      method: 'post',
                      url: `https://raumented.herokuapp.com/api/uploadPhoto/${idAuth}/${response.data.idProduct}`,
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      data: dataImages,
                    };

                    axios(configPhotos)
                      .then(function (response) {
                        console.log('funciona?');
                        console.log('url: ', idPropduct);
                        alert(JSON.stringify(response.data));
                        window.location.reload();
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  }
                });
            }
          );
          //return links; //return links; //[links.length];
        });
        console.log('links');
        console.log(links);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [products, setProducts] = useState(null);

  useEffect(() => {
    let confiGet = {
      method: 'get',
      url: `https://raumented.herokuapp.com/api/getProducts/${idAuth}`,
      headers: {},
    };

    axios(confiGet)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setProducts(response.data.productArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [idAuth]);
  const deleteCard = (idProducto) => {
    let configDelete = {
      method: 'delete',
      url: `https://raumented.herokuapp.com/api/deleteProduct/${idAuth}/${idProducto}}`,
      headers: {},
    };

    axios(configDelete)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className={classes.container}>
      <div className={classes.headerAdmin}>
        <h2>Todos los Productos</h2>
        <div>
          Hoy: {`${dateToday.month} ${dateToday.day}, ${dateToday.year}`}
        </div>
      </div>
      <div>
        <div className={classes.addContent}>
          <button className={classes.addButton} onClick={handleOpen}>
            <img src={plus} alt="plus" /> Añadir producto
          </button>
        </div>
      </div>
      <div className={classes.cardsContainer}>
        {products
          ? products.map((e) => {
              return (
                <Card
                  title={e.name}
                  key={e.id}
                  delete={(e) => {
                    e.preventDefault();
                    deleteCard(e.id);
                  }}
                />
              );
            })
          : 'No hay productos disponibles...'}
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
                name="name"
                setData={handleInput}
              />
              <InputForm
                label="Precio (S/.)"
                placeholder="1.50"
                type="text"
                name="price"
                setData={handleInput}
              />
              <InputForm
                label="URL"
                placeholder="https://www.linio.com.pe/p/mermelada-de-fresas"
                type="text"
                name="link"
                setData={handleInput}
              />
              <TextArea
                label="Descripción"
                placeholder="Fanta light es una bebiba..."
                type="text"
                name="description"
                setData={handleInput}
              />
              <div className={classes.upload}>
                Subir fotos <input type="file" onChange={handleUpload} />
              </div>
            </div>
            <div className={classes.imgUploads}>
              {images.length !== 0
                ? images.map((e) => {
                    return (
                      <ImgSelected
                        name={e.name}
                        onClick={() => deleteImage(e.name)}
                      />
                    );
                  })
                : ''}
            </div>
            <button
              className={classes.addButton}
              style={{ margin: '1rem' }}
              onClick={sendData}
            >
              Agregar producto
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Admin;
