import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';
import React from 'react';


export type OnClick = () => void;
interface IArrowButtonProps {
	visibility: boolean,
	toggleVisibility?: OnClick;
}

export const ArrowButton = (props: IArrowButtonProps) => {
	const {visibility, toggleVisibility} = props;
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx({
				[styles.container] : true,
				[styles.container_open] : visibility
			})}
			onClick={toggleVisibility}
		>
			<img 
				src={arrow} 
				alt='иконка стрелочки' 
				className={clsx({
					[styles.arrow] : !visibility,
					[styles.arrow_open] : visibility
				})} />
		</div>
	);
};
