import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ children, pageKey }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pageKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}