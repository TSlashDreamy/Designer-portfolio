import React from 'react';
import useFirestore from '../../../hooks/useFirestore';
import { motion } from 'framer-motion';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ImageGrid = ({ setSelectedImg, setSelectedDB, setSelectedImgID }) => {

const { docs } = useFirestore('posters');
const database = "posters";

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                whileHover={{opacity: 1}}
                
                onClick={() => {setSelectedDB(database); setSelectedImg(doc.url); setSelectedImgID(doc.id)}}
                >
                    <SkeletonTheme color="#cfcfcf" highlightColor="#f5f5f5">
                    <Skeleton style={{ height: "100%", position: "absolute", top: 0 }}/>
                    </SkeletonTheme>
                    <motion.img src={doc.url} alt={doc.name} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;