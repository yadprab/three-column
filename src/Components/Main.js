import React from "react";
import { data } from "./dataObject";
import { Car1 } from "./Car1";
import { Car2 } from "./Car2";
import { Car3 } from "./Car3";
import { motion } from "framer-motion";
import { container2, container, item, item2 } from "./animation";

function Main() {
  return (
    <>
      <motion.main variants={container} initial="hidden" animate="visible">
        {data.map((d) => {
          return (
            <>
              <motion.article
                className="cards--section"
                key={d.id}
                variants={item}
              >
                <header>
                  {d.id === 0 ? <Car1 /> : d.id === 1 ? <Car2 /> : <Car3 />}
                </header>
                <motion.article
                  className="content"
                  variants={container2}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h3 variants={item2}>{d.title}</motion.h3>
                  <motion.p variants={item2}>{d.body}</motion.p>
                </motion.article>

                <footer>
                  <motion.button id="learn--more" whileTap={{scale:0.98}}>learn more</motion.button>
                </footer>
              </motion.article>
            </>
          );
        })}
      </motion.main>

    
    </>
  );
}

export { Main };
