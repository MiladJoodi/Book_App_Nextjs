"use client"

import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";


const MenuList = [
    {
      title:"Home",
      icon: <i className="fa fa-home iconStyle"></i>
    },
    {
      title:"Contact",
      icon: <i className="fa fa-envelope iconStyle"></i>
    },
    {
      title:"AboutUs",
      icon: <i className="fa fa-info-circle iconStyle"></i>
    },
    {
      title:"Settings",
      icon: <i className="fa fa-cog iconStyle"></i>
    },
    {
      title:"Contact",
      icon: <i className="fa fa-home iconStyle"></i>
    },
    {
      title:"RateUs",
      icon: <i className="fa fa-star iconStyle"></i>
    },
    {
      title:"Change Password",
      icon: <i className="fa fa-eye iconStyle"></i>
    },
    {
      title:"Settings",
      icon: <i className="fa fa-cog iconStyle"></i>
    }
  ]

const SideBar = () => {
    return (
        <motion.div className="left_container"
        transition={{ type: 'spring', damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -10000 }}
        animate={{ opacity: 1, x: 0 }}
    >
        
        
    </motion.div>
    );
}

export default SideBar;