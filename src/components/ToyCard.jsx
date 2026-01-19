function ToyCard(props) {
  return (
    <div className="toycard">
      <img src={props.image} alt={props.name} width="100" />
      <div>
        <h2>{props.name}</h2>
        <hr />
        <p>Price: <span>${props.price}</span></p>
        <button onClick={props.onToaddCard}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ToyCard