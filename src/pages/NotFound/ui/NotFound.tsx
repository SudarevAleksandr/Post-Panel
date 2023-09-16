import { classNames } from 'shared/lib/classNames/classNames';

import styles from './NotFound.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
  className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
  const { t } = useTranslation();
  return <div className={classNames(styles.container, {}, [className])}>{t('Страница не найдена')}</div>;
};
