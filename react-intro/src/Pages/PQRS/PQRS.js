import { BarraSuperior } from '../../ppal/BarraSuperior';
import { BarraSecundaria } from '../../ppal/BarraSecundaria';
import { FooterApp } from '../../ppal/FooterApp';
import { LeftBarra } from '../../ppal/LeftBarra';
import { MenuLeftBarra } from '../../ppal/MenuLeftBarra';
import { defaulttitleleftbarra} from '../../App_data';
import { PQRSList } from './PQRSList';
import { PQRSSearch } from './PQRSSearch';
import { PQRSSection } from './PQRSSection';
import React from 'react';
import '../../App.css';
import './css-c/PQRS.css';


function PQRS() {
  return (
      <React.Fragment>
        
          <BarraSuperior />
          <BarraSecundaria />
       
            <PQRSSection   >
                <PQRSSearch></PQRSSearch>
                <PQRSList></PQRSList>
            </PQRSSection>
 
            <MenuLeftBarra >
                  {defaulttitleleftbarra.map(titleleftarray => (
                    <LeftBarra
                    key={titleleftarray.leftoption} 
                    leftoption={titleleftarray.leftoption} 
                    iconleft={titleleftarray.iconleft}
                    linkleft={titleleftarray.linkleft}
                    /> ))}  
                </MenuLeftBarra>  
          <FooterApp />
      </React.Fragment>
      );
}



export default PQRS;