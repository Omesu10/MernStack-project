import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PortalIcon from '@mui/icons-material/Web';
import StatisticsIcon from '@mui/icons-material/Business';
import FinanceIcon from '@mui/icons-material/MonetizationOn';
import MerchantIcon from '@mui/icons-material/BarChart';
import FoodIcon from '@mui/icons-material/Receipt';
import logo from '../../assest/images/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import './sidebar-styles.css';




export default function Sidebar() {
    
    return(
        <>
            <div className='container'>
                <nav className='side_nav'>
                    <ul className='sidebar-ul'>
                        <li>
                            <Link to="" className='logo'>
                                <img src={logo} alt="#" className='logo-img'/>
                                
                            </Link>
                        </li>
                        <li>
                            <Link to="" className='wall-side'>
                                <HomeIcon
                                style={{
                                    marginRight: "8px",
                                }}
                                />
                                <span className='long-copy'>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className='wall-side'>
                                <PortalIcon
                                style={{
                                    marginRight: "8px",
                                }}
                                />
                                <span className='nav-item-1'>Portal</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className='wall-side'>
                                <StatisticsIcon
                                style={{
                                    marginRight: "8px",
                                }}
                                />
                                <span className='nav-item-1'>Statistics</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className='wall-side'>
                                <FinanceIcon
                                style={{
                                    marginRight: "8px",
                                }}
                                />
                                <span className='nav-item-1'>Finance</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className='wall-side'>
                                <MerchantIcon
                                style={{
                                    marginRight: "8px",
                                }}
                                />
                                <span className='nav-item-1'>Merchant</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" className='wall-side'>
                                <FoodIcon
                                style={{
                                    marginRight: "8px",
                                }}
                                />
                                <span className='nav-item-1'>Food & Supply</span>
                            </Link>
                        </li>
                        
                    </ul>
                    <div className='bottom'>
                        <div className='side-link'>
                                <span></span>
                                <Link className='wall-side' to='/'>
                                    <LogoutIcon

                                    />
                                    <span className='nav-item-1'>Logout</span>
                                </Link>

                        </div>
                    </div>
                </nav>
                
            </div>
             </>
    );
}





































































// i



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Dashboard'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <MailIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <List>
//         {['portal'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <List>
//         {['statistics'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <List>
//         {[ 'finance'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <List>
//         {[ 'traders'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <List>
//         {[ 'merchant'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <List>
//         {[ 'invoice'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
      
//       <Divider />
//       <List>
//         {['Log out'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <logoutIcon /> : <logoutIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }






















































































