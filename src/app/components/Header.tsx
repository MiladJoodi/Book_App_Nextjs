"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <motion.div className="left_container"
                transition={{ type: 'spring', damping: 18, mass: 0.75 }}
                initial={{ opacity: 0, x: -10000 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <h1 className="book_app_title">Book App</h1>

                <motion.input type="text" placeholder="Tell me what you like to read and we will get that..."
                    className="search_input"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                />
            </motion.div>

            <motion.div className="right_container"
            transition={{type:'spring', damping: 18, mass: 0.75}}
            initial={{opacity:0, x:1000}}
            animate={{opacity: 1,x:0}}
            >
            <Link 
            href="/profile"
            className="avatar_link"
            >
            <motion.div>
                <motion.img
                src="/profile.png"
                alt="avatar"
                className="avatar_img"
                initial={{opacity:0, x:100}}
                animate={{opacity:1,x:0}}
                />

            </motion.div>
            </Link>

            </motion.div>



        </header>
    );
}


export default Header;