import './ListItem.css';
import { useNavigate } from 'react-router-dom';
const ListItem = (props) => {
  let i = 1;
  const navigate = useNavigate();
  const listHandler = () => {
    navigate(`/dashboard/${i}`);
  }
return (
<div className='list-item' onClick={listHandler}>
  <div className='list-item__description'>
    <h2>{props.title}</h2>  
  </div>
</div>
);
}
export default ListItem;