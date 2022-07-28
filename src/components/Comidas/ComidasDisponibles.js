import ItemComidaDisponible from './ItemComidaDisponible';
import classes from './ComidasDisponibles.module.css'

const DUMMY_COMIDAS = [
  {
    id: "m1",
    nombre: "Sushi",
    descripcion: "Finest fish and veggies",
    precio: 22.99,
  },
  {
    id: "m2",
    nombre: "Schnitzel",
    descripcion: "A german specialty!",
    precio: 16.5,
  },
  {
    id: "m3",
    nombre: "Barbecue Burger",
    descripcion: "American, raw, meaty",
    precio: 12.99,
  },
  {
    id: "m4",
    nombre: "Green Bowl",
    descripcion: "Healthy...and green...",
    precio: 18.99,
  },
];

const ComidasDisponibles = () => {
    //<UserItem key={user.id} userName={user.userName} date={user.date} />
    const listaComidas = DUMMY_COMIDAS.map(comida => (
    <ItemComidaDisponible 
        key={comida.id}
        nombre={comida.nombre}
        descripcion={comida.descripcion}
        precio={comida.precio}
    />
    ));

  return (
    <section className={classes.comidas}>
      <ul>{listaComidas}</ul>
    </section>
  );
};

export default ComidasDisponibles;
