import React from 'react'
import {motion} from 'motion/react';
const Framer = () => {
  return (
    <div>
      {/* <motion.h1 animate={{y:600}}>
        Hello
      </motion.h1> */}

      <motion.div style={{width:"300px",height:"300px",backgroundColor:"red"}}
      animate={{x:500,y:500,rotate:180}}
      transition={{duration:5,delay:2}}
      >

      </motion.div>
    </div>
  )
}

export default Framer
