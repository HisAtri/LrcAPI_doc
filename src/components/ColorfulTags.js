import React from 'react';

const colorList = [
    '#D52CF9', '#353FF2', '#98FFD4', '#E7F621', '#F06805',
    '#D9117F', '#BDDEF2', '#4C0BD9', '#EDF25C', '#F25757',
    '#F21905', '#D92929', '#D97B73', '#4D9920', '#9298CC',
    '#A64E4E', '#4D2766', '#BFD833', '#2EE836', '#FC44F2',
    '#4595E6', '#95E645', '#45E6E6', '#E69545', '#DAF7A6'
];

const getRandomColor = (text) => {
// 使用文本作为随机数种子
    const seed = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomIndex = seed % colorList.length;
    return colorList[randomIndex];
};

const getTextColor = (backgroundColor) => {
    const [r, g, b] = backgroundColor.match(/\w\w/g).map((x) => parseInt(x, 16));
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 186 ? '#000000' : '#FFFFFF';
};

const Tag = ({ children }) => {
    const backgroundColor = getRandomColor(children);
    const textColor = getTextColor(backgroundColor);

    return (
        <span
            style={{
                backgroundColor: backgroundColor,
                borderRadius: '2px',
                color: textColor,
                padding: '0.2rem',
            }}
        >
{children}
</span>
    );
};

export default Tag;