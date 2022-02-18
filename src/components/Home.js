import { Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import  grapesjs  from 'grapesjs';
import gjsPresetWebPage from 'grapesjs-preset-webpage'
import '../../node_modules/grapesjs/dist/css/grapes.min.css';
import '../../node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import '../styles/main.scss'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const Home =()=>{
    const [editor, setEditor] = useState(null);
    const history = useHistory();
    const [html, setHtml] = useState(null);
    const [css, setCss] = useState(null);
    useEffect(()=>{
        const editor = grapesjs.init({
          container:"#editor",
          plugins:[gjsPresetWebPage, 'gjs-blocks-basic'],
          pluginsOpts:{
            gjsPresetWebPage:{}
          },
        });
        setHtml(editor.getHtml());
        setCss(editor.getCss())
        setEditor(editor);
      }, []);
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