import { useTranslations } from 'next-intl';
export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="text-center animate-fade-in text-sm text-muted-foreground border-t py-6">
      <p>
        © {new Date().getFullYear()}{' '}
        <span className="font-semibold text-primary">Muashir</span>{' '}
        {t('Footer.Footer')}
      </p>
    </footer>
  );
};
export default Footer;
