import React from 'react';
import { Route, Routes } from "react-router-dom";
import PreviewPage from './PreviewPage';
import EditPage from './EditPage';
import MainPage from './MainPage'

class PagesRouter extends React.Component {
          
  render() {

    return <Routes>
             <Route exact="true" path="/" element={<MainPage />} />
             <Route path="/preview" element={<PreviewPage />} />
             <Route path="/edit" element={<EditPage />} />
      </Routes>
        
  }

}
    
export default PagesRouter;
    