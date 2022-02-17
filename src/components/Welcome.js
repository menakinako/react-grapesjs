import { Button, Typography } from "@material-ui/core"
import { useHistory } from 'react-router-dom';


const Welcome =()=>{
    const history = useHistory();
    const changePage =()=>{
        history.push('/grapesjs')
    }
    return(
        <div style={{textAlign: 'center', marginTop:300}}>
        <Typography variant="h4">Click here to go to the Editor</Typography>
          <Button variant="contained" color="secondary" onClick={changePage}>Design</Button>
        </div>
    )
}

export default Welcome;