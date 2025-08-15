// components/LoanCard.tsx
'use client';

import Image from 'next/image';
import AffiliateButton from '@/components/AffiliateButton';
import React from 'react';

type LoanCardProps = {
  topLabel: string;
  imageSrc: string;
  altText: string;
  title: string;
  duyetText: string;
  amount: string;
  features: string[];
  affiliateLink: string;
  position: number;
  label: string;
};

const LoanCard: React.FC<LoanCardProps> = ({
  topLabel,
  imageSrc,
  altText,
  title,
  duyetText,
  amount,
  features,
  affiliateLink,
  position,
  label,
}) => {
  return (
    <article className="loan-card">
      <span className="top-label">{topLabel}</span>
      <header className="card-header">
        <Image
          src={imageSrc}
          width={80}
          height={80}
          alt={altText}
          className="logo"
          loading="lazy"
        />
        <h3>{title}</h3>
        <p className="duyet">{duyetText}</p>
        <p className="amount">{amount}</p>
      </header>
      <div className="card-body">
        <ul className="info-list">
          {features.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
      <footer className="card-footer">
        <AffiliateButton
          href={affiliateLink}
          label={label}
          ariaLabel={`Vay tiền tại ${title}`}
          position={position}
          category="referral_apps"
        >
          VAY ONLINE NGAY
        </AffiliateButton>
      </footer>
    </article>
  );
};

export default React.memo(LoanCard);
