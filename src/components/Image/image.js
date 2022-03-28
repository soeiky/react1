function Image (props){
  const style = {
    width: props.width,
    height: props.height,
  };
  return <img
  className="Image"
  style={style}
  src={props.url}/>;
}
export default Image;