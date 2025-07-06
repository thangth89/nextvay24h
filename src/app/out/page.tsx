import dynamic from 'next/dynamic';

const OutRedirect = dynamic(() => import('./client'), {
  ssr: false,
});

export const dynamic = 'force-dynamic';

export default function OutPage() {
  return <OutRedirect />;
}
