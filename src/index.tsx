import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { OptionType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';



const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {

	const [pageStyles, setPageStyles] = useState({
		fontFamily: defaultArticleState.font.value,
		fontSize: defaultArticleState.fontSize.value,
		fontColor: defaultArticleState.fontColor.value,
		backgroundColor: defaultArticleState.backgroundColor.value,
		containerWidth: defaultArticleState.width.value,
	})

	const applyStyles = (form: {
		font: OptionType,
		fontSize: OptionType,
		fontColor: OptionType,
		backgroundColor: OptionType,
		width: OptionType
	}) => {
		setPageStyles({
			fontFamily: form.font.value,
			fontSize: form.fontSize.value,
			fontColor: form.fontColor.value,
			backgroundColor: form.backgroundColor.value,
			containerWidth: form.width.value
		})
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageStyles.fontFamily,
					'--font-size': pageStyles.fontSize,
					'--font-color': pageStyles.fontColor,
					'--container-width': pageStyles.containerWidth,
					'--bg-color': pageStyles.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm onApply={applyStyles} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
