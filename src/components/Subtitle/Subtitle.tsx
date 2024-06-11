import React from 'react';

export interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => <h2>{text}</h2>;

export default Subtitle;
