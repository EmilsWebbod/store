import React from 'react';
import styles from './index.scss';

const Li = ({children, ...props}) => (
  <li className={styles.Li} {...props}>{children}</li>
);

export default Li;
