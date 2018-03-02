
import React from 'react';
import cn from 'classnames';
import styles from './index.scss';

function L({ children, ordered, flex, ...props }) {
  const Tag = ordered ? 'ol' : 'ul';
  const style = cn(
    styles.ul,
    flex && styles.flex
  );
  return (
    <Tag  className={style} {...props}>
      {children}
    </Tag>
  )
}

function Ul({...props}) {
  return (
    <L {...props} />
  )
}

function Ol({...props}) {
  return (
    <L ordered {...props} />
  )
}

export {L, Ul, Ol}
