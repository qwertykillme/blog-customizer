import clsx from "clsx";
import { useState, CSSProperties } from "react";
import { Article } from "./components/article";
import { ArticleParamsForm } from "./components/article-params-form";
import { defaultArticleState, OptionType } from "./constants/articleProps";

import styles from './styles/index.module.scss';

export const App = () => {
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