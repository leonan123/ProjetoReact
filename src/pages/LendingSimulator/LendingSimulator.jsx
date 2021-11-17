import React from 'react';

import { motion } from 'framer-motion';

import LeftSection from '../../components/LendingPageComponents/LeftSection/LeftSection';
import RightSection from '../../components/LendingPageComponents/RightSection/RightSection';

import './style.css';

const LendigSimulator = () => {
	const pageVariants = {
		in: {
			opacity: 1,
			x: 0
		},
		out: {
			opacity: 0,
			x: '100%'
		}
	};
	const pageTransition = {
		type: 'spring',
		stiffness: 50,
		duration: 0.3
	};

	return (
		<motion.div initial="out" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-md-6">
						<div className="content-left">
							<LeftSection />
						</div>
					</div>
					<div className="col-md-6 col-right">
						<div className="container-x">
							<button> 
								<i class="bi bi-x" />
							</button>
						</div>
						<div className="content-right">
							<RightSection />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default LendigSimulator;
