import './ListItem.css';
import { useNavigate, useParams } from 'react-router-dom';
const ListItem = (props) => {
 const params = useParams();
  const navigate = useNavigate();
  const listHandler = () => {
    navigate(`/dashboard/${params.id}`);
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