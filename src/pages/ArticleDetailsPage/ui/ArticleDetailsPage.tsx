import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('about');

  return <div>{t('Статья')}</div>;
};

export default ArticleDetailsPage;
