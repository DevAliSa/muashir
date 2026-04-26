import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { hostname } from 'os';

const nextConfig: NextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "assets.coingecko.com"
            }
        ]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
