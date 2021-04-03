const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const container2 = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const item2 = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export{
    container,
    container2,
    item,
    item2
}