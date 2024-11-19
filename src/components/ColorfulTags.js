import React from 'react';

const colorList = [
    '#25c2a0', '#1877F2', '#FF5733', '#C70039', '#900C3F',
    '#581845', '#FFC300', '#DAF7A6', '#FF5733', '#C70039',
    '#900C3F', '#581845', '#FFC300', '#DAF7A6', '#FF5733',
    '#C70039', '#900C3F', '#581845', '#FFC300', '#DAF7A6'
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