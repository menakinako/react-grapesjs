import React, {useState, useEffect} from 'react';
import  grapesjs  from 'grapesjs';
import gjsPresetWebPage from 'grapesjs-preset-webpage'
import '../../node_modules/grapesjs/dist/css/grapes.min.css';
import '../../node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import '../styles/main.scss'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
 
const Grapejs=()=>{
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
      assetManager: {
        showUrlInput: true,
        autoAdd: true,
      },
      storageManager: {
        id: 'gjs-',             
        type: 'local',         
        autosave: true,        
        autoload: true,    
        storeHtml: true,   
        storeCss: true,      
        stepsBeforeSave: 1,     
      },
    })
    setEditor(editor);
  }, []);

  const savePage =()=>{  
    setHtml(editor.getHtml());
    setCss(editor.getCss())
  history.push('/home',{params:editor.getHtml(), anotherparams:editor.getCss()})
  }
 
  
    return(
        <div>
           <div id="editor"></div>
           <div className="toolbar" id="button">
               <Button variant="contained" color="primary" onClick={savePage}> Save</Button>
            </div>
        </div>
    )
}

export default Grapejs;