interface DinoProps {
  dinosaures: {
    name: string;
    image: string;
  };
}
function Dino({dinosaures}:DinoProps) {
    return (
      <>
        <figure>
          <h1>{dinosaures.name}</h1>
          <img className='image' src={dinosaures.image} alt={dinosaures.name} />
        </figure>
      </>
    );
}

export default Dino