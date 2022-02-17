import { Typography } from '@material-ui/core';
import { useLocation} from 'react-router-dom';


const Home =()=>{
    const location = useLocation();
    const html  = location.state.params;
    const css  = location.state.anotherparams;
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
           <div>
           <Typography variant="h5">Html</Typography>
            {html}
           </div>
           <div>
           <Typography variant="h5">Css</Typography>
            {css}
           </div>
        </div>
    )
}

export default Home;