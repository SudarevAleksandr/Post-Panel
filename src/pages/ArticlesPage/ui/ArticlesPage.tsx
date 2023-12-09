import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
  const { t } = useTranslation('about');

  return <div>{t('Статьи')}</div>;
};

export default ArticlesPage;
