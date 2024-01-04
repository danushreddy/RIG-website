import Item from './item.jsx' 
import {Address,navigate,connect} from './menu.js'
const itemsContainer = () => {
  return (
    <div className='grid  justify-items-center grid-cols-2 sm:grid-cols-3 gap-30 sm:px-8 px-20 py-16'>
    <Item Links={Address} title="ADDRESS"/>
    <Item Links={navigate} title="NAVIGATE"/>
    <Item Links={connect} title="CONNECT WITH US"/>
    
    </div>
    
    
  );
}

export default itemsContainer