import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { Select } from '../select';
import { OptionType, backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions, defaultArticleState } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import React, {useState} from 'react';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';

interface IArticleParamsFormProps {
	onApply: (form: {
		font: OptionType;
		fontSize: OptionType;
		fontColor: OptionType;
		backgroundColor: OptionType;
		width: OptionType;
	}) => void;
}

export const ArticleParamsForm = ( props: IArticleParamsFormProps) => {
	const {onApply} = props;
	const [visibility, setVisibility] = useState(false);
	
	const [selectedFont, setFont] = useState<OptionType>(fontFamilyOptions[0])
	const [selectedFontSize, setFontSize] = useState<OptionType>(fontSizeOptions[0])
	const [selectedFontColor, setFontColor] = useState<OptionType>(fontColors[0])
	const [selectedBackgroundColor, setBackgroundColor] = useState<OptionType>(backgroundColors[0])
	const [selectedWidth, setWidth] = useState<OptionType>(contentWidthArr[0])

	const [form, setForm] = useState(defaultArticleState)

	const toggleVisibility = () => {
		visibility ? setVisibility(false) : setVisibility(true);
	}

	const handleReset = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setFont(defaultArticleState.font);
		setFontSize(defaultArticleState.fontSize);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setWidth(defaultArticleState.width);
		setForm(defaultArticleState);
		onApply(defaultArticleState);
	}

	const handleApply = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const newForm = {
			font: selectedFont,
			fontSize: selectedFontSize,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			width: selectedWidth
		}
		setForm(newForm);
		onApply(newForm)
	}

	return (
		<>
			<ArrowButton visibility={visibility} toggleVisibility={toggleVisibility}/>
			<aside 
				className={clsx({
					[styles.container] : true,
					[styles.container_open] : visibility
				})}
			>
				<form className={styles.form} onReset={handleReset} onSubmit={handleApply}>
					<Text as="h2" size={31} uppercase={true} weight={800}>Задайте параметры</Text>
					
					<Select
						selected={selectedFont}
						onChange={setFont}
						options={fontFamilyOptions}
						title="Шрифт"
					/>

					<RadioGroup
						selected={selectedFontSize}
						name='radio'
						onChange={setFontSize}
						options={fontSizeOptions}
						title="Размер шрифта"
					/>

					<Select
						selected={selectedFontColor}
						onChange={setFontColor}
						options={fontColors}
						title="Цвет шрифта"
					/>

					<Separator/>

					<Select
						selected={selectedBackgroundColor}
						onChange={setBackgroundColor}
						options={backgroundColors}
						title="Цвет фона"
					/>

					<Select
						selected={selectedWidth}
						onChange={setWidth}
						options={contentWidthArr}
						title="Ширина контента"
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
