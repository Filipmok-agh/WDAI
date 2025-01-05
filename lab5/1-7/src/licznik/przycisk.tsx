
function Przycisk(props: { onClick: () => void }) {
  return (
    <button onClick={props.onClick}>Dodaj</button>
  );
}

export default Przycisk;
